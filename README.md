# FZJW Helper
方正教务助手，让繁琐的方正教务评教系统更易于使用。

## 添加书签！

1. 将 [此链接](Rampage) 拖动到浏览器书签栏。

2. 打开 `方正教务系统` ，进入 `教学评价` 页面。

3. 点击刚刚添加的书签。

##如果不想添加书签...

1. 在 `教学评价` 页面，按下 `F12` 键。

2. 在弹出的界面中，寻找 `Console` 或 `控制台` ，点击进入。

3. 将 下面的内容 复制到控制台输入区，按下回车。

```JavaScript
javascript: void((function() {var element = document.createElement('script');element.setAttribute('type', 'text/javascript');element.setAttribute('src', 'https://raw.githubusercontent.com/Rocket1184/fzjwHelper/master/kcpj.js');document.body.appendChild(element);})());
```

## 使用方法：

- Firefox 用户：

	使用成功后，在页面最下方的 `保存` 与 `提交` 按钮后面，会出现另外 4 个按钮：
	
	好评，中评，差评，看脸。
	
	只需按动按钮，自动填写十个评价项目，之后转到下一个老师的评价页面。
	
	>注意：为防止误操作，本助手不会自动提交评价；请在评价完成后自行检查评价内容，并提交评价。

- Chrome 用户：

 没时间解释了，快上车！
 
 按下 `确定` 按钮以开启 Rampage 模式。
 
 >Rampage 模式：全自动。默认中评，在评价一页之后自动跳转到下一页进行评价；循环往复直至全部评价结束。
 
 >注意： Rampage 模式仍然不会自动提交评价。
 
 ~~我才不会说这样处理是因为 Chrome 的兼容性。。。。~~
 
 
 - 暂时没有在其他浏览器上进行测试。

##Finally, Enjoy It!

[Rampage]: javascript:void((function(){el=document.createElement('script');el.setAttribute('type','text/javascript');el.setAttribute('src','https://raw.githubusercontent.com/Rocket1184/fzjwHelper/master/kcpj.js');document.body.appendChild(el);})())