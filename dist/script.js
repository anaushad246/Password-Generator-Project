const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "!@#$%^&*()";

const passwordOutput = document.getElementById("password-output");
const button = document.getElementById("btn");
const inputNumber = document.getElementById("input-number");

const includeUppercase = document.getElementById("uppercase");
const includeNumber = document.getElementById("number");
const includeSymbol = document.getElementById("symbol");

function passwordGenerator() {
    let password = "";
    let chars = lowercase;

    if (includeUppercase.checked) {
        chars += uppercase;
    }
    if (includeNumber.checked) {
        chars += number;
    }
    if (includeSymbol.checked) {
        chars += symbol;
    }
    
    for (let i = 0; i < inputNumber.value; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    passwordOutput.value = password;
}

button.addEventListener("click", passwordGenerator);

// code for copy to clipboard
const button2 = document.getElementById("btn2");
button2.addEventListener("click",function copyToClipboard() {
    const textToCopy = document.getElementById('password-output').textContent;
    navigator.clipboard.writeText(textToCopy);
    alert('Text copied to clipboard!');
  }
)


