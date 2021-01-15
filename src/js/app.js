/* eslint-disable */
const btnCollapse = document.querySelector('.btn-collapse');
const collapseElem = document.querySelector('.collapse');

btnCollapse.onclick = () => {
  btnCollapse.classList.toggle('opened');
  btnCollapse.classList.contains('opened') ? collapseElem.classList.remove('show') : collapseElem.classList.add('show');
};
