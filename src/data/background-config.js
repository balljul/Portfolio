// Background Animation Configuration
const backgroundConfig = {
    // Code snippets for floating particles
    codeSnippets: [
        // PHP
        '<?php echo "Hello World"; ?>',
        '$user = new User();',
        'public function build() {',
        'Route::get("/api", function() {',
        '$data = DB::table("users")->get();',
        'class Controller extends Base {',
        
        // Rust
        'fn main() {',
        'let mut result = Vec::new();',
        'match value {',
        'use std::collections::HashMap;',
        'impl Display for Error {',
        'pub fn new() -> Self {',
        
        // Bash/Shell
        '#!/bin/bash',
        'docker run -d --name app',
        'chmod +x deploy.sh',
        'curl -X POST api/endpoint',
        'grep -r "pattern" .',
        'tar -xzf archive.tar.gz',
        
        // JavaScript
        'const app = express();',
        'await fetch("/api/data")',
        'document.querySelector(".hero")',
        'export default function() {',
        'console.log("Building...");',
        'import { useState } from "react";',
        
        // Git
        'git add .',
        'git commit -m "feat: new feature"',
        'git push origin main',
        'git checkout -b feature',
        'git merge --no-ff develop',
        'git rebase -i HEAD~3',
        
        // Docker
        'FROM node:18-alpine',
        'COPY . /app',
        'RUN npm install',
        'EXPOSE 3000',
        'WORKDIR /usr/src/app',
        'CMD ["npm", "start"]',
        
        // SQL
        'SELECT * FROM users WHERE',
        'CREATE TABLE projects (',
        'UPDATE users SET active = 1',
        'INSERT INTO logs VALUES',
        
        // Python
        'def main():',
        'import numpy as np',
        'for item in items:',
        'with open("file.txt") as f:',
        
        // General Dev Tools
        'npm run build',
        'yarn dev --port 3000',
        'sudo systemctl start nginx',
        './configure --prefix=/usr',
        'make && make install',
        'pytest tests/ -v'
    ],

    // Animation settings
    settings: {
        // Particle spawn intervals (milliseconds)
        spawnInterval: 3000,
        
        // Particle counts by screen size
        desktop: {
            codeParticles: 3,
            binaryParticles: 8
        },
        tablet: {
            codeParticles: 2,
            binaryParticles: 5
        },
        mobile: {
            codeParticles: 1,
            binaryParticles: 3
        },

        // Animation durations (seconds)
        codeParticle: {
            min: 12,
            max: 20
        },
        binaryParticle: {
            min: 8,
            max: 14
        },

        // Cleanup timeouts (milliseconds)
        codeTimeout: 22000,
        binaryTimeout: 16000,

        // Colors (CSS compatible)
        colors: {
            codeParticle: 'rgba(100, 255, 218, 0.3)',
            binaryParticle: 'rgba(100, 255, 218, 0.2)',
            glitchOverlay: 'rgba(100, 255, 218, 0.01)'
        },

        // Font sizes by screen size (CSS)
        fontSize: {
            desktop: {
                code: '12px',
                binary: '10px'
            },
            tablet: {
                code: '10px',
                binary: '8px'
            },
            mobile: {
                code: '8px',
                binary: '6px'
            }
        },

        // Enable/disable features
        features: {
            glitchOverlay: true,
            binaryParticles: true,
            codeParticles: true,
            mobileGlitch: false, // Disable glitch on mobile for performance
            continuousSpawn: true
        }
    }
};