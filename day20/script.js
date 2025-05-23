const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question('enter day number (1-7): ', (input) => {

    let day = parseInt(input);

    let dayName;

    if (day < 1 || day > 7) {
        console.log("invalid number");
    } else {

        switch (day) {
            case 1:
                dayName = "Saturday";
                break;
            case 2:
                dayName = "sunday";
                break;
            case 3:
                dayName = "monday";
                break;
            case 4:
                dayName = "Tuesday";
                break;
            case 5:
                dayName = "wednesday";
                break;
            case 6:
                dayName = "thursday";
                break;
            case 7:
                dayName = "friday";
                break;
        }
        console.log(dayName);
        r1.close();
    }

})
