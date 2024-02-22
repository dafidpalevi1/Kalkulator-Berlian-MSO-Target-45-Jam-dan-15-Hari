function calculate() {
    var nama = document.getElementById('nama').value;
    var totalBerlian = parseFloat(document.getElementById('totalBerlian').value);
    var hargaPerBerlian = 2.7; // Harga per berlian
  
    if (isNaN(totalBerlian)) {
      alert("Masukkan total berlian yang valid.");
      return;
    }
  
    var hasil = totalBerlian * hargaPerBerlian;
  
    var table = document.getElementById('result');
    var newRow = table.insertRow(-1);
    var cellNama = newRow.insertCell(0);
    var cellHasil = newRow.insertCell(1);
    cellNama.innerHTML = nama;
    cellHasil.innerHTML = formatCurrency(hasil);
}

function formatCurrency(amount) {
    var formattedAmount = Math.round(amount).toLocaleString('id-ID'); // Menghilangkan digit desimal dan membulatkan ke atas
    if (amount == 2.7) { // Jika hasilnya adalah 2.7, tetap tampilkan 2.7
        return "Rp 2.7";
    }
    return "Rp " + formattedAmount;
}
