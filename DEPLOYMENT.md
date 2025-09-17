# Portfolio Deployment Guide

This guide will help you deploy your portfolio to a Linux server using Docker.

## Prerequisites

- Linux server with Docker and Docker Compose installed
- Domain name pointed to your server's IP address
- SSH access to your server

## Quick Start

### 1. Install Docker on Your Server

```bash
# Update package list
sudo apt update

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add your user to docker group
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Logout and login again for group changes to take effect
```

### 2. Deploy Your Portfolio

```bash
# Clone your repository
git clone https://github.com/yourusername/Portfolio.git
cd Portfolio

# Build and start the container
docker-compose up -d

# Check if it's running
docker-compose ps
```

Your portfolio will be available at `http://your-server-ip`

### 3. Configure Domain (Optional)

If you have a domain, update your DNS records:
- A record: `yourdomain.com` → `your-server-ip`
- A record: `www.yourdomain.com` → `your-server-ip`

## Production Deployment with SSL

### 1. Update docker-compose.yml for SSL

Uncomment the SSL sections in `docker-compose.yml` and update:

```yaml
environment:
  - DEFAULT_HOST=yourdomain.com
  - LETSENCRYPT_HOST=yourdomain.com
  - LETSENCRYPT_EMAIL=your-email@example.com
```

### 2. Deploy with SSL

```bash
# Stop current deployment
docker-compose down

# Start with SSL
docker-compose up -d

# Check logs
docker-compose logs -f
```

## Manual Docker Commands

### Build the image
```bash
docker build -t julius-portfolio .
```

### Run the container
```bash
docker run -d \
  --name julius-portfolio \
  -p 80:80 \
  --restart unless-stopped \
  julius-portfolio
```

### View logs
```bash
docker logs julius-portfolio
```

### Update deployment
```bash
# Pull latest changes
git pull

# Rebuild and restart
docker-compose up -d --build
```

## Monitoring

### Check container status
```bash
docker-compose ps
```

### View logs
```bash
docker-compose logs -f portfolio
```

### Monitor resource usage
```bash
docker stats julius-portfolio
```

## Troubleshooting

### Container won't start
```bash
# Check logs
docker-compose logs portfolio

# Check nginx configuration
docker-compose exec portfolio nginx -t
```

### Port 80 already in use
```bash
# Check what's using port 80
sudo netstat -tlnp | grep :80

# Stop apache if running
sudo systemctl stop apache2
sudo systemctl disable apache2
```

### Update portfolio content
```bash
# Pull latest changes
git pull

# Rebuild and restart (this will update your portfolio)
docker-compose up -d --build
```

## File Structure

```
Portfolio/
├── Dockerfile              # Container definition
├── docker-compose.yml      # Multi-container orchestration
├── docker/
│   └── nginx.conf          # Nginx server configuration
├── src/                    # Your portfolio source files
├── public/                 # Public assets
└── DEPLOYMENT.md          # This file
```

## Security Notes

- The nginx configuration includes security headers
- Gzip compression is enabled for better performance
- Static assets are cached for 1 year
- HTML files are cached for 1 hour
- Access to sensitive files (dotfiles, backups) is denied

## Performance Optimization

- Assets are served with proper caching headers
- Gzip compression reduces bandwidth usage
- Health checks ensure container reliability
- Alpine Linux base image keeps container size small

## Support

If you encounter issues:
1. Check the logs: `docker-compose logs -f`
2. Verify nginx config: `docker-compose exec portfolio nginx -t`
3. Ensure ports aren't conflicting: `sudo netstat -tlnp | grep :80`
4. Check container health: `docker-compose ps`