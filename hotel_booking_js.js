// Función para buscar hoteles
function searchHotels() {
    const destination = document.getElementById('destination').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    // Validar que todos los campos estén completos
    if (!destination || !checkin || !checkout || !guests) {
        alert('Por favor completa todos los campos de búsqueda');
        return;
    }

    // Mostrar mensaje de búsqueda
    alert(`Buscando hoteles en ${destination} para ${guests} huéspedes\nDel ${checkin} al ${checkout}`);
    
    // Desplazar suavemente a la sección de hoteles
    document.getElementById('hotels').scrollIntoView({ behavior: 'smooth' });
}

// Función para reservar hotel
function bookHotel(hotelName) {
    const modal = document.getElementById('bookingModal');
    const message = document.getElementById('confirmationMessage');
    
    // Mostrar mensaje de confirmación personalizado
    message.textContent = `Has reservado exitosamente en ${hotelName}. Te enviaremos un correo de confirmación pronto.`;
    
    // Mostrar el modal
    modal.style.display = 'flex';
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Establecer fecha mínima en los campos de fecha (opcional)
window.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    
    if (checkinInput) {
        checkinInput.setAttribute('min', today);
    }
    
    if (checkoutInput) {
        checkoutInput.setAttribute('min', today);
    }
});