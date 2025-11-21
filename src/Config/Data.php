<?php

namespace App\Config;

class Data
{
    public static function getProfile(): array
    {
        return [
            'name' => 'Julius Ball',
            'title' => 'Full Stack Developer & Software Engineering Student',
            'tagline' => 'Developing scalable software solutions and robust systems',
            'location' => 'Treffen, Austria',
            'profileImage' => '/assets/images/profile/profile-photo.jpg',
            'bio' => 'Experienced software developer specializing in full-stack development with expertise in modern web technologies and cloud infrastructure. Currently pursuing Media Technology studies at HTL Villach while maintaining active development roles in professional environments.

With over 4 years of hands-on programming experience, I focus on creating scalable solutions across web development, backend systems, and cloud computing platforms. My technical expertise spans multiple programming languages and frameworks, enabling me to deliver comprehensive software solutions.',
            'contact' => [
                'email' => 'contact@juliusball.com',
                'linkedin' => 'https://www.linkedin.com/in/juliusball/',
                'github' => 'https://github.com/balljul',
                'website' => 'https://www.juliusball.com'
            ]
        ];
    }

    public static function getExperience(): array
    {
        return [
            'companies' => [
                [
                    'id' => 'gbv',
                    'company' => 'Great Big Value GmbH',
                    'companyUrl' => 'https://www.greatbigvalue.com',
                    'companyLogo' => '/assets/images/companies/techstart-logo.jpg',
                    'location' => 'Klagenfurt - Austria',
                    'positions' => [
                        [
                            'id' => 'gbv-full-stack',
                            'title' => 'Full Stack Developer',
                            'range' => 'August 2023 - Present',
                            'description' => [
                                'Full-stack development and architecture design',
                                'Enterprise Google Workspace administration and automation',
                                'Cloud infrastructure design and deployment',
                                'Technical project management and team coordination'
                            ],
                            'technologies' => ['Rust', 'PHP', 'JavaScript', 'Git', 'GitHub', 'Docker', 'MySQL', 'PostgreSQL', 'MinIO', 'Redis', 'ClickHouse', 'Figma', 'Postman', 'Google Apps Script', '3CX', 'gRPC', 'Laravel Cloud', 'Laravel Forge', 'Hetzner', 'n8n']
                        ]
                    ]
                ],
                [
                    'id' => 'htl',
                    'company' => 'HTL Villach',
                    'location' => 'Villach - Austria',
                    'positions' => [
                        [
                            'id' => 'htl-student',
                            'title' => 'Media Technology Student',
                            'range' => 'September 2021 - Present',
                            'description' => [
                                'Comprehensive study of computer science fundamentals',
                                'Web development and software engineering practices',
                                'Project management and team collaboration',
                                'Media technology and digital design principles'
                            ],
                            'technologies' => ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'Java', 'C++', 'MySQL', 'Git', 'Adobe Creative Suite']
                        ]
                    ]
                ]
            ]
        ];
    }

    public static function getProjects(): array
    {
        return [
            'featured' => [
                [
                    'id' => 'crypto-tracker',
                    'title' => 'Cryptocurrency Tracker',
                    'description' => 'Real-time cryptocurrency price tracking application built with modern web technologies. Features include portfolio management, price alerts, and detailed market analysis.',
                    'image' => '/assets/images/projects/crypto-tracker.jpg',
                    'technologies' => ['JavaScript', 'PHP', 'MySQL', 'Chart.js', 'REST API'],
                    'githubUrl' => 'https://github.com/balljul/crypto-tracker',
                    'liveUrl' => null
                ],
                [
                    'id' => 'budget-tracker',
                    'title' => 'Personal Budget Tracker',
                    'description' => 'Comprehensive budget management application with expense categorization, financial reporting, and goal tracking capabilities.',
                    'image' => '/assets/images/projects/budget-tracker.jpg',
                    'technologies' => ['PHP', 'MySQL', 'JavaScript', 'Chart.js', 'Bootstrap'],
                    'githubUrl' => 'https://github.com/balljul/budget-tracker',
                    'liveUrl' => null
                ],
                [
                    'id' => 'ecommerce-platform',
                    'title' => 'E-Commerce Platform',
                    'description' => 'Full-featured e-commerce solution with product management, shopping cart, payment processing, and order tracking.',
                    'image' => '/assets/images/projects/ecommerce-platform.jpg',
                    'technologies' => ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Stripe API'],
                    'githubUrl' => 'https://github.com/balljul/ecommerce-platform',
                    'liveUrl' => null
                ]
            ]
        ];
    }

    public static function getSkills(): array
    {
        return [
            'categories' => [
                [
                    'name' => 'Frontend',
                    'skills' => [
                        ['name' => 'JavaScript', 'level' => 5],
                        ['name' => 'HTML5', 'level' => 5],
                        ['name' => 'CSS3', 'level' => 5],
                        ['name' => 'React', 'level' => 4],
                        ['name' => 'Vue.js', 'level' => 3]
                    ]
                ],
                [
                    'name' => 'Backend',
                    'skills' => [
                        ['name' => 'PHP', 'level' => 5],
                        ['name' => 'Node.js', 'level' => 4],
                        ['name' => 'Rust', 'level' => 4],
                        ['name' => 'Python', 'level' => 3]
                    ]
                ],
                [
                    'name' => 'Database',
                    'skills' => [
                        ['name' => 'MySQL', 'level' => 5],
                        ['name' => 'PostgreSQL', 'level' => 4],
                        ['name' => 'Redis', 'level' => 3]
                    ]
                ]
            ]
        ];
    }

    public static function getAchievements(): array
    {
        return [
            'certifications' => [
                [
                    'name' => 'Full Stack Development Certification',
                    'issuer' => 'HTL Villach',
                    'date' => '2024',
                    'description' => 'Comprehensive certification in full-stack web development.',
                    'icon' => '/assets/images/achievements/cert-fullstack.png',
                    'type' => 'certification'
                ]
            ],
            'contests' => [
                [
                    'name' => 'Regional Programming Contest',
                    'organizer' => 'Austrian Computing Society',
                    'date' => '2023',
                    'achievement' => '2nd Place',
                    'description' => 'Competitive programming contest focusing on algorithmic problem solving.',
                    'icon' => '/assets/images/achievements/contest-programming.png',
                    'type' => 'contest'
                ]
            ]
        ];
    }

    public static function getTechIcons(): array
    {
        return [
            'JavaScript' => '/assets/images/tech/javascript.svg',
            'PHP' => '/assets/images/tech/php.svg',
            'HTML' => '/assets/images/tech/html5.svg',
            'CSS' => '/assets/images/tech/css3.svg',
            'React' => '/assets/images/tech/react.svg',
            'Node.js' => '/assets/images/tech/nodejs.svg'
        ];
    }
}