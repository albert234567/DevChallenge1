// Funció per fer scroll a una secció
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Formulari de contacte: evitar l'enviament real
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Tots els camps són obligatoris.');
  } else {
    alert('Gràcies per contactar! Et respondrem aviat.');
  }
});

// Imatge com a botó "Tornar a l'inici"
const backToTopButtonContainer = document.createElement('div');
backToTopButtonContainer.style.position = 'fixed';
backToTopButtonContainer.style.bottom = '40px';
backToTopButtonContainer.style.right = '40px';
backToTopButtonContainer.style.backgroundColor = '#281d44';
backToTopButtonContainer.style.borderRadius = '50%';
backToTopButtonContainer.style.padding = '10px';
backToTopButtonContainer.style.display = 'none';
backToTopButtonContainer.style.width = '50px';
backToTopButtonContainer.style.height = '50px';
backToTopButtonContainer.style.alignItems = 'center';
backToTopButtonContainer.style.justifyContent = 'center';
backToTopButtonContainer.style.display = 'flex';

const backToTopButton = document.createElement('img');
backToTopButton.src = 'img/a.png';
backToTopButton.alt = 'Tornar a l\'inici';
backToTopButton.style.width = '30px';
backToTopButton.style.height = 'auto';
backToTopButton.style.cursor = 'pointer';

backToTopButtonContainer.appendChild(backToTopButton);
document.body.appendChild(backToTopButtonContainer);

// Tooltip
const tooltip = document.createElement('div');
tooltip.textContent = 'Tornar a l\'inici';
tooltip.style.position = 'absolute';
tooltip.style.bottom = '60px'; // Ajusta la posició vertical
tooltip.style.right = '0';
tooltip.style.backgroundColor = '#281d44';
tooltip.style.color = 'white';
tooltip.style.padding = '5px 10px';
tooltip.style.borderRadius = '5px';
tooltip.style.whiteSpace = 'nowrap';
tooltip.style.display = 'none'; // Inicialment ocult
backToTopButtonContainer.appendChild(tooltip);

// Controlar la visibilitat del botó al fer scroll
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButtonContainer.style.display = 'flex'; 
    } else {
        backToTopButtonContainer.style.display = 'none';
        tooltip.style.display = 'none'; // Amaga el tooltip quan el botó no es mostra
    }
};

// Funció per tornar a l'inici
backToTopButton.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

// Mostrar el tooltip quan el cursor està sobre el botó
backToTopButtonContainer.onmouseover = function() {
    tooltip.style.display = 'block'; // Mostra el tooltip
};

backToTopButtonContainer.onmouseout = function() {
    tooltip.style.display = 'none'; // Amaga el tooltip quan el cursor marxa
};

