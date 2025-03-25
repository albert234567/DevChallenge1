// Funció per fer scroll a una secció
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Funció per mostrar el projecte seleccionat
function showProject(projectId) {
  const projects = document.querySelectorAll('.project-content');
  projects.forEach(project => (project.style.display = 'none'));

  const selectedProject = document.getElementById(projectId);
  if (selectedProject) {
    // Generar dinàmicament el contingut del projecte
    const imgSrc = selectedProject.getAttribute('data-img');
    const text = selectedProject.getAttribute('data-text');
    const githubUrl = selectedProject.getAttribute('data-github');
    const liveUrl = selectedProject.getAttribute('data-live');

    selectedProject.innerHTML = `
      <div class="project-info">
        <img src="${imgSrc}" alt="${projectId}" class="project-image">
        <div class="project-text"><p>${text}</p></div>
        <div class="project-buttons-container">
          <a href="${githubUrl}" target="_blank" class="project-btn-2">GitHub</a>
          <a href="${liveUrl}" target="_blank" class="project-btn-2">Live</a>
        </div>
      </div>
    `;

    selectedProject.style.display = 'block';
  }
}

// Funció per copiar el correu
function copyGmail() {
  const gmail = "albertroiggg@gmail.com";
  navigator.clipboard.writeText(gmail).then(() => {
    document.getElementById("copyMessage").style.display = "block";
  }).catch(err => console.error("Error en copiar: ", err));
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.project-btn');
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll('.project-content');

  // Mostrar i ocultar cada projecte una vegada per assegurar la seva càrrega
  projects.forEach(project => {
    showProject(project.id); // Obre el projecte
    project.style.display = "none"; // L'amaga després de carregar-lo
  });

  // Un cop carregats, mostrar tots els projectes per defecte
  projects.forEach(project => (project.style.display = "block"));

  // Selecciona el primer botó per defecte
  if (buttons.length > 0) {
    buttons[0].classList.add('active');
    showProject(buttons[0].getAttribute('data-project'));
  }

  // Gestionar els clics en els botons de projecte
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const selectedProject = this.getAttribute('data-project');
      showProject(selectedProject);

      // Marca visualment el botó actiu
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Filtratge de projectes
  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      projects.forEach(project => {
        project.style.display = (filter === "all" || project.classList.contains(filter)) ? "block" : "none";
      });
    });
  });
});
