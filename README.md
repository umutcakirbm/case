# Case Shop

## Dependencies
- Docker for Desktop
- Git

## Setup
- Install Docker for Desktop and Git Source Control.
- Clone repository and open root folder in command window.
- Pull Node(`docker pull node`) and Nginx(`docker pull nginx`) containers.
- Run `docker-compose up` :)

### Environment Configurations
- You can set build parameters in `docker-compose.yml`.

#### Parameters
- configuration (default: `production`)
- outputPath (default: `./dist`)
- aot (default: `true`)
- sourceMap (default: `false`)
- baseHref (default: `/`)
- buildOptimizer (default: `true`)