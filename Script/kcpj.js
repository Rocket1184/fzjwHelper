var iframeEl = document.getElementsByTagName('iframe')[0];
iframeEl.addEventListener('load', CreateBtn);
// 禁止 iframe 使用 alert
iframeEl.setAttribute('sandbox', 'allow-scripts allow-forms allow-pointer-lock allow-same-origin')

function DoEvaluate(type) {
    var select = iframeEl.contentDocument.getElementsByTagName('select');
    // Math.random() 的放大倍数
    var randMulti = 233;
    // 对随机数取模
    var randMod = 3;
    // 随机数取模之后加上的修正值
    var randFix = 1;
    var needAdjust = false;

    switch (type) {
        case 'goodMan': // 9a1b
            randMulti = 0;
            needAdjust = true;
            break;
        case 'notSoGood': // 5a5b
            randMod = 2;
            randFix = 1;
            break;    
        case 'justSoSo': // 5b5c
            randMod = 2;
            randFix = 2;
            break;
        case 'notSoBad': // 5c5d
            randMod = 2;
            randFix = 3;
            break;
        case 'badApple': // 1c9d
            randMulti = 0;
            randFix = 4;
            needAdjust = true;
            break;
        case 'whatTheFxxk':
        default:
            break;
    }

    for (i = 1; i < select.length; i++) {
        var index = parseInt(Math.random() * randMulti) % randMod + randFix;
        select[i].options[index].selected = true;
    }

    if (needAdjust) {
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

    // 如果不用 setTimeout，onclick 不会被触发 ... 为什么呢
    setTimeout(() => {
        iframeEl.contentDocument.getElementById('Button1').click();
    }, 0);
}

function CreateBtn() {
    var bn1 = iframeEl.contentDocument.getElementById('Button1');
    if (!bn1) return;
    var frag = document.createDocumentFragment();

    var btnGood = document.createElement('button');

    btnGood.classList.add('button');
    btnGood.innerText = '\u597d\u8bc4'; // 好评 9a1b
    var btnNotSoGood = btnGood.cloneNode(true);
    btnNotSoGood.innerText = '\u8f83\u597d'; // 较好 5a5b
    var btnMid = btnGood.cloneNode(true);
    btnMid.innerText = '\u4e2d\u8bc4'; // 中评 5b5c
    var btnNotSoBad = btnGood.cloneNode(true);
    btnNotSoBad.innerText = '\u8f83\u5dee'; // 较差 5c5d
    var btnBad = btnGood.cloneNode(true);
    btnBad.innerText = '\u5dee\u8bc4'; // 差评 1c9d
    var btnRand = btnGood.cloneNode(true);
    btnRand.innerText = '\u770b\u8138'; // 看脸

    btnGood.onclick = () => DoEvaluate('goodMan');
    btnNotSoGood.onclick = () => DoEvaluate('notSoGood');
    btnMid.onclick = () => DoEvaluate('justSoSo');
    btnNotSoBad.onclick = () => DoEvaluate('notSoBad');
    btnBad.onclick = () => DoEvaluate('badApple');
    btnRand.onclick = () => DoEvaluate('whatTheFxxk');

    frag.appendChild(btnGood);
    frag.appendChild(btnNotSoGood);
    frag.appendChild(btnMid);
    frag.appendChild(btnNotSoBad);
    frag.appendChild(btnBad);
    frag.appendChild(btnRand);

    bn1.parentElement.appendChild(frag);
}

function Rampage() {
    var select = iframeEl.contentDocument.getElementById('pjkc');
    var kill = select.selectedIndex;
    var HolyShit = select.options.length;

    function UnStoppable() {
        DoEvaluate('justSoSo');
        kill++;
        console.log(kill, 'players multi kill!');
        if (kill >= HolyShit) {
            iframeEl.removeEventListener('load', UnStoppable);
            alert('Holy Shit!');
        }
    };

    DoEvaluate();

    iframeEl.addEventListener('load', UnStoppable);
}
