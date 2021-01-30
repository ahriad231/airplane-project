
function handleTicketChange(ticket, isIncrease) {
  const ticketInput = document.getElementById(ticket + "-count");
  const ticketCount = parseInt(ticketInput.value);
  let ticketNewCount = ticketCount;
  if (isIncrease == true) {
    ticketNewCount = ticketCount + 1;
  }
  if (isIncrease == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }
  ticketInput.value = ticketNewCount;
  let ticketTotal = 0;
  if (ticket == 'first') {
    ticketTotal = ticketNewCount * 150;

  }
  if (ticket == 'eco') {
    ticketTotal = ticketNewCount * 100;

  }
  calculate();

}
function calculate() {
  const firstCount = getInputValue('first');
  const ecoCount = getInputValue('eco');

  const totalPrice = firstCount * 150 + ecoCount * 100;
  document.getElementById("total-price").innerText = '$' + totalPrice;
  const tax = totalPrice * 0.10;
  document.getElementById('tax-amount').innerText = '$' + tax;
  const grandTotal = totalPrice + tax;
  document.getElementById('grand-total').innerText = '$' + grandTotal;

}


function getInputValue(ticket) {
  const ticketInput = document.getElementById(ticket + '-count');
  const ticketCount = parseInt(ticketInput.value);
  return ticketCount;
}
// book Now button here
const bookBtn=document.getElementById("book-now").addEventListener('click',function(){
  alert("you successfully booked")

})
