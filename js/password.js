const lengthInput = document.getElementById("length");
const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");


const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+";

function getRandom(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function generatePassword(length) {
  let password = "";


  password += getRandom(upper);
  password += getRandom(lower);
  password += getRandom(numbers);
  password += getRandom(symbols);

  const all = upper + lower + numbers + symbols;

  for (let i = password.length; i < length; i++) {
    password += getRandom(all);
  }


  password = password.split("").sort(() => Math.random() - 0.5).join("");

  return password;
}

generateBtn.addEventListener("click", () => {
  let length = parseInt(lengthInput.value);

  if (length < 12) length = 12;
  if (length > 50) length = 50;

  const password = generatePassword(length);
  result.textContent = password;
});