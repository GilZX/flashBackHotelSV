document.addEventListener('DOMContentLoaded', function() {
    const dialogOverlay = document.getElementById('dialogOverlay');
    const closeButton = document.getElementById('closeButton');
    const quienesSomosLink = document.querySelector('a[href="#quienes-somos"]');
  
    function openDialog() {
      dialogOverlay.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Bloquea el scroll del body
    }
  
    function closeDialog() {
      dialogOverlay.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restaura el scroll del body
    }
  
    quienesSomosLink.addEventListener('click', function(event) {
      event.preventDefault();
      openDialog();
    });
  
    closeButton.addEventListener('click', function() {
      closeDialog();
    });
  
    dialogOverlay.addEventListener('click', function(event) {
      if (event.target === dialogOverlay) {
        closeDialog();
      }
    });
  });
  
  