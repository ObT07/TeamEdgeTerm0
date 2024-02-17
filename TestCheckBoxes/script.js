function displayRadioValue() {
    let ele = document.getElementsByName('radio');
    let score = 0

    for (i = 0; i < ele.length; i++) {
        if (ele[0].checked) {
            score += 10;
            break;
        }
        if (ele[1].checked) {
            score += 15;
            break;
         }
        else if (ele[2].checked) {
            score += 20;
            break;
        }
    }
    alert(score);
}