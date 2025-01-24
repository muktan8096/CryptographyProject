function processMessage() {
    const keys = 'abcdefghijklmnopqrstuvwxyz !';
    const value = keys[keys.length - 1] + keys.slice(0, -1);

    const encryptDict = {};
    const decryptDict = {};

    // Create encryption and decryption dictionaries
    for (let i = 0; i < keys.length; i++) {
        encryptDict[keys[i]] = value[i];
        decryptDict[value[i]] = keys[i];
    }

    const messageInput = document.getElementById('message');
    const message = messageInput.value.toLowerCase();
    const mode = document.getElementById('mode').value;
    let output = "";

    if (mode === 'E') {
        output = [...message].map(char => encryptDict[char] || char).join('');
    } else if (mode === 'D') {
        output = [...message].map(char => decryptDict[char] || char).join('');
    } else {
        output = "Invalid mode selected.";
    }

    // Display the output with first letter capitalized
    document.getElementById('output').textContent = output.charAt(0).toUpperCase() + output.slice(1);

    // Clear the input field after processing
    messageInput.value = "";
}
