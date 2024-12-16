// Función para mostrar la información de cada universidad
function showUniversityInfo(university) {
  const infoText = document.getElementById("info-text");
  const buttons = document.querySelectorAll(".button");
  const infoSection = document.querySelector(".info-section");
  const buttonContainer = document.querySelector(".buttons-container");

  // Mostrar la sección de información
  infoSection.style.display = 'block';

  // Cambiar el contenido del texto según la universidad seleccionada
  if (university === 'A') {
    infoText.textContent = "Universidad A ofrece una amplia variedad de cursos en distintas áreas de la tecnología y las ciencias sociales.";
  } else if (university === 'B') {
    infoText.textContent = "Universidad B es conocida por su enfoque en las artes y las ciencias humanas, con un campus vibrante y multicultural.";
  } else if (university === 'C') {
    infoText.textContent = "Universidad C tiene una fuerte orientación hacia la investigación científica y la ingeniería, con modernas instalaciones.";
  }

  // Mostrar el texto con animación
  setTimeout(() => {
    infoText.style.opacity = "1";
    infoText.style.transform = "translateX(0)";
  }, 100);  // Retraso para la animación del texto

  // Reorganizar botones y mostrar texto
  buttonContainer.classList.add('button-show-text'); // Colocar los botones en fila con el texto al lado

  // Mover los botones no seleccionados hacia abajo
  buttons.forEach((button) => {
    if (button.alt === `Universidad ${university}`) {
      button.classList.remove('button-move'); // El botón seleccionado no se mueve
    } else {
      button.classList.add('button-move'); // Mover los otros botones hacia abajo
    }
  });
}

  
   
  