// Harga tiap game
const priceList = {
  ml: {
    "50 Diamond": "Rp 5.000",
    "100 Diamond": "Rp 10.000",
    "200 Diamond": "Rp 20.000"
  },
  roblox: {
    "50 Robux": "Rp 6.000",
    "100 Robux": "Rp 12.000",
    "200 Robux": "Rp 24.000"
  },
  genshin: {
    "50 Crystals": "Rp 15.000",
    "100 Crystals": "Rp 30.000",
    "200 Crystals": "Rp 60.000"
  },
  pubg: {
    "50 UC": "Rp 8.000",
    "100 UC": "Rp 16.000",
    "200 UC": "Rp 32.000"
  }
};

// Fungsi umum
function setupForm(formId, selectId, priceId, successId, gameKey, gameName) {
  const form = document.getElementById(formId);
  const nominal = document.getElementById(selectId);
  const price = document.getElementById(priceId);
  const success = document.getElementById(successId);

  if (!form) return;

  nominal.addEventListener("change", () => {
    const val = nominal.value;
    price.textContent = priceList[gameKey][val] ? "Harga: " + priceList[gameKey][val] : "";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = form.querySelector("input").value;
    const item = nominal.value;
    if (id && item) {
      success.textContent = `Top-Up ${gameName} berhasil! ID: ${id}, Item: ${item}`;
      window.open(`https://wa.me/6285608890414?text=Halo, saya mau Top-Up ${gameName}%0AID: ${id}%0AItem: ${item}`, "_blank");
    } else {
      success.textContent = "Mohon isi semua data!";
    }
  });
}

// Setup untuk tiap game
setupForm("mlForm", "mlNominal", "mlPrice", "mlSuccess", "ml", "Mobile Legends");
setupForm("robloxForm", "robloxNominal", "robloxPrice", "robloxSuccess", "roblox", "Roblox");
setupForm("genshinForm", "genshinNominal", "genshinPrice", "genshinSuccess", "genshin", "Genshin Impact");
setupForm("pubgForm", "pubgNominal", "pubgPrice", "pubgSuccess", "pubg", "PUBG");
