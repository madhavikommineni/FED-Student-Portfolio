$(document).ready(function() {
    var texts = $('.dynamic-text div');
    var index = 0;
    function changeText() {
        texts.eq(index).fadeIn(500).delay(0).fadeOut(0, function() {
            index = (index + 1) % texts.length;
            changeText();
        });
    }
changeText();
});