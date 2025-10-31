function calculateSIP() {
    //
    let P = document.getElementById("P").value;
    let r = document.getElementById("r").value;
    let n = document.getElementById("n").value;

    let i = r / 100 / 12;
    let FV = P * (((1 + i) ** n - 1) / i) * (1 + i);
    let TotalInvested = P * n;
    let TotalReturn = FV - TotalInvested;

    document.getElementById("Result").textContent =
        `Invested Rs: ${TotalInvested.toFixed(2)} , Returns: Rs ${TotalReturn.toFixed(2)}, Final Value: ${FV.toFixed(2)}`;
}


document.getElementById("Calculate").onclick = calculateSIP;
