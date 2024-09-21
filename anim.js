
document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('backgroundAudio');
  
  // Función para reproducir el audio desde el segundo 11
  function playAudioFromEleven() {
    audio.currentTime = 11;
    audio.play().catch(function(error) {
      console.log("Error al reproducir el audio:", error);
    });
  }

  // Intenta reproducir el audio cuando la página esté lista
  playAudioFromEleven();

  // Agrega un evento de clic al documento para reproducir el audio en respuesta a la interacción del usuario
  document.addEventListener('click', function() {
    if (audio.paused) {
      playAudioFromEleven();
    }
  }, { once: true });
});




