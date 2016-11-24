var el = document.getElementsByTagName('li');

for (i = el.length - 1; i >= 0; i--) {
    if (el[i].innerText.length <= 1)
        el[i].parentElement.removeChild(el[i]);
}