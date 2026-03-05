// Hesap Makinesi
const display = document.getElementById("display");

function tusBasildi(input) {
  display.value += input;
}

function ekraniTemizle() {
  display.value = "";
}

function hesapla() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Hata";
  }
}
