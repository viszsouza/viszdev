// HAMBURGUER
const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const navlist = document.querySelector(".nav-list")

navlist.addEventListener("click", () => nav.classList.toggle("active"));
hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

// CARROSSEL
// Index do item do meio atual
let currentIndex = window.innerWidth <= 750? 0 : 1;

// Evento dos botões do carousel
document.querySelectorAll('.carousel-button').forEach(e => e.addEventListener('click', () => {
  // Se for o da esquerda diminui o valor, se não, aumenta
  if (window.innerWidth >= 751) {
    currentIndex += e.id === 'anterior'? -3 : 3;
  } else {
    currentIndex += e.id === 'anterior'? -1 : 1;
  }

  const listaDeCards = document.querySelectorAll('.depoimento');
  
  // Garantindo que o index não saia do range válido
  // OBS: Com telas maiores, sempre haverão ter três cards na tela, ou seja, o 1o e o último nunca estrão no meio
  if (window.innerWidth <= 750) {
    if (currentIndex < 0) {
      currentIndex = listaDeCards.length - 1;
    } else if (currentIndex > listaDeCards.length - 1) {
      currentIndex = 0;
    }
  } else {
    if (currentIndex < 1) {
      currentIndex = listaDeCards.length - 2;
    } else if (currentIndex > listaDeCards.length - 2) {
      currentIndex = 1;
    }
  }

// Movendo os cards para que o card do index esteja no meio
  listaDeCards[currentIndex].scrollIntoView({
    inline: 'center',
    block: 'nearest',
    behavior: 'smooth',
  });
}));

// Animações
// Coletando o observador da página
const myObserver = new IntersectionObserver( (entries) => {
  entries.forEach( (entry) => {
      if (entry.isIntersecting === true){
          entry.target.classList.add('show')
      } else {
          entry.target.classList.remove('show')
      }
  })
})

// Selecionando os elementos com a classe ".hidden"
const elements = document.querySelectorAll('.hidden')

// Selecionando 1 arquivos por vez da classe ".hidden"
elements.forEach( (element) => myObserver.observe(element))