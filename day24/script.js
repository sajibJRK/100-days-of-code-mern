const rates = {
  USD: { BDT: 110 },
  BDT: { USD: 1 / 110 },
};

const convertCurrency = () => {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (isNaN(amount)) {
    document.getElementById("result").innerText = "Enter a valid amount.";
    return;
  }

  const rate = rates[from][to];
  const converted = amount * rate;

  document.getElementById("result").innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
};
