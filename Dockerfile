

### STAGE: Run ###
FROM nginx:1.13.0-alpine

#### copy nginx conf
COPY default.conf /etc/nginx/conf.d/default.conf

#### copy artifact build from the 'build environment'
COPY dist/testCICDAngular /usr/share/nginx/html

EXPOSE 8080

