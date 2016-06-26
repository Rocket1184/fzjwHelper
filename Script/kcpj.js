function Rooster() {
	var ua = navigator.userAgent;
	
	if (ua.indexOf("Firefox") > 0) {
		CreateBtn();
		return;
	}
	else if (ua.indexOf("Chrome") > 0) {
		console.log("chrome detected!");
		// Chrome 用户，请点击 “确定” 以开启 Rampage 模式！
		alert("\u0043\u0068\u0072\u006f\u006d\u0065\u0020\u7528\u6237\uff0c\u8bf7\u70b9\u51fb\u0020\u201c\u786e\u5b9a\u201d\u0020\u4ee5\u5f00\u542f\u0020\u0052\u0061\u006d\u0070\u0061\u0067\u0065\u0020\u6a21\u5f0f\uff01");
		Rampage();
		return;
	}
}

function CreateBtn() {
	
	var iframe = document.getElementsByTagName("iframe")[0].contentDocument;
	var btnGood = document.createElement("button");
	
	btnGood.classList.add("button");
	btnGood.innerText = "\u597d\u8bc4"; // 好评
	var btnMid = btnGood.cloneNode(true);
	btnMid.innerText = "\u4e2d\u8bc4";  //中评
	var btnBad = btnGood.cloneNode(true);
	btnBad.innerText = "\u5dee\u8bc4";  //差评
	var btnRand = btnGood.cloneNode(true);
	btnRand.innerText = "\u770b\u8138";  //看脸

	btnGood.onclick = function () {
		FirstBlood("goodMan");
		DoubleKill();
		TribleKill();
	};
	btnMid.onclick = function () {
		FirstBlood("justSoSo");
		DoubleKill();
		TribleKill();
	};
	btnBad.onclick = function () {
		FirstBlood("badApple");
		DoubleKill();
		TribleKill();
	};
	btnRand.onclick = function () {
		FirstBlood("whatTheFxxk");
		DoubleKill();
		TribleKill();
	};

	var bn1 = iframe.getElementById("Button1");
	
	bn1.parentElement.appendChild(btnGood);
	bn1.parentElement.appendChild(btnMid);
	bn1.parentElement.appendChild(btnBad);
	bn1.parentElement.appendChild(btnRand);
}

function FirstBlood(type) {
	var iframe = document.getElementsByTagName("iframe")[0].contentDocument;
	var obj = iframe.getElementsByTagName("select");
	var randMulti = 233;
	var randMod = 3;
	var randFix = 1;
	var needAdjust = true;

	switch (type) {
		case "goodMan":
			randMulti = 0;
			break;
		case "justSoSo":
			randMod = 2;
			randFix = 2;
			needAdjust = false;
			break;
		case "badApple":
			randMulti = 0;
			randFix = 4;
			break;
		case "whatTheFxxk":
			needAdjust = false;
			break;
		default:
			needAdjust = false;
			break;
	}

	for (i = 1; i < obj.length; i++) {
		var index = parseInt(Math.random() * randMulti) % randMod + randFix;
		obj[i].options[index].selected = true;
	}

	if (needAdjust == true) {
		console.log("type ", type, "needs adjust");
		var RanInd = parseInt(Math.random() * 6666) % 10 + 1;
		switch (type) {
			case "goodMan":
				obj[RanInd].options[2].selected = true;
				break;
			case "badApple":
				obj[RanInd].options[3].selected = true;
				break;
		}
	}
}

function DoubleKill() {
	var iframe = document.getElementsByTagName("iframe")[0].contentDocument;
	iframe.getElementById("Button1").click();
}

function TribleKill() {
	setTimeout(function() {
		CreateBtn();
	}, 600);
}

function Rampage(type) {
	var iframe = document.getElementsByTagName("iframe")[0].contentDocument;
	var kill = 0;
	var HolyShit = iframe.getElementById("pjkc").options.length;
	var UnStoppable = setInterval(function () {
		FirstBlood("justSoSo");
		DoubleKill();
		kill++;
		console.log(kill,"players multi kill!");
		if (kill >= HolyShit) {
			window.clearInterval(UnStoppable);
			alert("Holy Shit!");
		}
	}, 600);
}