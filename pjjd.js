function CalcGP(g) {
	gn = parseFloat(g);
	if (gn < 60) return 0;
	else if (gn >= 95) return 5.0;
	else if (0 <= gn && gn <= 94) {
		gg = 5.0 - (95 - gn) / 10;
		return gg;
	}
	else switch (g) {
		case '优秀':
			return 5.0;
		case '良好':
			return 4.0;
		case '中等':
			return 3.0;
		case '合格':
			return 2.0;
		default:
			return 0;
	}
}

function CalcGPAAll() {
	var iframe = document.getElementById('iframeautoheight').contentDocument;
	var tbody = iframe.getElementsByTagName('tbody')[1];

	if (tbody.rows[0].cells[7].innerText.indexOf('/') > 0) return;
	tbody.rows[0].cells[7].innerText += ' / 绩点';

	var gpa = 0;
	var sumCrd = 0;

	var len = tbody.rows.length - 1;
	for (i = 1; i <= len; i++) {
		var credit = parseFloat(tbody.rows[i].cells[6].innerText);
		var g = CalcGP(tbody.rows[i].cells[7].innerText);
		gpa += g * credit;
		sumCrd += credit;
		// console.log('credit,', credit, 'g,', g, tbody.rows[i].cells[7].innerText);
		tbody.rows[i].cells[7].innerText += ' / ' + g;
	}
	gpa /= sumCrd;

	var title = iframe.getElementById('tbXsxx').rows[0].cells[0];
	title.innerText += '   平均绩点:' + gpa.toFixed(3);
}

function pjjd() {
	CalcGPAAll();
}

CalcGPAAll();
