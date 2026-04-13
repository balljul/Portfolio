<?php

require_once __DIR__ . '/vendor/autoload.php';

use App\Controllers\HomeController;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;
use Dotenv\Dotenv;

if (file_exists(__DIR__ . '/.env')) {
    $dotenv = Dotenv::createImmutable(__DIR__);
    $dotenv->load();
}

$loader = new FilesystemLoader(__DIR__ . '/src/Views');
$twig = new Environment($loader, [
    'cache' => ($_ENV['APP_ENV'] ?? 'production') === 'production' ? __DIR__ . '/var/cache/twig' : false,
    'debug' => (bool)($_ENV['APP_DEBUG'] ?? false),
]);

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
        if (file_exists(__DIR__ . $path) && !is_dir(__DIR__ . $path)) {
            return false;
        }
        http_response_code(404);
        echo $twig->render('404.twig', ['profile' => ['name' => 'Julius Ball']]);
        break;
}
