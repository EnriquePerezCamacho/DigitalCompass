// Función para mostrar la información de cada universidad
//function showUniversityInfo(university) {
//  const infoText = document.getElementById("info-text");
  //const buttons = document.querySelectorAll(".button");
  //const infoSection = document.querySelector(".info-section");
  //const buttonContainer = document.querySelector(".buttons-container");

  // Función principal para mostrar la información de la universidad
function showUniversityInfo(university) {
  const infoContainer = document.getElementById('universityInfoContainer');
  const selectedImage = document.getElementById('selectedImage');
  const infoText = document.getElementById('infoText');
  const buttons = document.querySelectorAll('.button-curso'); // Todos los botones de las universidades
  const buttonContainer = document.querySelector('.buttons-container-curso');

  // Información de las universidades
  const universityInfo = {
    A: {
      name: "Universidad de Sevilla",
      description: "La Universidad de Sevilla es conocida por su excelencia en ingeniería informática, con modernas instalaciones y un enfoque práctico.",
      image: "assets/curso1.png",
    },
    B: {
      name: "Universidad CEU Fernando III",
      description: "La Universidad CEU ofrece un ambiente innovador y vanguardista para el estudio de ingeniería y tecnología.",
      image: "assets/curso2.png",
    },
    C: {
      name: "Universidad Pablo de Olavide",
      description: "La Universidad Pablo de Olavide brinda formación en ingeniería con un enfoque en prácticas profesionales e investigación.",
      image: "assets/curso3.png",
    }
  };

  // Animación de desplazamiento de botones
  buttons.forEach((button) => {
    if (button.alt.includes(`Universidad ${university}`)) {
      button.classList.add('button-selected'); // Mantener el botón seleccionado
    } else {
      button.classList.add('button-move'); // Mover hacia abajo los no seleccionados
    }
  });

  // Mostrar imagen seleccionada con transición
  selectedImage.innerHTML = `<img src="${universityInfo[university].image}" alt="Imagen ${university}" class="selected-img">`;
  selectedImage.classList.add('fade-in'); // Clase para el efecto de opacidad

  // Efecto de escritura del texto
  typeWriter(infoText, `<h2>${universityInfo[university].name}</h2><p>${universityInfo[university].description}</p>`);
  
  // Mostrar la sección de información
  infoContainer.style.display = 'flex';
}

// Función de escritura animada
function typeWriter(element, text) {
  element.innerHTML = ""; // Limpiar contenido previo
  let i = 0;
  const speed = 20; // Velocidad del efecto de escritura

  function writeChar() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(writeChar, speed);
    }
  }

  writeChar();
}


  
   
  