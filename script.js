// ================================
// MOBILE MENU
// ================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Tutup menu setelah link diklik

document
    .querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });




// ================================
// CALCULATOR
// ================================

function calculateCost() {

    const jamaah =
        parseInt(
            document.getElementById("jamaah").value
        ) || 1;


    const makkahDays =
        parseInt(
            document.getElementById("makkahDays").value
        );


    const madinahDays =
        parseInt(
            document.getElementById("madinahDays").value
        );


    const transport =
        parseInt(
            document.getElementById("transport").value
        );


    // Harga contoh
    // Nantinya bisa disesuaikan

    const visaPerPerson = 2600000;

    const makkahPerPersonNight = 450000;

    const madinahPerPersonNight = 400000;

    const handlingPerPerson = 350000;


    const visa =
        visaPerPerson * jamaah;


    const makkah =
        makkahPerPersonNight *
        makkahDays *
        jamaah;


    const madinah =
        madinahPerPersonNight *
        madinahDays *
        jamaah;


    const handling =
        handlingPerPerson *
        jamaah;


    const total =
        visa +
        makkah +
        madinah +
        handling +
        transport;


    const formattedTotal =
        new Intl.NumberFormat(
            "id-ID",
            {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0
            }
        ).format(total);


    document.getElementById("totalCost")
        .textContent = formattedTotal;

}



// Jalankan otomatis pertama kali

calculateCost();




// ================================
// NAVBAR SHADOW ON SCROLL
// ================================

window.addEventListener("scroll", () => {

    const navbar =
        document.getElementById("navbar");


    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.07)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

});
