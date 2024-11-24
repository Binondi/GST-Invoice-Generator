// Function to format date as dd/mm/yyyy
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0'); // Day as two digits
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month as two digits (0-indexed)
  const year = date.getFullYear(); // Full year
  
  return `${day}/${month}/${year}`;
}

document.addEventListener("DOMContentLoaded", function() {
  // Fetch invoice data from localStorage
  const invoiceData = JSON.parse(localStorage.getItem("invoiceData"));

  if (invoiceData) {
    // Populate the invoice
    document.getElementById("displayInvoiceNumber").innerText = invoiceData.invoiceNumber;

    // Format and display the issue date and due date
    document.getElementById("displayIssueDate").innerText = formatDate(invoiceData.issueDate);
    document.getElementById("displayDueDate").innerText = formatDate(invoiceData.dueDate);

    // Continue populating other fields
    document.getElementById("displayCustomerName").innerText = invoiceData.customerName;
    document.getElementById("displayCustomerAddress").innerText = invoiceData.customerAddress;
    document.getElementById("displaySellerName").innerText = invoiceData.sellerName;
    document.getElementById("displaySellerAddress").innerText = invoiceData.sellerAddress;
    document.getElementById("displayPurchaseOrder").innerText = invoiceData.purchaseOrder;
    document.getElementById("displayProductName").innerText = invoiceData.productName;
    document.getElementById("displayProductPrice").innerText = invoiceData.productPrice;
    document.getElementById("displayDiscountRate").innerText = invoiceData.discountRate;
    document.getElementById("displayPriceAfterDiscount").innerText = invoiceData.priceAfterDiscount;
    document.getElementById("displayGstRate").innerText = invoiceData.gstRate;
    document.getElementById("displayGstAmount").innerText = invoiceData.gstAmount;
    document.getElementById("displayTotalPrice").innerText = invoiceData.totalPrice;
    document.getElementById("displayTotalPriceSummary").innerText = invoiceData.totalPrice;
    document.getElementById("displayUpiId").innerText = invoiceData.upiId;
    document.getElementById("displaySellerName").innerText = invoiceData.billedFrom;

  } else {
    alert("No invoice data found!");
  }

  // Print function
  function printInvoice() {
    const printContent = document.getElementById("invoice").outerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    location.reload();
  }

});
