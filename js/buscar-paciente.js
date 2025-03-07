let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');

xhr.addEventListener('load', () => {
	let pacientes = JSON.parse(xhr.responseText);
	
	pacientes.forEach((paciente) => {
		adicionaPacienteNaTabela(paciente);
	});
});

xhr.send();
