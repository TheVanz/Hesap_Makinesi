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
// window ekrana basılan her şeyi dinler ve belirli tuşlara göre işlemler yapar. Bu sayede klavyeden de hesap makinesini kullanabiliriz.
window.addEventListener("keydown", (e) => {
  // 1. Sayıları Kontrol Et (0-9)
  if (e.key >= "0" && e.key <= "9") {
    tusBasildi(e.key);
  }

  // 2. Operatörleri Kontrol Et Array olarak operatörleri tanımladık ve includes ile kontrol ediyoruz.
  if (["+", "-", "*", "/"].includes(e.key)) {
    tusBasildi(e.key);
  }

  // 3. Eşittir veya Enter tuşu (Hesapla)
  if (e.key === "Enter" || e.key === "=") {
    e.preventDefault(); // Sayfanın yenilenmesini engeller
    hesapla();
  }

  // 4. Silme Tuşu (Backspace - Son karakteri siler)
  if (e.key === "Backspace") {
    ekran.value = ekran.value.slice(0, -1);
  }

  // 5. Temizleme Tuşu (Escape - Ekranı sıfırlar)
  if (e.key === "Delete" || e.key === "Escape") {
    ekraniTemizle();
  }

  // 6. Nokta (Ondalık)
  if (e.key === "." || e.key === ",") {
    tusBasildi(".");
  }
});
