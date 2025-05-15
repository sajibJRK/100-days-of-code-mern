function generator() {
    let start = Number(document.getElementById('start').value);
    let end = Number(document.getElementById('end').value);

    let even = [];
    let odd = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            even.push(i);
        }
        else {
            odd.push(i);
        }
    }
    document.getElementById('EvenList').textContent = even.join(',');
    document.getElementById('OddList').textContent = odd.join(',');
}