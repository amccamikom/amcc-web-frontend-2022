// Membuat fungsi untuk Comsume API
function getData() {
  // Membuat Permintaan (Request)
  fetch("https://63e706fd9a66df97f012ae2b.mockapi.io/api-frontend-amcc/card", {
    method: "GET", // Menentukan metode GET
  })
    // Mengirim Permintaan (Send Request)
    .then(function (response) {})

    // Menerima Respons (Receive Response) dan Mengambil Data (Get Data)
    .then(function (jsonData) {});

    // Penanganan Kesalahan (Error Handling)
    .catch(function (error){});
}

getData();
