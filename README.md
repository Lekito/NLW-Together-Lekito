# NLW-Together-Lekito
Esse repositório foi criado para fazer o curso de uma semana da Rocketseat. 

O NLW Together é especial pois irei utilizar ferramentas que não conheço como exemplo o Firebase da Google.
 
Bora desafiar comigo essa jornada! 
Fique à vontade para utilizar esse código.

## Iniciando o projeto

 1. Após git clone deste repositório 
 2. npm install ou yarn install -> para instalar todos os pacotes utilizados no projeto.
 3. Crie uma conta Google utilizar o Firebase
 4. https://console.firebase.google.com/ 
 5. Adicionar projeto 
 6. Dar um nome de sua preferência
 7. Continuar 
 8. Eu ativei sem usar o Google Analytics. -> Porque ainda não sei usar o Google Analytics :laughing:
 9. Ir na barra lateral esquerda **Authentication** 
 10. Primeiros passos
 11. Você verá uma lista de serviços que você pode usar para autenticação
 12. Eu ativei só o Provedor de login do **Google**
 13. Ativar
 14. Nome público do projeto **você escolhe** :wink:
 15. Colocar um e-mail para suporte.
 16. salvar
 17. Para hospedar o site, tem um campo mais abaixo para **Adicionar domínio** -> Você consegue ver os domínos autorizados. 

## Próximo passo 
 1. Configurar o banco de dados **Realtime Databese**
 2. Criar banco de dados 
 3. Deixei na configuração sugerida **Estados Unidos(us-central1)** -> Próxima
 4. Iniciei no **Modo bloqueado** -> Isso irei configura durante a construção do projeto. Se não, qualquer pessoa poderia escrever e ler as informações do banco de dados. 👎
 5. **Visão geral do projeto** -> Na barra de menu a esquerda.
 6. **</>** web -> para integrar o projeto com React escolhemos essa opção!
 7. Registar app dando um **Apelido do app** -> escolha um nome
 8. Deixei desmarcado a opção **Também configure --Firebase Hosting-- ...** -> No momento não vou hospedar essa aplicação no Firebase.
 9. **Registrar app**
 10. Com o pacote do **Firebase** já esta instalado, se você clonou esse repositório não vamos precisar instalar. Se não teriamos abrir o terminal, ir no diretório raiz do projeto é instar o Firebase com **yarn add firebase** ou com **npm install --save firebase**


## Obs.:  
 1. Criei um pasta dentro do diretório **src** com o nome de **services**
 2.  Dentro do **services** criei um arquivo chamado de **firebase.ts**, onde fica parte da configuração do firebase.
 3. **Atenção!** a parte principal da configuração do firebase fica num arquivo: **.env.local** para ninguem ter acesso as minhas configurações do firebase. 

## Atenção! sem o **.env.local** essa aplicação não vai funcionar! Vai aparecer um tela em branco no navegador. Preste muita atenção inserir as configurações! Pois com um erro você irá ver a tela branca ou erros na sua aplicação.


