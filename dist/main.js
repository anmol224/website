const tabitems=document.querySelectorAll('.tab-item');
const tabcontentitems=document.querySelectorAll('.tab-content-item');

function selectitem(e) {

	removeBorder();
	removeShow();
	this.classList.add('tab-border');
	console.log(this.id);

	const tabitem=document.querySelector(`#${this.id}-content`);
	tabitem.classList.add('show');
}
function removeBorder(e)
{
	tabitems.forEach(item =>item.classList.remove('tab-border'))

}
function removeShow(e)
{
	tabcontentitems.forEach(item =>item.classList.remove('show'))

}
tabitems.forEach(item => item.addEventListener('click',selectitem));
console.log("anmol jaiswal")