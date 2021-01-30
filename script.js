
const bookingForm = document.getElementsByClassName('booking-form');
const bookedForm = document.getElementsByClassName('booked-form');
const increment = document.getElementsByClassName('increment');
const decrement = document.getElementsByClassName('decrement');
const ticketInput = document.getElementsByClassName('ticketInput');
const subTotal = document.getElementsByClassName('subTotal');
const vat = document.getElementsByClassName('vat');
const total = document.getElementsByClassName('total');
const submit = document.getElementsByClassName('submit');
const input = document.getElementsByClassName('input');
const inputResult = document.getElementsByClassName('inputResult')
const errorMsg = document.getElementsByClassName('errorMsg');


function ticketsPrice(ticketInput, ticketPrice, eventClass) {
    var ticket = 0;
    for (let i = 0; i < eventClass.length; i++) {
        const math = eventClass[i].innerText;
        eventClass[i].addEventListener('click', () => {
            if (math == "+" ? ticket >= 0 : ticket > 0) {
                ticket = math == "+" ? ticket + 1 : ticket - 1;
                ticketInput.value = ticket;
                const subTotalInnerText = subTotal[0].innerText;
                const parsesubTotalInnerText = parseFloat(subTotalInnerText);
                const subtotalPrice = math == "+" ? parsesubTotalInnerText + ticketPrice : parsesubTotalInnerText - ticketPrice;
                const totalVat = (subtotalPrice / 100) * 10;
                const totalPrice = math == "+" ? subtotalPrice + totalVat : subtotalPrice - totalVat;
                subTotal[0].innerText = subtotalPrice;
                vat[0].innerText = totalVat;
                total[0].innerText = totalPrice;
            }
        });
    }
}
ticketsPrice(ticketInput[0], 150, [increment[0], decrement[0]]);
ticketsPrice(ticketInput[1], 100, [increment[1], decrement[1]]);

submit[0].addEventListener('click', (e) => {
    e.preventDefault();
    var msg = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i].value === "") {
            msg = errorMsg[i].innerText = "please fill this fields";
        }
    }
    if (msg == "") {
        bookingForm[0].style = "display:none";
        bookedForm[0].style = "display:block";
        for (let i = 0; i < inputResult.length; i++) {
            if (i < 6) {
                inputResult[i].innerText = input[i].value;
            } else {
                inputResult[i].innerText = input[i].innerText;
            }
        }
    }
})

















