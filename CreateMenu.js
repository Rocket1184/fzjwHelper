function CreateMenuItem(name, href) {
	var res = document.createElement('li');
	var item = document.createElement('a');
	item.innerHTML = name;
	item.setAttribute('href', href);
	res.appendChild(item);
	return res;
}

function ExecuteFunction(fn) {
	var el = document.createElement('script');
	el.setAttribute('type', 'text/javascript');
	el.innerText = fn + '()';
	document.body.appendChild(el);
	document.body.removeChild(el);
}

function AddOrDo(name) {
	var hasCreated = document.getElementById(name);
	if (hasCreated === null) {
		var el = document.createElement('script');
		el.id = name;
		el.setAttribute('type', 'text/javascript');
		el.setAttribute('src', 'https://rawgit.com/Rocket1184/fzjwHelper/master/' + name + '.js');
		document.body.appendChild(el);
	} else {
		ExecuteFunction(name);
	}
}

var navBar = document.getElementsByClassName('nav')[0];
var menuTag = document.createElement('li');
menuTag.innerHTML = '<a href="#a" class="top_link"><span class="down">教务助手</span></a>';
menuTag.className = 'top';

var menu = document.createElement('ul');
menu.className = 'sub';

var kcpj = CreateMenuItem('课程评价', 'javascript:AddOrDo("kcpj")');
var pjjd = CreateMenuItem('绩点计算', 'javascript:AddOrDo("pjjd")');

menu.appendChild(kcpj);
menu.appendChild(pjjd);

menuTag.appendChild(menu);

navBar.appendChild(menuTag);