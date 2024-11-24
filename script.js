function generateInvoice() {
  const customerName = document.getElementById("customerName").value;
  const customerAddress = document.getElementById("customerAddress").value;
  const productName = document.getElementById("productName").value;
  const productPrice = parseFloat(document.getElementById("productPrice").value);
  const gstRate = parseFloat(document.getElementById("gstRate").value);

  // Calculate GST and total price
  const gstAmount = (productPrice * gstRate) / 100;
  const totalPrice = productPrice + gstAmount;

  // Display the invoice
  document.getElementById("displayCustomerName").innerText = customerName;
  document.getElementById("displayCustomerAddress").innerText = customerAddress;
  document.getElementById("displayProductName").innerText = productName;
  document.getElementById("displayProductPrice").innerText = productPrice.toFixed(2);
  document.getElementById("displayGstAmount").innerText = gstAmount.toFixed(2);
  document.getElementById("displayTotalPrice").innerText = totalPrice.toFixed(2);

  document.getElementById("invoice").style.display = "block";
}

