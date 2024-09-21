function convertTemperature() {
    let tempInput = document.getElementById('tempInput').value;
    let tempUnit = document.getElementById('tempUnit').value;
    let convertTo = document.getElementById('convertTo').value;
    let result = document.getElementById('result');

    // Validate that input is a number
    if (isNaN(tempInput) || tempInput === '') {
        result.textContent = "Please enter a valid number.";
        return;
    }

    // Convert the input to a number
    tempInput = parseFloat(tempInput);

    let convertedTemp;

    // Celsius to Fahrenheit/Kelvin
    if (tempUnit === 'Celsius') {
        if (convertTo === 'Fahrenheit') {
            convertedTemp = (tempInput * 9/5) + 32;
        } else if (convertTo === 'Kelvin') {
            convertedTemp = tempInput + 273.15;
        } else {
            convertedTemp = tempInput; // Celsius to Celsius
        }
    }

    // Fahrenheit to Celsius/Kelvin
    else if (tempUnit === 'Fahrenheit') {
        if (convertTo === 'Celsius') {
            convertedTemp = (tempInput - 32) * 5/9;
        } else if (convertTo === 'Kelvin') {
            convertedTemp = ((tempInput - 32) * 5/9) + 273.15;
        } else {
            convertedTemp = tempInput; // Fahrenheit to Fahrenheit
        }
    }

    // Kelvin to Celsius/Fahrenheit
    else if (tempUnit === 'Kelvin') {
        if (convertTo === 'Celsius') {
            convertedTemp = tempInput - 273.15;
        } else if (convertTo === 'Fahrenheit') {
            convertedTemp = ((tempInput - 273.15) * 9/5) + 32;
        } else {
            convertedTemp = tempInput; // Kelvin to Kelvin
        }
    }

    // Display the result with the correct unit
    result.textContent = `${convertedTemp.toFixed(2)}° ${convertTo}`;
}
