function DelEmptyLi() {
	for (i = el.length - 1; i >= 0; i--) {
		console.log(i, el[i].innerText, el[i].innerText.length);
		if (el[i].innerText.length <= 1)
			el[i].parentElement.removeChild(el[i]);
	}
}