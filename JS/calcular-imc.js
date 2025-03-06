// Calcular IMC
const pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {

	let paciente = pacientes[i];

	const peso = paciente.querySelector('.info-peso').textContent;
	const altura = paciente.querySelector('.info-altura').textContent;
	let imcDaLinha = paciente.querySelector('.info-imc');

	let pesoEhValido = validaPeso(peso);
	let alturaEhValida = validaAltura(altura);

	if (!pesoEhValido) {
		imcDaLinha.textContent = 'Peso inválido!';
		imcDaLinha.classList.add('paciente-invalido');
	} else if(!alturaEhValida) {
		imcDaLinha.textContent = 'Altura inválido!';
		imcDaLinha.classList.add('paciente-invalido');
	} else {
		imcDaLinha.textContent = calcularImc(peso,altura); // Duas Casas decimais
	}
}
function validaPeso(peso) {
	if (peso >= 0 && peso < 1000) {
		return true;
	} else {
		return false;
	}
}
function validaAltura(altura) {
	if (altura >= 0 && altura < 3.00) {
		return true;
	} else {
		return false;
	}
}
function calcularImc(peso,altura) {
	let imc = peso / (altura * altura);
	return  imc.toFixed(2);
}

// const calcularIMC = (paciente) => {
// 	const peso = paciente.querySelector('.info-peso').textContent;
// 	const altura = paciente.querySelector('.info-altura').textContent;
// 	let imcDaLinha = paciente.querySelector('.info-imc');

// 	if (peso <= 0 || peso > 1000) {
// 		imcDaLinha.textContent = 'Peso inválido';
// 	} else if(altura <= 0 || altura > 3.00) {
// 		imcDaLinha.textContent = 'Altura inválido';
// 	} else {
// 		let imc = peso / (altura * altura);
// 		imcDaLinha.textContent = imc.toFixed(2);
// 	}

// }

// pacientes.forEach(calcularIMC);
