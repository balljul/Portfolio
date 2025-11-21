# Julius Ball - Portfolio (PHP 8.2)

A modern, professional portfolio website built with PHP 8.2, designed for deployment on shared hosting services like Hosttech.

## Features

- **Modern PHP 8.2** - Uses latest PHP features and best practices
- **Twig Templating** - Clean, maintainable template system
- **Responsive Design** - Works perfectly on all devices
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance Focused** - Optimized for fast loading
- **Security Headers** - Implemented via .htaccess

## Structure

```
├── assets/                 # Static assets (CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── images/
├── src/                    # PHP application source
│   ├── Config/            # Data configuration
│   ├── Controllers/       # Application controllers
│   └── Views/             # Twig templates
├── vendor/                # Composer dependencies
├── .htaccess             # Apache configuration
├── composer.json         # PHP dependencies
└── index.php            # Application entry point
```

## Deployment to Hosttech

### 1. Install Dependencies

On your local machine or via SSH on Hosttech:

```bash
composer install --no-dev --optimize-autoloader
```

### 2. Environment Configuration

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Edit `.env`:
```env
APP_ENV=production
APP_DEBUG=false
SITE_URL=https://yourdomain.com
CONTACT_EMAIL=contact@juliusball.com
```

### 3. File Upload

Upload these files/folders to your Hosttech web directory:
- `assets/`
- `src/`
- `vendor/` (after running composer install)
- `.htaccess`
- `index.php`
- `.env`

### 4. File Permissions

Ensure proper permissions:
```bash
chmod 755 assets/
chmod 644 .htaccess
chmod 644 index.php
```

### 5. Cache Directory (Optional)

For production caching, create cache directory:
```bash
mkdir cache
chmod 775 cache
```

## Local Development

1. Install dependencies:
```bash
composer install
```

2. Start local server:
```bash
php -S localhost:8000
```

3. Visit `http://localhost:8000`

## Customization

### Update Content

Edit `src/Config/Data.php` to update:
- Personal information
- Work experience
- Projects
- Skills
- Achievements

### Styling

Modify `assets/css/main.css` for design changes.

### Adding Features

- Create new controllers in `src/Controllers/`
- Add new templates in `src/Views/`
- Update routing in `index.php`

## Requirements

- PHP 8.2+
- Composer
- Apache with mod_rewrite (included with Hosttech)

## Security

- Environment variables protected via .htaccess
- XSS protection headers
- Content Security Policy
- Input sanitization via Twig auto-escaping

## Performance

- Static asset caching (1 month)
- Twig template caching in production
- Optimized autoloader
- Minified assets