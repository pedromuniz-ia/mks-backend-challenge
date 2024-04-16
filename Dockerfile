# Usa uma imagem básica do Node.js como ponto de partida
FROM node:14

# Define o diretório onde o app vai ficar dentro da caixa
WORKDIR /app

# Copia os arquivos de configuração do projeto para dentro da caixa
COPY package*.json ./

# Instala as dependências dentro da caixa
RUN npm install

# Copia o resto dos arquivos do projeto para dentro da caixa
COPY . .

# Diz para a caixa que queremos abrir uma porta para o mundo exterior
EXPOSE 3000

# Diz o que fazer quando a caixa for aberta
CMD ["npm", "run", "start"]
