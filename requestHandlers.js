var prices={}; // Keep price list

function price(itemName, response) {
  console.log("Request handler 'price' was called for item: " + itemName);

  // Generate random price if item is not found
  if (!(itemName in prices)) {
    prices[itemName] = Math.floor((Math.random() * 999999) + 1) / 100.00;
  }

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(prices[itemName].toFixed(2));
  response.end();
}

exports.price = price;
