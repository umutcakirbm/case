FROM node as build-stage
WORKDIR /app
COPY ./case-app/package*.json /app/
RUN npm install
COPY ./case-app/ /app/

ARG configuration=production
ARG outputPath=./dist
ARG aot=true
ARG sourceMap=false
ARG baseHref=/
ARG buildOptimizer=true

RUN npm run build -- --outputPath $outputPath --aot $aot --sourceMap $sourceMap --baseHref $baseHref --buildOptimizer $buildOptimizer --configuration $configuration

FROM nginx

COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf