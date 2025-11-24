<?php

namespace App\Config;

use Symfony\Component\Yaml\Yaml;

class YamlConfigLoader
{
    private static $configPath = __DIR__ . '/../../config';
    
    public static function loadBase(): array
    {
        return self::loadFromDirectory('Base');
    }
    
    public static function loadExperience(): array
    {
        return self::loadFromDirectory('Experience');
    }
    
    public static function loadAchievementsAndCertificates(): array
    {
        return self::loadFromDirectory('AchievementsAndCertificates');
    }
    
    public static function loadProjects(): array
    {
        return self::loadFromDirectory('Projects');
    }
    
    public static function loadSkills(): array
    {
        return self::loadFromDirectory('Skills');
    }
    
    private static function loadFromDirectory(string $directory): array
    {
        $dirPath = self::$configPath . '/' . $directory;
        $configs = [];
        
        if (!is_dir($dirPath)) {
            return $configs;
        }
        
        $files = glob($dirPath . '/*.yml');
        
        foreach ($files as $file) {
            $filename = basename($file, '.yml');
            
            if ($filename === 'example') {
                continue;
            }
            
            try {
                $content = Yaml::parseFile($file);
                if ($content !== null) {
                    $configs[$filename] = $content;
                }
            } catch (\Exception $e) {
                error_log("Error parsing YAML file {$file}: " . $e->getMessage());
            }
        }
        
        return $configs;
    }
    
    public static function getAllConfigs(): array
    {
        return [
            'base' => self::loadBase(),
            'experience' => self::loadExperience(),
            'achievements_certificates' => self::loadAchievementsAndCertificates(),
            'projects' => self::loadProjects(),
            'skills' => self::loadSkills()
        ];
    }
}