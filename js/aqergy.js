// AQERGY · web: menú en móvil y formulario de contacto.
(function () {
  var boton = document.querySelector('.abre-menu');
  var menu = document.getElementById('menu');
  if (boton && menu) {
    boton.addEventListener('click', function () {
      var abierto = menu.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      boton.textContent = abierto ? 'Cerrar' : 'Menú';
    });
  }

  // El formulario prepara un correo a Rafael Cruz e Ignacio Linares con lo escrito.
  // La web no guarda ni envía datos a ningún servidor.
  var form = document.getElementById('form-contacto');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var v = function (n) { return (form.elements[n].value || '').trim(); };
      var cuerpo = [
        'Nombre: ' + v('nombre'),
        'Empresa: ' + v('empresa'),
        'Correo: ' + v('correo'),
        'Teléfono: ' + v('telefono'),
        '',
        v('consulta')
      ].join('\n');
      var asunto = 'Consulta desde aqergy.com' + (v('empresa') ? ' · ' + v('empresa') : '');
      window.location.href = 'mailto:' + form.dataset.destino +
        '?subject=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent(cuerpo);
    });
  }
})();
