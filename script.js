const scamKeywords = [
    "free",
    "winner",
    "urgent",
    "limited time offer",
    "click here",
    "congratulations",
    "claim your prize",
    "money transfer",
    "bank account",
    "password",
    "lottery",
    "prize",
    "investment",
    "risk-free"
];

document.getElementById('scan').addEventListener('click', function() {
    const text = document.getElementById('text').value.toLowerCase();
    let scamFound = false;

    for (const keyword of scamKeywords) {
        if (text.includes(keyword)) {
            scamFound = true;
            break;
        }
    }

    const resultElement = document.getElementById('result');
    if (scamFound) {
        resultElement.innerHTML = "⚠️ Scam indicators found! Please be cautious.";
        resultElement.style.color = "red";
    } else {
        resultElement.innerHTML = "✅ No scam indicators detected.";
        resultElement.style.color = "green";
    }
});
