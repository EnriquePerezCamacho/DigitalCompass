let dropdownItems = document.querySelectorAll('.dropdown');

function toggleDropdown(index) {
  let dropdownContent = dropdownItems[index].querySelector('.dropdown-content');
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
  
  // Close all other dropdowns
  dropdownItems.forEach((item, i) => {
    if (i !== index) {
      item.querySelector('.dropdown-content').style.display = 'none';
    }
  });
}
