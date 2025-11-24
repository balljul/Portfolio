<?php

namespace App\Controllers;

use App\Config\YamlConfigLoader;
use Twig\Environment;

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
        $companies = [];
        foreach ($experienceConfigs as $key => $config) {
            $companies[] = [
                'id' => $key,
                'company' => $config['company'],
                'companyUrl' => $config['company_url'] ?? null,
                'companyLogo' => $config['company_logo'],
                'location' => $config['location'],
                'positions' => [
                    [
                        'id' => $key . '-position',
                        'title' => $config['position'],
                        'range' => $this->formatDateRange($config['start_date'], $config['end_date']),
                        'description' => $config['responsibilities'] ?? [],
                        'technologies' => $config['technologies'] ?? []
                    ]
                ]
            ];
        }
        return $companies;
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

        header('Content-Type: application/json');
        header('Content-Disposition: attachment; filename="julius_ball_cv.json"');

        echo json_encode([
            'profile' => $profile,
            'experience' => $experience
        ], JSON_PRETTY_PRINT);
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
