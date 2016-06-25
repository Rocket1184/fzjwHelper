function CreateMenuItem(name,href) {
	var res = document.createElement('li');
	var item = document.createElement('a');
	item.innerHTML=name;
	item.setAttribute('href',href);
	res.appendChild(item);
	return res;
}

var navBar = document.getElementsByClassName('nav')[0];
var menuTag = document.createElement('li');
menuTag.innerHTML='<a href="#a" class="top_link"><span class="down">教务助手</span></a>';
menuTag.className='top';

var menu = document.createElement('ul');
menu.className='sub';

var kcpj=CreateMenuItem('课程评价',"javascript: (function() {var el = document.createElement('script');el.setAttribute('type', 'text/javascript');el.setAttribute('src','https://rawgit.com/Rocket1184/fzjwHelper/master/kcpj.js');document.body.appendChild(el);})();");
var cjcx=CreateMenuItem('绩点计算',"javascript: (function() {var el = document.createElement('script');el.setAttribute('type', 'text/javascript');el.setAttribute('src','https://rawgit.com/Rocket1184/fzjwHelper/master/pjjd.js');document.body.appendChild(el);})();");

menu.appendChild(kcpj);
menu.appendChild(cjcx);

menuTag.appendChild(menu);

navBar.appendChild(menuTag);