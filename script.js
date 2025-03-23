// Funció per fer scroll a una secció
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }

// Funció per mostrar el projecte seleccionat
function showProject(projectId) {
  // Amaga tots els continguts dels projectes
  const projects = document.querySelectorAll('.project-content');
  projects.forEach(project => {
    project.style.display = 'none';
  });

  // Mostra el projecte seleccionat
  const selectedProject = document.getElementById(projectId);
  if (selectedProject) {
    selectedProject.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Inicialment mostra el primer projecte (devchallenge2)
  showProject('devchallenge2');

  // Gestionar els clics en els botons
  const buttons = document.querySelectorAll('.project-btn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const project = this.getAttribute('data-project');
      showProject(project);
    });
  });
});

// Funció per mostrar el projecte seleccionat
function showProject(projectId) {
  // Amaga tots els continguts dels projectes
  const projects = document.querySelectorAll('.project-content');
  projects.forEach(project => {
    project.style.display = 'none';
  });

  // Mostra el projecte seleccionat
  const selectedProject = document.getElementById(projectId);
  if (selectedProject) {
    // Generar dinàmicament el contingut del projecte
    const imgSrc = selectedProject.getAttribute('data-img');
    const text = selectedProject.getAttribute('data-text');
    const githubUrl = selectedProject.getAttribute('data-github');
    const liveUrl = selectedProject.getAttribute('data-live');

    // Afegir el contingut generat
    selectedProject.innerHTML = `
      <div class="project-info">
        <img src="${imgSrc}" alt="${projectId}" class="project-image">

        <div class="project-text">
          <p>${text}</p>
        </div>

        <div class="project-buttons-container">
          <a href="${githubUrl}" target="_blank" class="project-btn-2">GitHub</a>
          <a href="${liveUrl}" target="_blank" class="project-btn-2">Live</a>
        </div>
      </div>
    `;

    selectedProject.style.display = 'block';
  }
}


  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.project-btn');

        // Selecciona el primer botó per defecte
        if (buttons.length > 0) {
          buttons[0].classList.add('active');
          console.log("Projecte seleccionat per defecte:", buttons[0].getAttribute('data-project'));
        }
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Obté el projecte seleccionat des de l'atribut data-project
        const selectedProject = button.getAttribute('data-project');
        console.log("Projecte seleccionat:", selectedProject);
        
        // Opcional: marca visualment el botó actiu
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  });


    function copyGmail() {
      const gmail = "albertroiggg@gmail.com";
      navigator.clipboard.writeText(gmail).then(() => {
        // Mostra el missatge
        const copyMessage = document.getElementById("copyMessage");
        copyMessage.style.display = "block";
        
      }).catch(err => console.error("Error en copiar: ", err));
    }
  