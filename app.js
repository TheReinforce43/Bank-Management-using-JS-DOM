// alert("hello Young Man!!")

function depositHandler(event) {

    // This value takes input from keyboard

    var deposit_money_from_input = document.getElementById('deposit_amount').value;

    if (!isNumeric(deposit_money_from_input)) {
        alert('Please enter valid value');
        console.log('Undefined or empty button pushed');
    }

    else {

        // Thuis value take from current deposit money and current final amount.

        let FinalBalance_from_text = document.getElementById('current_balance').innerText;
        let currentDeposit = document.getElementById('current_deposit').innerText;

        //convert all string value into integer value

        FinalBalance = parseInt(FinalBalance_from_text);
        current_deposit_amount = parseInt(currentDeposit);
        deposit_money_from_input = parseInt(deposit_money_from_input);

        //add value into current deposit amount

        document.getElementById('current_deposit').innerText = deposit_money_from_input + current_deposit_amount;
        document.getElementById('current_balance').innerText = FinalBalance + deposit_money_from_input;

        //finally clear the input field
        document.getElementById('deposit_amount').value = ''



        console.log(deposit_money_from_input, current_deposit_amount);
        console.log('Total Deposit : ', deposit_money_from_input + current_deposit_amount);

        
    }

}


function withdrawHandler(event) {

    var withdraw_from_button = document.getElementById('withdraw_amount').value;

    if (!isNumeric(withdraw_from_button)) {
        alert('Please enter valid value');
        console.log('please enter valid value');
    }
    else {
        let current_withdraw_amount = document.getElementById('current_withdraw').innerText;
        let current_balance = document.getElementById('current_balance').innerText;

        withdraw_from_button = parseInt(withdraw_from_button);
        current_withdraw_amount = parseInt(current_withdraw_amount);
        current_balance = parseInt(current_balance);

        if (withdraw_from_button > current_balance) {
            console.log('You have not enough money for withdrawing');
            alert('You have not enough money');
        }

        else {

            console.log(withdraw_from_button, current_withdraw_amount);
            document.getElementById('current_withdraw').innerText = withdraw_from_button + current_withdraw_amount;
            document.getElementById('current_balance').innerText = current_balance - withdraw_from_button;
        }



        document.getElementById('withdraw_amount').value = '';
    }

}


// Function to check if a value is numeric
function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}


