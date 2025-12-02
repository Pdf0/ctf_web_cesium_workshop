
function checkFlag(challenge, inputId, resultId) {
    const input = document.getElementById(inputId).value.trim();
    const hash = sha256(input);
    const expected = FLAGS[challenge];
    const result = document.getElementById(resultId);
    if (hash === expected) {
        result.innerHTML = "✔️ Flag correta!";
        result.className = "text-green-400 mt-2";
    } else {
        result.innerHTML = "❌ Flag incorreta!";
        result.className = "text-red-400 mt-2";
    }
}

function sha256(str) {
    return CryptoJS.SHA256(str).toString();
}

const FLAGS = {
    "cryptoA": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "cryptoB": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "webA":    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "webB":    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "reA":     "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "reB":     "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "stegA":   "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "stegB":   "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
};
