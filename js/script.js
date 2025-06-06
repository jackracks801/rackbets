function americanOddsToImpliedProbability(odds) {
    if (odds < 0) {
        return Math.abs(odds) / (Math.abs(odds) + 100);
    } else {
        return 100 / (odds + 100);
    }
}

function calculatePayout(odds, betAmount) {
    let profit;
    if (odds < 0) {
        profit = betAmount * (100 / Math.abs(odds));
    } else {
        profit = betAmount * (odds / 100);
    }
    return {
        totalReturn: betAmount + profit,
        profit: profit
    };
}

function calculate() {
    const odds = parseFloat(document.getElementById('odds').value);
    const betAmount = parseFloat(document.getElementById('betAmount').value);

    if (isNaN(odds) || isNaN(betAmount) || betAmount <= 0) {
        alert("Please enter valid odds and bet amount.");
        return;
    }

    const impliedProb = americanOddsToImpliedProbability(odds) * 100;
    const payout = calculatePayout(odds, betAmount);

    document.getElementById('probability').textContent = impliedProb.toFixed(2) + '%';
    document.getElementById('totalReturn').textContent = '$' + payout.totalReturn.toFixed(2);
    document.getElementById('profit').textContent = '$' + payout.profit.toFixed(2);

    document.getElementById('resultsTable').style.display = 'table';
}
