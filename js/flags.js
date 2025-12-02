
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
    "crypto1": "fc76b98e73dabbf2b306b188e5be64f4353b8fdb3f1a4f9b9585aad0fb631a95",
    "crypto2": "40c0d6be1bda85bcf15af0ba9c8c7ce81f220e66d3e4f9fcd6a8b27f6e750f72",
    "web1":    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "web2":    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "re1":     "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "re2":     "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "steg1":   "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "steg2":   "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
};
