# FZJW Helper
方正教务助手，让繁琐的方正教务评教系统更易于使用。

## 使用方法

将 下面的内容 添加为浏览器书签。

```JavaScript
javascript:(function(){function%20Rooster()%20{%20var%20ua%20=%20navigator.userAgent;%20%20if%20(ua.indexOf("Firefox")%20>%200)%20{%20CreateBtn();%20return;%20}%20else%20if%20(ua.indexOf("Chrome")%20>%200)%20{%20console.log("chrome%20detacted!");%20alert("Chrome%20%E7%94%A8%E6%88%B7%EF%BC%8C%E8%AF%B7%E7%82%B9%E5%87%BB%20%E2%80%9C%E7%A1%AE%E5%AE%9A%E2%80%9D%20%E4%BB%A5%E5%BC%80%E5%90%AF%20Rampage%20%E6%A8%A1%E5%BC%8F%EF%BC%81");%20Rampage();%20return;%20}%20}%20%20function%20CreateBtn()%20{%20%20var%20iframe%20=%20document.getElementsByTagName("iframe")[0].contentDocument;%20var%20btnGood%20=%20document.createElement("button");%20%20btnGood.classList.add("button");%20btnGood.innerText%20=%20"%E5%A5%BD%E8%AF%84";%20var%20btnMid%20=%20btnGood.cloneNode(true);%20btnMid.innerText%20=%20"%E4%B8%AD%E8%AF%84";%20var%20btnBad%20=%20btnGood.cloneNode(true);%20btnBad.innerText%20=%20"%E5%B7%AE%E8%AF%84";%20var%20btnRand%20=%20btnGood.cloneNode(true);%20btnRand.innerText%20=%20"%E7%9C%8B%E8%84%B8";%20%20btnGood.onclick%20=%20function%20()%20{%20FirstBlood("goodMan");%20DoubleKill();%20TribleKill();%20};%20btnMid.onclick%20=%20function%20()%20{%20FirstBlood("justSoSo");%20DoubleKill();%20TribleKill();%20};%20btnBad.onclick%20=%20function%20()%20{%20FirstBlood("badApple");%20DoubleKill();%20TribleKill();%20};%20btnRand.onclick%20=%20function%20()%20{%20FirstBlood("whatTheFxxk");%20DoubleKill();%20TribleKill();%20};%20%20var%20bn1%20=%20iframe.getElementById("Button1");%20%20bn1.parentElement.appendChild(btnGood);%20bn1.parentElement.appendChild(btnMid);%20bn1.parentElement.appendChild(btnBad);%20bn1.parentElement.appendChild(btnRand);%20}%20%20function%20FirstBlood(type)%20{%20var%20iframe%20=%20document.getElementsByTagName("iframe")[0].contentDocument;%20var%20obj%20=%20iframe.getElementsByTagName("select");%20var%20randMulti%20=%20233;%20var%20randMod%20=%203;%20var%20randFix%20=%201;%20var%20needAdjust%20=%20true;%20%20switch%20(type)%20{%20case%20"goodMan":%20randMulti%20=%200;%20break;%20case%20"justSoSo":%20randMod%20=%202;%20randFix%20=%202;%20needAdjust%20=%20false;%20break;%20case%20"badApple":%20randMulti%20=%200;%20randFix%20=%204;%20break;%20case%20"whatTheFxxk":%20needAdjust%20=%20false;%20break;%20default:%20needAdjust%20=%20false;%20break;%20}%20%20for%20(i%20=%201;%20i%20<%20obj.length;%20i++)%20{%20var%20index%20=%20parseInt(Math.random()%20*%20randMulti)%20%%20randMod%20+%20randFix;%20obj[i].options[index].selected%20=%20true;%20}%20%20if%20(needAdjust%20==%20true)%20{%20console.log("type%20",%20type,%20"needs%20adjust");%20var%20RanInd%20=%20parseInt(Math.random()%20*%206666)%20%%2010%20+%201;%20switch%20(type)%20{%20case%20"goodMan":%20obj[RanInd].options[2].selected%20=%20true;%20break;%20case%20"badApple":%20obj[RanInd].options[3].selected%20=%20true;%20break;%20}%20}%20}%20%20function%20DoubleKill()%20{%20var%20iframe%20=%20document.getElementsByTagName("iframe")[0].contentDocument;%20iframe.getElementById("Button1").click();%20}%20%20function%20TribleKill()%20{%20setTimeout(function()%20{%20CreateBtn();%20},%20600);%20}%20%20function%20Rampage(type)%20{%20var%20iframe%20=%20document.getElementsByTagName("iframe")[0].contentDocument;%20var%20kill%20=%200;%20var%20HolyShit%20=%20iframe.getElementById("pjkc").options.length;%20var%20UnStoppable%20=%20setInterval(function%20()%20{%20FirstBlood("justSoSo");%20DoubleKill();%20kill++;%20console.log(kill,"players%20multi%20kill!");%20if%20(kill%20>=%20HolyShit)%20{%20window.clearInterval(UnStoppable);%20alert("Holy%20Shit!");%20}%20},%20600);%20}%20%20Rooster();})()
```

打开 `方正教务系统` ，进入 `教学评价` 页面。

点击刚刚添加的书签。

##如果不想添加书签。。。

在 `教学评价` 页面，按下 `F12` 键。

在弹出的界面中，寻找 `Console` 或 `控制台` ，点击进入。

输入上面的代码，回车。

##Enjoy It!
