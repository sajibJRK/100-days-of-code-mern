
function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}


const convertToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
};

function convertTemp() {
    const input = document.getElementById("tempInput").value;
    const type = document.getElementById("conversionType").value;
    const result = document.getElementById("result");

    if (type === "toFahrenheit") {
        const fahrenheit = convertToFahrenheit(Number(input));
        result.innerText = `${input}°C = ${fahrenheit.toFixed(2)}°F`;
    } else {
        const celsius = convertToCelsius(Number(input));
        result.innerText = `${input}°F = ${celsius.toFixed(2)}°C`;
    }
}
