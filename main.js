function convertCurrency(currency, ToCurrency, amount) {
  let input;

  if (currency === "BRL") {
    input = 0.18;
  } else if (currency === "EUR") {
    input = 1;
  } else if (currency === "GBP") {
    input = 1.13;
  } else if (currency === "JPY") {
    input = 0.0071;
  } else if (currency === "MAD") {
    input = 0.091;
  } else if (currency === "NZD") {
    input = 0.6;
  } else if (currency === "USD") {
    input = 0.92;
  } else {
    return NaN;
  }

  let output;
  if (ToCurrency === "BRL") {
    output = 0.18;
  } else if (ToCurrency === "EUR") {
    output = 1;
  } else if (ToCurrency === "GBP") {
    output = 1.13;
  } else if (ToCurrency === "JPY") {
    output = 0.0071;
  } else if (ToCurrency === "MAD") {
    output = 0.091;
  } else if (ToCurrency === "NZD") {
    output = 0.6;
  } else if (ToCurrency === "USD") {
    output = 0.92;
  } else {
    return NaN;
  }

  return (amount * output) / input;
}

// const form = document.querySelector("form");
// const currencySelect = document.querySelector("#currency");
// const ToCurrencySelect = document.querySelector("#ToCurrency");
// const amountInput = document.querySelector("#amount");
// const submitBtn = document.querySelector("#submitBtn");
// const result = document.querySelector("#result");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const currency = currencySelect.value;
//   const ToCurrency = ToCurrencySelect.value;
//   const amount = parseFloat(amountInput.value);

//   const convertedAmount = convertCurrency(currency, ToCurrency, amount);
//   if (isNaN(convertedAmount)) {
//     result.textContent = "Result: Invalid currency code.";
//   } else {
//     result.textContent = `Result: ${convertedAmount.toFixed(2)}`;
//   }
// });

console.log(convertCurrency("GBP", "EUR", 2));

console.log(convertCurrency("EUR", "MAD", 10));

console.log(convertCurrency("MAD", "JPY", 15));
