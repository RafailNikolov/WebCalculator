$(document).ready(function(){

    var currentNum,
        firstNum,
        calcResult,
        sign,
        enterFirstNum = true;

    if(enterFirstNum) {
        $('#num-result').val('');
        $('button').click(function () {

                var val = $(this).data('val');

                if ($.isNumeric(val)) {
                    $('#num-result').val($('#num-result').val() + val);
                    currentNum = $('#num-result').val();
                } else if (val === '.' && currentNum.indexOf('.') === -1) {
                    $('#num-result').val($('#num-result').val() + val);
                    currentNum = $('#num-result').val();
                } else if (val === 'C') {
                    $('#num-result').val('');
                } else if (val === 'back') {
                    currentNum = currentNum.substring(0, currentNum.length - 1);
                    $('#num-result').val(currentNum);
                } else if(val === 'neg' && currentNum.indexOf('-') === -1){
                   currentNum = '-' + currentNum;
                   $('#num-result').val(currentNum);
                } else if (val === '+' || val === '-' || val === '*' || val === '/') {
                    sign = val;
                    firstNum = currentNum;
                    currentNum = '';
                    $('<span>').text(firstNum + ' ' + sign).appendTo('#currentNum');
                    $('#num-result').val('');
                    enterFirstNum = false;
                } else if (val === '=') {
                    calculate();
                }
        });
    }

    function calculate(){

        var firstNumber = parseFloat(firstNum);
        var secondNumber = parseFloat(currentNum);

        if(sign === '+'){
            calcResult = firstNumber + secondNumber;
            $('#num-result').val(calcResult);
        } else if(sign === '-'){
            calcResult = firstNumber - secondNumber;
            $('#num-result').val(calcResult);
        } else if(sign === '*'){
            calcResult = firstNumber * secondNumber;
            $('#num-result').val(calcResult);
        } else if(sign === '/'){
            calcResult = firstNumber / secondNumber;
            $('#num-result').val(calcResult);
        }
        currentNum = calcResult;
        enterFirstNum = true;
        $('#currentNum > span').remove();

    }


});