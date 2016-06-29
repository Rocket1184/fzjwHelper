function CreateMenuItem(name, href) {
	var res = document.createElement('li');
	var item = document.createElement('a');
	item.innerHTML = name;
	item.setAttribute('href', href);
	res.appendChild(item);
	return res;
}

function InjectScriptElement(name) {
	try {
		var url = chrome.extension.getURL('Script/' + name + '.js');
	} catch (error) {
		var url = 'https://rawgit.com/Rocket1184/fzjwHelper/master/Script/' + name + '.js';
	}
	var el = document.createElement('script');
	el.setAttribute('type', 'text/javascript');
	el.setAttribute('src', url);
	el.id = name;
	document.body.appendChild(el);

}

InjectScriptElement('kcpj');
InjectScriptElement('pjjd');

var navBar = document.getElementsByClassName('nav')[0];
var menuTag = document.createElement('li');
menuTag.innerHTML = '<a href="#a" class="top_link"><span class="down">教务助手</span></a>';
menuTag.className = 'top';

var menu = document.createElement('ul');
menu.className = 'sub';

var kcpj = CreateMenuItem('课程评价', 'javascript:Rooster();');
var pjjd = CreateMenuItem('绩点计算', 'javascript:CalcGPAAll();');

menu.appendChild(kcpj);
menu.appendChild(pjjd);

menuTag.appendChild(menu);

navBar.appendChild(menuTag);