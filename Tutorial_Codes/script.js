function orderCoffee() {
    alert("Order placed on this time!");
}

function greet() {
    var n = document.getElementById("name").value;
    alert("Order for: " + n);
}

function changeText() {
    document.getElementById("message").innerHTML =
        "New Special: Free brownie with every coffee!";
}

function calculateBill() {
    var price = document.getElementById("price").value;
    var quantity = document.getElementById("quantity").value;

    var total = price * quantity;

    document.getElementById("billResult").innerHTML =
        "Total Bill: $" + total;
}

function selectItem(item) {
    document.getElementById("selectedItem").innerHTML =
        "Selected: " + item;
}

function submitFeedback() {
    var fb = document.getElementById("feedback").value;
    document.getElementById("feedbackMsg").innerHTML =
        "Thanks for your feedback: " + fb;
}