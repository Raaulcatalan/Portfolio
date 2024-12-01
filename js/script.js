document.addEventListener("DOMContentLoaded", function() {
    // Función para actualizar el reloj
    function actualizarReloj() {
        console.log('Actualizando reloj...');  // Para ver si la función se ejecuta
        const reloj = document.getElementById("reloj");  // Seleccionamos el div donde se mostrará el reloj
        if (reloj) {
            const fecha = new Date(); // Obtenemos la fecha y hora actuales
            const horas = String(fecha.getHours()).padStart(2, '0');  // Formateamos la hora
            const minutos = String(fecha.getMinutes()).padStart(2, '0'); // Formateamos los minutos
            const segundos = String(fecha.getSeconds()).padStart(2, '0'); // Formateamos los segundos
            reloj.textContent = `${horas}:${minutos}:${segundos}`; // Actualizamos el texto del reloj
        } else {
            console.error('El div con id "reloj" no se encuentra en el documento.');
        }
    }

    // Función para mostrar la fecha y los días transcurridos desde el 16 de septiembre de 2024
    function mostrarFecha() {
        const fechaFooter = document.getElementById("fecha-footer"); // Elemento para la fecha en el footer
        if (fechaFooter) {
            const fechaHoy = new Date(); // Obtenemos la fecha de hoy
            const fechaReferencia = new Date(2024, 8, 16); // Fecha de referencia: 16 de septiembre de 2024
            const diasTranscurridos = Math.floor((fechaHoy - fechaReferencia) / (1000 * 60 * 60 * 24)); // Días transcurridos
            const fechaLocal = fechaHoy.toLocaleDateString("es-ES"); // Fecha local en formato español
            fechaFooter.textContent = `Fecha: ${fechaLocal} | Días desde el 16 de septiembre de 2024: ${diasTranscurridos}`; // Mostramos la fecha
        } else {
            console.error('El div con id "fecha-footer" no se encuentra en el documento.');
        }
    }

    // Actualizar el reloj cada segundo
    setInterval(actualizarReloj, 1000);

    // Mostrar la fecha y días transcurridos al cargar la página
    mostrarFecha();
});
