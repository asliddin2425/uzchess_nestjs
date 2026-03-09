FROM node:25-alpine AS build

WORKDIR /app

COPY package.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm run build

FROM node:25-alpine AS production

WORKDIR /app

COPY package.json ./

RUN npm install --omit=dev

COPY --from=build /app/dist /app/dist

EXPOSE 3000

CMD ["node", "dist/main.js"]

