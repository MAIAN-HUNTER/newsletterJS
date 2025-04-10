# Frontend Mentor - Article preview component master

Olá a todos! este é mais um desafio de Front End mentor concluído com sucesso! É uma grande satisfação compartilha-lo com o mundo mais uma vez!

## Ideias, Planejamento e Execução
inicialmente, demorei mais que o normal para executar este projeto pois ando muito ocupado trabalhando atualmente, porém, seguindo a nase estabelecida pelo frontend mentor, usei as ferramentas de display flex para as centralizações de elementos, para uma manipulação mais personalizavel e flexivel. separei tambem diversas divs com classes para manipular tudo um à um, sem misturar muitas tags de HTML pois creio q assim, ficará mais organizado. Para JS, optei por criar  6 variavéis com querySelector cada, captando as classes (com exceção do input form) de cada tag que seria usada na interatividade. adicionei os eventos de click, situação/condição de resultado com if e else e remoção de janelas com a classe active e hide.

### O que eu aprendi
uso mais preciso de margin, padding, grid, flexbox. classes css podem ser ativadas sem serem atribuidas à tags HTML usando javascript e uso de funções, ações e variaveis com codigo JS.

````JS 
const formContainer = document.querySelector(".container");
const inputEl = document.querySelector("form input");
const btnSubmit = document.querySelector(".subscribe_btn");
const successEl = document.querySelector(".ready");
const btnDismiss = document.querySelector (".dismiss")

  btnSubmit.addEventListener("click", () => {
    
      if(inputEl.value !== ""){
        formContainer.classList.add("hide");
        successEl.classList.remove("hide");
        document.querySelector(".error p").innerHTML = "";
      }else{
        document.querySelector(".error p").innerHTML = "Valid Email Required";
        inputEl.classList.add("active");
      }
  });

  btnDismiss.addEventListener("click", () => {
    formContainer.classList.remove("hide");
    successEl.classList.add("hide");
    inputEl.value = "";
    inputEl.classList.remove("active");
  });
  ````

### Desenvolvimentos futuros
Continuarei com os desafios do site Font end mentor

### sites com recursos Úteis

## Autor
- Frontend Mentor - [@MAIAN-HUNTER](https://www.frontendmentor.io/profile/MAIAN-HUNTER)
- Linkedin - [Maian-Lucas](https://www.linkedin.com/in/maian-lucas-1a796026a/)

## Conhecimentos
92% de meu conhecimento foi adquirido pelo curso de programação Dev Quest, oa outros 8% foram de documentações de sites da internet como o proprio Frontend Mentor, W3schools e de videos da plataforma youtube.