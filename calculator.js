
$(document).ready(function () {
    const display = $('#display');
    const buttons = $('#btn-container button');
    const toggleSwitch = $('input[type="checkbox"]');


    toggleSwitch.change(function () {
        $('body').toggleClass('dark', this.checked);
    });


    buttons.click(function () {
        handleButtonClick($(this).text());
    });


    $(document).keypress(function (event) {
        const buttonValue = String.fromCharCode(event.which);
        if (isButtonValue(buttonValue)) {
            handleButtonClick(buttonValue);
        }
    });


    function handleButtonClick(buttonText) {
        switch (buttonText) {
            case 'AC':
                display.val('');
                break;
            case 'DEL':
                display.val(display.val().slice(0, -1));
                break;
            case '√':
                display.val(Math.sqrt(parseFloat(display.val())));
                break;
            case '/':
            case '*':
            case '-':
            case '+':
                display.val(display.val() + buttonText);
                break;
            case '=':
                try {
                    display.val(eval(display.val()));
                } catch (error) {
                    display.val('Error');
                }
                break;
            default:
                display.val(display.val() + buttonText);
        }
    }


    function isButtonValue(value) {
        const buttonValues = Array.from(buttons.map(function () {
            return $(this).text();
        }));
        return buttonValues.includes(value);
    }
});
