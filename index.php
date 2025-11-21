<?php

require_once __DIR__ . '/vendor/autoload.php';

use App\Controllers\HomeController;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;
use Dotenv\Dotenv;

// Load environment variables
if (file_exists(__DIR__ . '/.env')) {
    $dotenv = Dotenv::createImmutable(__DIR__);
    $dotenv->load();
}

// Set up Twig
$loader = new FilesystemLoader(__DIR__ . '/src/Views');
$twig = new Environment($loader, [
    'cache' => $_ENV['APP_ENV'] === 'production' ? __DIR__ . '/cache' : false,
    'debug' => $_ENV['APP_DEBUG'] ?? false,
]);

// Simple routing
$requestUri = $_SERVER['REQUEST_URI'];
$path = parse_url($requestUri, PHP_URL_PATH);

$controller = new HomeController($twig);

switch ($path) {
    case '/':
    case '/index.php':
        echo $controller->index();
        break;
    
    case '/download-cv':
        $controller->downloadCv();
        break;
    
    default:
        // Serve static files or 404
        if (file_exists(__DIR__ . $path)) {
            return false; // Let the server handle static files
        }
        
        http_response_code(404);
        echo $twig->render('404.twig');
        break;
}