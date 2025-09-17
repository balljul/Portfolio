#!/bin/bash

# Portfolio Deployment Script
# This script automates the deployment process

set -e  # Exit on any error

echo "🚀 Starting Portfolio Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if running as root
if [ "$EUID" -eq 0 ]; then
    print_warning "Running as root. Consider using a non-root user with docker group membership."
fi

# Stop existing containers
print_status "Stopping existing containers..."
docker-compose down --remove-orphans || true

# Create logs directory
print_status "Creating logs directory..."
mkdir -p logs

# Build and start containers
print_status "Building and starting containers..."
docker-compose up -d --build

# Wait for container to be healthy
print_status "Waiting for container to be healthy..."
sleep 10

# Check if container is running
if docker-compose ps | grep -q "Up"; then
    print_success "Container is running!"
else
    print_error "Container failed to start. Check logs:"
    docker-compose logs
    exit 1
fi

# Test if the website is accessible
print_status "Testing website accessibility..."
if curl -f http://localhost/ > /dev/null 2>&1; then
    print_success "Website is accessible!"
else
    print_warning "Website might not be accessible yet. Check nginx logs:"
    docker-compose logs portfolio
fi

# Display useful information
echo ""
print_success "Deployment completed successfully!"
echo ""
echo "📊 Container Status:"
docker-compose ps
echo ""
echo "🌐 Your portfolio is available at:"
echo "   Local: http://localhost/"
echo "   Server: http://$(curl -s ifconfig.me)/"
echo ""
echo "📝 Useful commands:"
echo "   View logs: docker-compose logs -f"
echo "   Stop: docker-compose down"
echo "   Restart: docker-compose restart"
echo "   Update: git pull && docker-compose up -d --build"
echo ""
print_status "Deployment script finished!"