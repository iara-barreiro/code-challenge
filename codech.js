document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("formulario").addEventListener("submit", function(event) {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const fechanac = document.getElementById('fechanac').value;
  
      const usuario = {
        nombre: nombre,
        apellido: apellido,
        fechanac: fechanac
      };
  
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      })
        .then(response => response.json())
        .then(usuario => {
          console.log('Ok', usuario);
        })
        .catch(error => {
          console.error('Error', error);
        });
    });
  });
  