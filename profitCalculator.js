function validateForm() {
    let gasPrice = document.forms['form1']['gas-price'].value;
    let kmL = document.forms['form1']['km/l'].value;
    let commission = document.forms['form1']['commission'].value;
    let distance = document.forms['form1']['distance'].value;

    let pricePerKm = gasPrice / kmL; //hvor meget har jeg så betalt for hver km jeg kan køre
    pricePerKm = pricePerKm.toFixed(2);

    let gasForDelivery = (distance * pricePerKm); //hvor meget skal jeg så betale for leveringen
    gasForDelivery = gasForDelivery.toFixed(2);

    let salaryPerKm = (commission / distance);
    salaryPerKm = salaryPerKm.toFixed(2);

    let profitPerKm = (salaryPerKm - gasForDelivery);
    profitPerKm = profitPerKm.toFixed(2);

    if (profitPerKm > pricePerKm) {
        alert('Differencen er ' + profitPerKm + ' til din fordel.')
    } else {
        alert('Differencen er ' + profitPerKm);
    }
    
    gasPrice = 0;
    kmL = 0;
    commission = 0;
    distance = 0;
    profitPerKm = 0;
    pricePerKm = 0;
    salaryPerKm = 0;
    gasCost = 0;
    distanceForFilledGas = 0;
    gasForDelivery = 0;

}