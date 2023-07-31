const btn = document.querySelector("button");
const colorText = document.querySelector("#colorText");

function generateRandomHexColor() {
  let hexDigits = '0123456789ABCDEF'
  let hexColor = "#";

  for (let i = 0; i < 6; i++){
    let randomIndex = Math.floor(Math.random() * hexDigits.length);
    hexColor += hexDigits[randomIndex];
  }
  return hexColor;
}

btn.addEventListener('click', () => {
  randomColor = generateRandomHexColor();
  colorText.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
})