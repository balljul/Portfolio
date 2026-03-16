<?php

namespace App\Controllers;

use App\Config\YamlConfigLoader;
use Twig\Environment;
use TCPDF;

class HomeController
{
    private Environment $twig;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    public function index(): string
    {
        // Load YAML configs
        $yamlConfigs = YamlConfigLoader::getAllConfigs();

        // Use YAML configs only
        $data = [
            'profile' => !empty($yamlConfigs['base']) ? array_values($yamlConfigs['base'])[0] : $this->getDefaultProfile(),
            'experience' => !empty($yamlConfigs['experience']) ? ['companies' => $this->transformExperienceData($yamlConfigs['experience'])] : ['companies' => []],
            'projects' => !empty($yamlConfigs['projects']) ? ['featured' => array_values($yamlConfigs['projects'])] : ['featured' => []],
            'skills' => !empty($yamlConfigs['skills']) ? array_values($yamlConfigs['skills']) : [],
            'achievements' => !empty($yamlConfigs['achievements_certificates']) ? $this->transformAchievementsData($yamlConfigs['achievements_certificates']) : ['certifications' => [], 'contests' => []],
            'skillsMap' => $this->createSkillsMap($yamlConfigs['skills'] ?? [])
        ];

        return $this->twig->render('home.twig', $data);
    }

    private function transformExperienceData(array $experienceConfigs): array
    {
        $grouped = [];
        foreach ($experienceConfigs as $key => $config) {
            $companyName = $config['company'];
            $position = [
                'id' => $key . '-position',
                'title' => $config['position'],
                'employmentType' => $config['employment_type'] ?? null,
                'range' => $this->formatDateRange($config['start_date'], $config['end_date']),
                'description' => $config['responsibilities'] ?? [],
                'technologies' => $config['technologies'] ?? [],
                'start_date' => $config['start_date'] ?? '1970-01-01',
            ];

            if (!isset($grouped[$companyName])) {
                $grouped[$companyName] = [
                    'id' => $key,
                    'company' => $companyName,
                    'companyUrl' => $config['company_url'] ?? null,
                    'companyLogo' => $config['company_logo'] ?? null,
                    'location' => $config['location'],
                    'totalDuration' => $config['total_duration'] ?? null,
                    'positions' => [],
                ];
            }
            $grouped[$companyName]['positions'][] = $position;
        }

        foreach ($grouped as &$company) {
            usort($company['positions'], function ($a, $b) {
                return strcmp($b['start_date'], $a['start_date']);
            });
            foreach ($company['positions'] as &$pos) {
                unset($pos['start_date']);
            }
        }

        return array_values($grouped);
    }

    private function transformAchievementsData(array $achievementsConfigs): array
    {
        $achievements = ['certifications' => [], 'contests' => []];

        foreach ($achievementsConfigs as $key => $config) {
            $item = [
                'name' => $config['title'],
                'issuer' => $config['issuing_organization'] ?? $config['organizer'] ?? '',
                'date' => $config['date_earned'] ?? $config['date'] ?? '',
                'url' => $config['credential_url'] ?? $config['url'] ?? '#',
                'description' => $config['description'],
                'icon' => $config['badge_image'] ?? null,
                'type' => $config['type']
            ];

            if ($config['type'] === 'certification') {
                $achievements['certifications'][] = $item;
            } else {
                $achievements['contests'][] = array_merge($item, [
                    'achievement' => $config['achievement'] ?? '',
                    'organizer' => $config['issuing_organization'] ?? $config['organizer'] ?? '',
                    'technologies' => $config['technologies'] ?? []
                ]);
            }
        }

        return $achievements;
    }

    private function formatDateRange(?string $startDate, ?string $endDate): string
    {
        if (!$startDate) return '';

        $start = date('F Y', strtotime($startDate));
        $end = $endDate ? date('F Y', strtotime($endDate)) : 'Present';

        return $start . ' - ' . $end;
    }
    
    private function createSkillsMap(array $skillsConfigs): array
    {
        $map = [];
        foreach ($skillsConfigs as $key => $skill) {
            // Create both exact case and lowercase keys for flexible matching
            $map[$skill['title']] = $skill;
            $map[strtolower($skill['title'])] = $skill;
        }
        return $map;
    }

