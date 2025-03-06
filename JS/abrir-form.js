// Aparecer o form
const abrir = document.querySelector('.abrir');
const form = document.querySelector('form');

abrir.addEventListener('click', () => {
	form.classList.toggle('ativo');
});
