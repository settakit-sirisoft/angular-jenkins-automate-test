
# ### STAGE 1: Build ###
# FROM cypress/base:12 AS build
# #### make the 'app' folder the current working directory
# WORKDIR /usr/src/app 
# #### copy both 'package.json' and 'package-lock.json' (if available)
# COPY package*.json ./ 
# #### install angular cli
# # RUN npm install -g @angular/cli 
# #### install project dependencies
# RUN npm install 
# #### copy things
# COPY . . 
# #### generate build --prod
# RUN npm run build
# RUN npm run cypress:ci

# ### STAGE 2: Run ###
# FROM nginx:1.13.0-alpine
# #### copy nginx conf
# COPY default.conf /etc/nginx/conf.d/default.conf 
# #### copy artifact build from the 'build environment'
# COPY --from=build /usr/src/app/dist/ktb-eos-whitelist /usr/share/nginx/html 
# EXPOSE 8080


### STAGE: Run ###
FROM nginx:1.13.0-alpine

#### copy nginx conf
COPY default.conf /etc/nginx/conf.d/default.conf

#### copy artifact build from the 'build environment'
COPY dist/testAngular /usr/share/nginx/html

EXPOSE 8080

