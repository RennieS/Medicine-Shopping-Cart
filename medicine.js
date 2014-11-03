var app = {
    addItem: function() {
	var qty = parseInt($("#quantity")[0].value);
	var item = $("#item")[0].value;
        $.get("http://localhost:3000/price?" + item,
		function(data, status) {
		    if (status == "success")
		        app.addToCart(qty, item, data);
		    else
			alert("Error calling webservice");
		});
    },

    addToCart: function(quantity, item, price) {
	var totalPrice = quantity * parseFloat(price);
	$("#cart tbody").append("<tr><td class='center'>"+quantity+"</td><td>"+
		item+ " (price: $"+price+")</td><td class='center'>" +
		totalPrice.toFixed(2) + "</td></tr>");
	var subTotal = parseFloat($("#subtotal")[0].innerText);
	subTotal += totalPrice;
	$("#subtotal")[0].innerText = subTotal.toFixed(2);
	var tax = subTotal * 0.0971;
	$("#tax")[0].innerText = tax.toFixed(2);
	$("#total")[0].innerText = (subTotal + tax).toFixed(2);
    }
}