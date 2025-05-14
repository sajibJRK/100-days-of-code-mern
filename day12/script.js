function checkage() {

    const birtDate = new Date(document.getElementById("birth-date").value)
    const currentDate = new Date();
    const result = document.getElementById("result");

    let year = currentDate.getFullYear() - birtDate.getFullYear();
    let month = currentDate.getMonth() - birtDate.getMonth();
    let day = currentDate.getDate() - birtDate.getDate();

    if (day < 0) {
        month--;
        day += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

    }
    if (month < 0) {
        year--;
        month += 12;
    }


    result.innerText = `You are ${year} years, ${month} months, and ${day} days old.`;

}

