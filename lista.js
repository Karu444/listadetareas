let contador = 0;

function agregarCampo() {
  contador += 1
  const formulario = document.getElementById('miFormulario');

  const label = document.createElement('label');
  label.textContent = 'Etiqueta ' + (contador) + ': ';

  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'campo' + (contador);

  formulario.appendChild(label);
  formulario.appendChild(input);
  formulario.innerHTML+= "<br>"  

}

const botonAgregarCampo = document.getElementById('agregarCampo');
botonAgregarCampo.addEventListener('click', agregarCampo);

function eliminarCampo(){
  const formulario  = document.getElementById('miFormulario');
  formulario.removeChild(formulario.lastElementChild);
  formulario.removeChild(formulario.lastElementChild);
  formulario.removeChild(formulario.lastElementChild);

}
