/*Validación*/

document.getElementById('contacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    const nombre = document.getElementById('input1').value;
    const email = document.getElementById('input2').value;
    
   
  
    // Validación simple
    if (nombre === '' || email === '') {
      alert("Por favor, completa todos los campos");
      
    } else {
      alert("Formulario enviado con éxito");
      
    }
  });
  