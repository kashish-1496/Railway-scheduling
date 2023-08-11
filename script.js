const trainTableBody = document.getElementById('trainTableBody');

function addTrain() {
    const trainNameInput = document.getElementById('trainName');
    const trainNumberInput = document.getElementById('trainNumber');
    const trainArrivalInput = document.getElementById('trainArrival');
    const trainDepartureInput = document.getElementById('trainDeparture');
    const SourceInput = document.getElementById('Source');
    const DestinationInput = document.getElementById('Destination');
    const seatAvailabilityInput = document.getElementById('seatAvailability');
    const priceInput = document.getElementById('price');

    const trainName = trainNameInput.value;
    const trainNumber = trainNumberInput.value;
    const trainArrival = trainArrivalInput.value;
    const trainDeparture = trainDepartureInput.value;
    const seatAvailability = seatAvailabilityInput.value;
    const Source = SourceInput.value;
    const Destination = DestinationInput.value;
    const price = parseFloat(priceInput.value);

    if (!trainNumber || isNaN(price) ||!trainArrival || !trainDeparture || (trainArrival > trainDeparture)) {
        alert('Please fill all the train details correctly.');
        return;
    }

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${trainName}</td>
        <td>${trainNumber}</td>
        <td>${trainArrival}</td>
        <td>${trainDeparture}</td>
        <td>${Source}</td>
        <td>${seatAvailability}</td>
        <td>${Destination}</td> 
        <td>${price}</td>
        `;

    trainTableBody.appendChild(newRow);
    sortTableByPrice();
    clearFormInputs();
}

function sortTableByPrice() {
    const rows = Array.from(trainTableBody.querySelectorAll('tr'));
    rows.sort((row1, row2) => {
        const price1 = parseFloat(row1.cells[3].innerText);
        const price2 = parseFloat(row2.cells[3].innerText);
        return price1 - price2;
    });

    trainTableBody.innerHTML = ''; // Clear the existing rows

    for (const row of rows) {
        trainTableBody.appendChild(row);
    }
}

function clearFormInputs() {
    document.getElementById('trainName').value = '';
    document.getElementById('trainNumber').value = '';
    document.getElementById('trainArrival').value = '';
    document.getElementById('trainDeparture').value = '';
    document.getElementById('Source').value = '';
    document.getElementById('Destination').value = '';
    document.getElementById('seatAvailability').value = '';
    document.getElementById('price').value = '';
}

