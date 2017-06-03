var baseURL = 'https://rawgit.com/Rocket1184/fzjwHelper/master/Script/';

var navBar = document.getElementsByClassName('nav')[0];
var menuTag = document.createElement('li');
menuTag.innerHTML = '<a href="#a" class="top_link"><span class="down">教务助手</span></a>';
menuTag.className = 'top';

var menu = document.createElement('ul');
menu.className = 'sub';

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
        try {
            document.getElementById('DelEmptyLi').id.length;
        } catch (error) {
            var del = document.createElement('script');
            del.setAttribute('type', 'text/javascript');
            del.setAttribute('src', baseURL + 'DelEmptyLi.js');
            del.id = ('DelEmptyLi');
            document.body.appendChild(del);
        }
        var url = baseURL + name + '.js';
    }
    var el = document.createElement('script');
    el.setAttribute('type', 'text/javascript');
    el.setAttribute('src', url);
    el.id = name;
    document.body.appendChild(el);
}

function RegisterMenuEntry(name, scriptName, functionName) {
    InjectScriptElement(scriptName);
    var menuItemElem = CreateMenuItem(name, 'javascript:' + functionName + '()');
    menu.appendChild(menuItemElem);
}

RegisterMenuEntry('课程评价', 'kcpj', 'CreateBtn');
RegisterMenuEntry('平均绩点', 'pjjd', 'CalcGPAAll');
RegisterMenuEntry('已选学分', 'yxxf', 'CalcCreditAll');

menuTag.appendChild(menu);

navBar.appendChild(menuTag);