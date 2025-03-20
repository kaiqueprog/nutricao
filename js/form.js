// Cadastrar Paciente
const btnAdicionar = document.querySelector('#adicionar-paciente');

btnAdicionar.addEventListener('click', (e) => {
	e.preventDefault();
	
	const form = document.querySelector('form');
	// Extraindo informações do paciente do form
	let paciente = obterPacientesDoForm(form);

	let erro = validaPaciente(paciente);
	let mensagemDeErro = document.querySelector('#mensagem-erro');

	if (erro.length > 0) {
		mensagemDeErro.innerHTML = erro.join('<br>');
		return;
	}

	adicionaPacienteNaTabela(paciente);	

	mensagemDeErro.innerHTML = '';
	form.reset(); //Limpa os campos

});

function adicionaPacienteNaTabela(paciente) {
	let pacienteTr = montarTr(paciente);
	let tabela = document.querySelector('#tabela-pacientes');
	tabela.appendChild(pacienteTr);
}

function obterPacientesDoForm(form) {	
	let paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calcularImc(form.peso.value, form.altura.value)
	}

	return paciente;
}
function montarTr(paciente) {
	let pacienteTr = document.createElement('tr');
	pacienteTr.classList.add('paciente');

	pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
	pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
	pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
	pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
	pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

	return pacienteTr;
}
function montaTd(dado, classe) {
	let td = document.createElement('td');
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}
function validaPaciente(paciente) {
	let erros = [];

	if (!validaPeso(paciente.peso)) {
		erros.push(`Peso inválido`);
	}
	if (!validaAltura(paciente.altura)) {
		 erros.push(`Altura inválida`);
	}
	if (paciente.nome.length === 0 || paciente.peso.length === 0 || paciente.altura.length === 0 || paciente.gordura.length === 0) {
		erros.push(`Preencha todos os campos`);
	}


	return erros
}