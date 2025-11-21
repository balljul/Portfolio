<?php

namespace App\Controllers;

use App\Config\Data;
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
        $data = [
            'profile' => Data::getProfile(),
            'experience' => Data::getExperience(),
            'projects' => Data::getProjects(),
            'skills' => Data::getSkills(),
            'achievements' => Data::getAchievements(),
            'techIcons' => Data::getTechIcons()
        ];

        return $this->twig->render('home.twig', $data);
    }

    public function downloadCv(): void
    {
        // Simple CV download - you could generate PDF here
        $profile = Data::getProfile();
        $experience = Data::getExperience();
        
        header('Content-Type: application/json');
        header('Content-Disposition: attachment; filename="julius_ball_cv.json"');
        
        echo json_encode([
            'profile' => $profile,
            'experience' => $experience
        ], JSON_PRETTY_PRINT);
        exit;
    }
}