    public function downloadCv(): void
    {
        $yamlConfigs = YamlConfigLoader::getAllConfigs();
        
        $profile = !empty($yamlConfigs['base']) ? array_values($yamlConfigs['base'])[0] : $this->getDefaultProfile();
        $experience = !empty($yamlConfigs['experience']) ? ['companies' => $this->transformExperienceData($yamlConfigs['experience'])] : ['companies' => []];
        $projects = !empty($yamlConfigs['projects']) ? ['featured' => array_values($yamlConfigs['projects'])] : ['featured' => []];
        $skills = !empty($yamlConfigs['skills']) ? array_values($yamlConfigs['skills']) : [];
        $achievements = !empty($yamlConfigs['achievements_certificates']) ? $this->transformAchievementsData($yamlConfigs['achievements_certificates']) : ['certifications' => [], 'contests' => []];

        $pdf = new TCPDF('P', 'mm', 'A4', true, 'UTF-8', false);
        
        $pdf->SetCreator('Portfolio Website');
        $pdf->SetAuthor($profile['name']);
        $pdf->SetTitle($profile['name'] . ' - CV');
        $pdf->SetSubject('Curriculum Vitae');
        
        $pdf->setPrintHeader(false);
        $pdf->setPrintFooter(false);
        $pdf->SetMargins(20, 20, 20);
        $pdf->SetAutoPageBreak(true, 20);
        
        $pdf->AddPage();
        
        // Header with name and contact
        $pdf->SetFillColor(240, 240, 240);
        $pdf->Rect(0, 0, 210, 50, 'F');
        
        $pdf->SetY(15);
        $pdf->SetFont('helvetica', 'B', 28);
        $pdf->SetTextColor(51, 51, 51);
        $pdf->Cell(0, 12, strtoupper($profile['name']), 0, 1, 'C');
        
        $pdf->SetFont('helvetica', '', 16);
        $pdf->SetTextColor(102, 102, 102);
        $pdf->Cell(0, 8, $profile['title'], 0, 1, 'C');
        
        // Contact info line
        $pdf->SetFont('helvetica', '', 12);
        $contactInfo = [];
        if (!empty($profile['email'])) $contactInfo[] = $profile['email'];
        if (!empty($profile['location'])) $contactInfo[] = $profile['location'];
        if (!empty($profile['phone'])) $contactInfo[] = $profile['phone'];
        if (!empty($profile['website'])) $contactInfo[] = $profile['website'];
        
        $pdf->Cell(0, 6, implode(' • ', $contactInfo), 0, 1, 'C');
        
        $pdf->SetY(55);
        $pdf->SetTextColor(0, 0, 0);
        
        // Helper function for section headers
        $addSectionHeader = function($title) use ($pdf) {
            $pdf->Ln(5);
            $pdf->SetFont('helvetica', 'B', 14);
            $pdf->SetTextColor(51, 51, 51);
            $pdf->Cell(0, 8, strtoupper($title), 0, 1, 'L');
            $pdf->SetLineWidth(0.5);
            $pdf->SetDrawColor(180, 180, 180);
            $pdf->Line(20, $pdf->GetY(), 190, $pdf->GetY());
            $pdf->Ln(3);
            $pdf->SetTextColor(0, 0, 0);
        };
        
        if (!empty($profile['bio'])) {
            $addSectionHeader('About');
            $pdf->SetFont('helvetica', '', 11);
            $pdf->MultiCell(0, 6, $profile['bio'], 0, 'J');
            $pdf->Ln(3);
        }
        
        if (!empty($experience['companies'])) {
            $addSectionHeader('Work Experience');
            
            foreach ($experience['companies'] as $company) {
                $pdf->SetFont('helvetica', 'B', 13);
                $pdf->SetTextColor(51, 51, 51);
                $pdf->Cell(0, 7, $company['company'], 0, 1, 'L');
                
                foreach ($company['positions'] as $position) {
                    $pdf->SetFont('helvetica', 'B', 11);
                    $pdf->SetTextColor(0, 0, 0);
                    $pdf->Cell(120, 6, $position['title'], 0, 0, 'L');
                    
                    $pdf->SetFont('helvetica', '', 10);
                    $pdf->SetTextColor(102, 102, 102);
                    $pdf->Cell(0, 6, $position['range'], 0, 1, 'R');
                    
                    if (!empty($position['description'])) {
                        $pdf->SetFont('helvetica', '', 10);
                        $pdf->SetTextColor(0, 0, 0);
                        foreach ($position['description'] as $desc) {
                            $pdf->SetX(25);
                            $pdf->Cell(5, 5, '•', 0, 0, 'L');
                            $pdf->SetX(30);
                            $pdf->MultiCell(160, 5, $desc, 0, 'L');
                        }
                    }
                    
                    if (!empty($position['technologies'])) {
                        $pdf->SetFont('helvetica', 'I', 9);
                        $pdf->SetTextColor(102, 102, 102);
                        $pdf->SetX(25);
                        $pdf->MultiCell(0, 4, 'Technologies: ' . implode(', ', $position['technologies']), 0, 'L');
                    }
                }
                $pdf->Ln(4);
            }
        }
        
        if (!empty($projects['featured'])) {
            $addSectionHeader('Key Projects');
            
            foreach ($projects['featured'] as $project) {
                $pdf->SetFont('helvetica', 'B', 12);
                $pdf->SetTextColor(51, 51, 51);
                $pdf->Cell(0, 7, $project['title'], 0, 1, 'L');
                
                $pdf->SetFont('helvetica', '', 10);
                $pdf->SetTextColor(0, 0, 0);
                $pdf->MultiCell(0, 5, $project['description'], 0, 'L');
                
                if (!empty($project['technologies'])) {
                    $pdf->SetFont('helvetica', 'I', 9);
                    $pdf->SetTextColor(102, 102, 102);
                    $pdf->MultiCell(0, 4, 'Technologies: ' . implode(', ', $project['technologies']), 0, 'L');
                }
                
                if (!empty($project['url'])) {
                    $pdf->SetFont('helvetica', '', 9);
                    $pdf->SetTextColor(51, 102, 204);
                    $pdf->Cell(0, 4, 'Link: ' . $project['url'], 0, 1, 'L');
                }
                
                $pdf->Ln(4);
            }
        }
        
        
        if (!empty($achievements['certifications']) || !empty($achievements['contests'])) {
            $addSectionHeader('Achievements & Certifications');
            
            foreach ($achievements['certifications'] as $cert) {
                $pdf->SetFont('helvetica', 'B', 11);
                $pdf->SetTextColor(51, 51, 51);
                $pdf->Cell(120, 6, $cert['name'], 0, 0, 'L');
                
                $pdf->SetFont('helvetica', '', 10);
                $pdf->SetTextColor(102, 102, 102);
                $pdf->Cell(0, 6, $cert['date'], 0, 1, 'R');
                
                $pdf->SetFont('helvetica', '', 10);
                $pdf->SetTextColor(0, 0, 0);
                $pdf->Cell(0, 5, $cert['issuer'], 0, 1, 'L');
                $pdf->Ln(2);
            }
            
            foreach ($achievements['contests'] as $contest) {
                $pdf->SetFont('helvetica', 'B', 11);
                $pdf->SetTextColor(51, 51, 51);
                $pdf->Cell(120, 6, $contest['name'], 0, 0, 'L');
                
                $pdf->SetFont('helvetica', '', 10);
                $pdf->SetTextColor(102, 102, 102);
                $pdf->Cell(0, 6, $contest['date'], 0, 1, 'R');
                
                $pdf->SetFont('helvetica', '', 10);
                $pdf->SetTextColor(0, 0, 0);
                $pdf->Cell(0, 5, $contest['organizer'], 0, 1, 'L');
                
                if (!empty($contest['achievement'])) {
                    $pdf->SetFont('helvetica', 'I', 9);
                    $pdf->SetTextColor(102, 102, 102);
                    $pdf->Cell(0, 4, 'Achievement: ' . $contest['achievement'], 0, 1, 'L');
                }
                $pdf->Ln(2);
            }
        }
        
        header('Content-Type: application/pdf');
        header('Content-Disposition: attachment; filename="' . str_replace(' ', '_', strtolower($profile['name'])) . '_cv.pdf"');
        
        $pdf->Output($profile['name'] . '_CV.pdf', 'D');
        exit;
    }
    
    private function getDefaultProfile(): array
    {
        return [
            'name' => 'Your Name',
            'title' => 'Your Title',
            'email' => 'your@email.com',
            'location' => 'Your Location',
            'bio' => 'Your bio here...',
            'profileImage' => '/assets/images/profile/profile-photo.jpg'
        ];
    }
    
    
}
