FROM node:alpine AS builder 
WORKDIR /app
COPY /*.json ./
RUN npm inistall
COPY . .
RUN npm run build

FROM node:alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD [ "npm","run","start:prod" ]
