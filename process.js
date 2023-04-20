let pay = true;
let pagina = document.querySelector('#principal');

console.log("Alo alo");

if (!pay) {
	pagina.style.display = 'none';
} else {
	pagina.style.display = 'block';
}
