// document.addEventListener("DOMContentLoaded", function () {
//     // Ubah teks berjalan setiap beberapa detik
//     const runningText = document.getElementById("running-text");
//     const messages = [
//         "Selamat datang di halaman link Rin Vanestia!",
//         "Dukung Rin Vanestia dengan berdonasi!",
//         "Ikuti sosial media Rin Vanestia!",
//         "Bergabunglah di Discord Server Rin Vanestia!"
//     ];
//     let index = 0;

//     setInterval(() => {
//         index = (index + 1) % messages.length;
//         runningText.textContent = messages[index];
//     }, 3000);
// });

document.addEventListener("DOMContentLoaded", function() {
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3fa4ff
      })
});
