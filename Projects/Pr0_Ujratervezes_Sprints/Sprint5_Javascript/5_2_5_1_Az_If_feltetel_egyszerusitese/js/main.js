function calcAmount() {

    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber);

}

function showSumPrice(price = 1000, amountNumber = 1) {

    let showAmount = document.querySelector("span.show-amount");

    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
        return;
    } else if (amountNumber < 1) {
        alert("Minimum egy terméket kell vásárolnia!");
    } else {
        let amount = parseInt(amountInput.value) * price;
        showAmount.innerHTML = amount;
    }

}


