var iframeEl = document.getElementsByTagName('iframe')[0];
iframeEl.addEventListener('load', CreateBtn);

function CreateBtn() {
    var btnGood = document.createElement('button');

    btnGood.classList.add('button');
    btnGood.innerText = '\u597d\u8bc4'; // 好评
    var btnMid = btnGood.cloneNode(true);
    btnMid.innerText = '\u4e2d\u8bc4'; //中评
    var btnBad = btnGood.cloneNode(true);
    btnBad.innerText = '\u5dee\u8bc4'; //差评
    var btnRand = btnGood.cloneNode(true);
    btnRand.innerText = '\u770b\u8138'; //看脸

    btnGood.onclick = function () {
        FirstBlood('goodMan');
        DoubleKill();
    };
    btnMid.onclick = function () {
        FirstBlood('justSoSo');
        DoubleKill();
    };
    btnBad.onclick = function () {
        FirstBlood('badApple');
        DoubleKill();
    };
    btnRand.onclick = function () {
        FirstBlood('whatTheFxxk');
        DoubleKill();
    };

    var bn1 = iframeEl.contentDocument.getElementById('Button1');
    var frag = document.createDocumentFragment();

    frag.appendChild(btnGood);
    frag.appendChild(btnMid);
    frag.appendChild(btnBad);
    frag.appendChild(btnRand);

    bn1.parentElement.appendChild(frag);
}

function FirstBlood(type) {
    var select = iframeEl.contentDocument.getElementsByTagName('select');
    var randMulti = 233;
    var randMod = 3;
    var randFix = 1;
    var needAdjust = true;

    switch (type) {
        case 'goodMan':
            randMulti = 0;
            break;
        case 'justSoSo':
            randMod = 2;
            randFix = 2;
            needAdjust = false;
            break;
        case 'badApple':
            randMulti = 0;
            randFix = 4;
            break;
        case 'whatTheFxxk':
            needAdjust = false;
            break;
        default:
            needAdjust = false;
            break;
    }

    for (i = 1; i < select.length; i++) {
        var index = parseInt(Math.random() * randMulti) % randMod + randFix;
        select[i].options[index].selected = true;
    }

    if (needAdjust) {
        console.log('type ', type, 'needs adjust');
        var RanInd = parseInt(Math.random() * 6666) % 10 + 1;
        switch (type) {
            case 'goodMan':
                select[RanInd].options[2].selected = true;
                break;
            case 'badApple':
                select[RanInd].options[3].selected = true;
                break;
        }
    }
}

function DoubleKill() {
    iframeEl.contentDocument.getElementById('Button1').click();
}
 
function Rampage() {
    var select = iframeEl.contentDocument.getElementById('pjkc');
    var kill = select.selectedIndex;
    var HolyShit = select.options.length;

    function UnStoppable() {
        FirstBlood('justSoSo');
        DoubleKill();
        kill++;
        console.log(kill, 'players multi kill!');
        if (kill >= HolyShit) {
            iframeEl.removeEventListener('load', UnStoppable);
			alert('Holy Shit!');
        }
    };

	FirstBlood();
	DoubleKill();

    iframeEl.addEventListener('load', UnStoppable);
}