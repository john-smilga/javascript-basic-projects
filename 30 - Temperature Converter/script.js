function Convert() {

    let degreeInput = document.getElementById('degreeInput').value;
    let scaleInput = document.getElementById('ScaleInput').value;

    if (degreeInput === '') {
        return
    }

    degreeInput = parseFloat(degreeInput);

    if (scaleInput.toLowerCase() === 'fehrenheit') {
        let fehrenheit = (degreeInput * (9 / 5) + 32);
        document.querySelector('.showTemperature').textContent = `${fehrenheit.toFixed(1)}\u00B0F`;
    } else {
        let celsuis = (degreeInput - 32) * (5 / 9);
        document.querySelector('.showTemperature').textContent = `${celsuis.toFixed(1)}\u00B0C`;
    }
    document.getElementById('degreeInput').value = '';
}
