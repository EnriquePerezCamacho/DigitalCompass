function toggleDropdown(id) {
  const dropdownContent = document.getElementById(id);

  // Si el menú está visible, lo ocultamos, si no, lo mostramos
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none"; // Ocultar
  } else {
    dropdownContent.style.display = "block"; // Mostrar
  }
}
