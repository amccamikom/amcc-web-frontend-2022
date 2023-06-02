// Membuat fungsi untuk Comsume API
function getData() {
  // Membuat Permintaan (Request)
  fetch("https://63e706fd9a66df97f012ae2b.mockapi.io/api-frontend-amcc/card", {
    method: "GET", // Menentukan metode GET
  })
    // Mengirim Permintaan (Send Request)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json(); // Mengonversi respons menjadi JSON
    })

    // Menerima Respons (Receive Response) dan Mengambil Data (Get Data)
    .then(function (jsonData) {
      const container = document.getElementById("contentCardQuestion");
      container.innerHTML = "";

      // Menampilkan Data (Display Data)
      jsonData.forEach(function (listQuestion) {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card rounded shadow border-0 p-4 mb-5";

        const innerHtml = `
        <div class="row gap-3 gap-sm-0">
          <div class="col-sm-3 order-sm-1 order-2">
            <img src="${listQuestion.gambar_card}" alt="" class="img-fluid">
          </div>
          <div class="col-sm-9 order-sm-2 order-1">
            <div class="d-flex gap-2">
              <img src="assets/image/photoProfile.png" alt="" width="37" height="37">
              <div>
                <p class="fw-medium">${listQuestion.nama}</p>
                <p class="text-secondary username">@${listQuestion.username}</p>
              </div>
            </div>
            <p class="fs-4 fw-bold">${listQuestion.judul}</p>
            <p class="fs-5 text-secondary mb-sm-1 mb-2">${listQuestion.sub_judul}</p>
            <div class="d-flex flex-sm-row flex-column justify-content-between gap-3">
              <div class="d-flex gap-2">
                <p class="rounded text-ungu bg-pink px-2 py-2 py-sm-1">#${listQuestion.kategori_satu}</p>
                <p class="rounded text-ungu bg-pink px-2 py-2 py-sm-1">#${listQuestion.kategori_dua}</p>
                <p class="rounded text-ungu bg-pink px-2 py-2 py-sm-1">#${listQuestion.kategori_tiga}</p>
              </div>
              <div class="d-flex gap-4">
                <div class="d-flex gap-2 align-items-center bg-pink rounded px-2">
                  <img src="assets/image/comment.svg" alt="" width="21">
                  <p class="text-ungu py-2 py-sm-1">${listQuestion.jumlah_komentar} <span class="text-secondary">Komentar</span></p>
                </div>
                <div class="d-flex gap-2 align-items-center bg-pink rounded px-2">
                  <img src="assets/image/like.svg" alt="" width="21">
                  <p class="text-ungu py-2 py-sm-1">${listQuestion.jumlah_like} <span class="text-secondary">Like</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
        cardDiv.innerHTML = innerHtml;
        container.appendChild(cardDiv);
      });
    })

    // Penanganan Kesalahan (Error Handling)
    .catch(function (error) {
      console.error(error);
    });
}


getData();




