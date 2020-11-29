let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', function() {
    header.classList.toggle('menu-open');
})


function datumok() {
    let erkezes = document.querySelector("#check-in").value;
    let tavozas = document.querySelector("#check-out").value;
    let hotelv = document.getElementById("hotelvalaszt").value;
    let felnottekszama = document.getElementById("adults").value;
    let gyerekekszama = document.getElementById("children").value;
    let szobaara;
    let felnottar = 4000;
    let gyerekar = 2000;
    let teljesvege;
    let szobaarv2;
    if (!erkezes) {
        window.alert("Kérjük adja meg a bejelentkezés dátumát!")
    } else if (!tavozas) {
        window.alert("Kérjük adja meg a kijelentkezés dátumát!")
    } else {
        erkezes = Date.parse(erkezes);
        tavozas = Date.parse(tavozas);

        if (erkezes >= tavozas) {
            window.alert("Próbáljon már meg később kijelentkezni mint bejelentkezni, legyen szíves! Jó kössz!");
        } else {
            let milliseconds = (tavozas - erkezes);
            let days = (milliseconds / (1000 * 60 * 60 * 24));


            if (hotelv == 0) {
                szobaara = 10000;
                if (felnottekszama == 0) {
                    szobaarv2 = gyerekar * gyerekekszama;
                    teljesvege = szobaara + (szobaarv2 * days);
                    teljesvege = teljesvege.toString();
                    document.getElementById("vegosszeg").innerHTML = teljesvege + " Ft a teljes költséged.";
                } else if (gyerekekszama == 0) {
                    szobaarv2 = felnottar * felnottekszama;
                    teljesvege = szobaara + (szobaarv2 * days);
                    teljesvege = teljesvege.toString();
                    document.getElementById("vegosszeg").innerHTML = teljesvege + " Ft a teljes költséged.";
                } else {
                    let szobaarv3 = gyerekar * gyerekekszama;
                    szobaarv2 = felnottar * felnottekszama;
                    teljesvege = (szobaarv3 + szobaarv2 + szobaara) * days;
                    document.getElementById("vegosszeg").innerHTML = teljesvege + " Ft a teljes költséged.";
                }
            } else {
                szobaara = 1000;
                if (felnottekszama == 0) {
                    szobaarv2 = gyerekar * gyerekekszama;
                    teljesvege = szobaara + (szobaarv2 * days);
                    teljesvege = teljesvege.toString();
                    document.getElementById("vegosszeg").innerHTML = teljesvege + " Ft a teljes költséged.";
                } else if (gyerekekszama == 0) {
                    szobaarv2 = felnottar * felnottekszama;
                    teljesvege = szobaara + (szobaarv2 * days);
                    teljesvege = teljesvege.toString();
                    document.getElementById("vegosszeg").innerHTML = teljesvege + " Ft a teljes költséged.";
                } else {
                    let szobaarv3 = gyerekar * gyerekekszama;
                    szobaarv2 = felnottar * felnottekszama;
                    teljesvege = (szobaarv3 + szobaarv2 + szobaara) * days;
                    document.getElementById("vegosszeg").innerHTML = teljesvege + " Ft a teljes költséged.";
                }
            }
        }
    }
}