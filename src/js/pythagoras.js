const sideAInput = document.getElementById("sideA");
const sideBInput = document.getElementById("sideB");
const calcBtn = document.getElementById("calcBtn");
const errorMsg = document.getElementById("errorMsg");
const resultBox = document.getElementById("resultBox");
const resultValue = document.getElementById("resultValue");

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.classList.remove("hidden");
  resultBox.classList.add("hidden");
}

function hideError() {
  errorMsg.classList.add("hidden");
  errorMsg.textContent = "";
}

function calculateHypotenuse() {
  const a = parseFloat(sideAInput.value);
  const b = parseFloat(sideBInput.value);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    showError("Isi kedua sisi (A dan B) dengan angka terlebih dahulu.");
    return;
  }

  if (a <= 0 || b <= 0) {
    showError("Panjang sisi harus lebih besar dari 0.");
    return;
  }

  const c = Math.sqrt(a * a + b * b);

  hideError();
  resultValue.textContent = `${c.toFixed(2)}`;
  resultBox.classList.remove("hidden");
}

calcBtn.addEventListener("click", calculateHypotenuse);

[sideAInput, sideBInput].forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      calculateHypotenuse();
    }
  });
});
