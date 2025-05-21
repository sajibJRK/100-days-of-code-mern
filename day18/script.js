function calculate(){
    const bill = Number(document.getElementById('bill').value);
    const tipParsent = Number(document.getElementById('tip').value);

    const tipAmount = (bill * tipParsent)/100;
    const total = (tipAmount + bill);
    document.getElementById('tip-result').innerText = "tip Amount : " + tipAmount ;
    document.getElementById('total-result').innerText = "total bill : " + total 

}