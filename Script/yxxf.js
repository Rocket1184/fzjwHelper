function CalcCreditAll() {
    var total = 0;
    [].forEach.call(
        document.getElementById('iframeautoheight').contentDocument.getElementsByClassName('datelist')[0].rows,
        ((e, i) => {
            if (i) total += +e.cells[5].innerText;
        })
    );
    // 本学期已选学分为
    alert(`\u672c\u5b66\u671f\u5df2\u9009\u5b66\u5206\u4e3a ${total}`);
}