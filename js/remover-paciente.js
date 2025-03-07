const tabelaPaciente = document.getElementById('tabela-pacientes');

tabelaPaciente.addEventListener('dblclick', (e) => {
		e.target.parentNode.classList.add('esconder');
		
		setTimeout(() => {e.target.parentNode.remove();}, 500);
});