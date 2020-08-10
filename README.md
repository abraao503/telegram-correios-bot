<h1 align="center">
   Correios Bot
</h1>

<p align="center">
  <a href="#space_invader-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wine_glass-faça-um-teste">Faça um teste</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-rodar-a-aplicação">Como rodar a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bookmark-comandos">Comandos</a>
  <br><br>
  <img src="https://im2.ezgif.com/tmp/ezgif-2-ef1192c5374e.gif">
</p>
<br><br>

## :space_invader: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Telegraf](https://telegraf.js.org/)
- [Rastrojs](https://github.com/talesluna/rastrojs)
- [Jest](https://jestjs.io/)

## :computer: Sobre o projeto

O Correios Bot é um bot para o telegram que permite a consulta de dados de encomendas dos Correios, por meio de código de rastreio.

## :wine_glass: Faça um teste

Mande uma mensagem para o [Bot](https://t.me/CorreiosTrackerBot) de acordo com os <a href="#bookmark-comandos">comandos</a>.

## :information_source: Como rodar a aplicação

### Pré-requesitos
Você vai precisar instalar [Git](https://git-scm.com), [Node.js](https://nodejs.org/) v12.16.1 (ou versão posterior). 

### Ferramentas opcionais
Uma opção ao instalador de pacotes, padrão, do Node [Yarn](https://yarnpkg.com/).

Clone o repositório. 
```bash
git clone https://github.com/abraao503/telegram-correios-bot.git

```
Crie um arquivo `.env` na raiz do projeto, deve-se serguir o modelo do arquivo `.env.example`. Onde aparece `TOKEN-OF-YOUR-BOT` deve ser substituido pelo token do seu Bot. Para obter um token siga essas [instruções](https://core.telegram.org/bots).

Instale as dependências e rode o projeto utilizando o NPM.
```bash
npm install
npm run dev
```

Instale as dependências e rode o projeto utilizando o Yarn.
```bash
yarn
yarn dev
```
## :bookmark: Comandos
Para verificar os estados das encomendas adicione códigos de rastreio com `/track CODIGO1 CODIGO2 CODIGO3...`. Obeserve que o bot aceita vários códigos em um mesmo comando, desde de que exista um espaço antes de cada código.
