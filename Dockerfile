FROM node:current-slim

# делаем каталог 'app' текущим рабочим каталогом
WORKDIR /app

# копируем оба 'package.json' и 'package-lock.json' (если есть)
COPY package*.json ./

# копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'app')
COPY . .

# устанавливаем зависимости проекта
RUN npm install

EXPOSE 3000
CMD npm run start:prod

# to build: docker build -t imageName .
# to start: docker run -e ENVIRONMENT="staging" imageName
