let angkaTampil ='0';
let satuanMeter = null;

function perbaruiTampilan() {
    document.querySelector("#angkaTampil").innerText = angkaTampil;
 }
 function reset() {
    angkaTampil = '0';
    satuanMeter = null;
    document.querySelector("#nilaiKM").innerText = 0;
    document.querySelector("#nilaiHM").innerText = 0;
    document.querySelector("#nilaiDAM").innerText = 0;
    document.querySelector("#nilaiDM").innerText = 0;
    document.querySelector("#nilaiM").innerText = 0;
    document.querySelector("#nilaiCM").innerText = 0;
    document.querySelector("#nilaiMM").innerText = 0;
    document.querySelector("#tipeSatuan").innerText = satuanMeter;
 }
 function masukanAngka(Angka) {
        if (angkaTampil === '0') {
            angkaTampil = Angka;
        } else {
            angkaTampil += Angka;
        }
    }

     function runKonverter() {
        let km, hm, dam, dm, m, cm, mm;
        if (satuanMeter === "KM") {
            km  = parseFloat(angkaTampil);
            hm  = km * 10;
            dam = hm * 10;
            dm = dam * 10;
            m = dm * 10;
            cm = m * 10;
            mm = cm * 10;
            tipe="KM"
        } else if(satuanMeter === "HM") {
            hm  = parseFloat(angkaTampil)
            km  = hm / 10;
            dam = hm * 10;
            dm = dam * 10;
            m = dm * 10;
            cm = m * 10;
            mm = cm * 10;
        }else if(satuanMeter === "DAM") {
            dam = parseFloat(angkaTampil);
            hm  = dam / 10;
            km  = hm / 10;
            dm = dam * 10;
            m = dm * 10;
            cm = m * 10;
            mm = cm * 10;
        }else if(satuanMeter === "DM") {
            dm = parseFloat(angkaTampil);
            dam = dm / 10;
            hm  = dam / 10;
            km  = hm / 10;
            m = dm * 10;
            cm = m * 10;
            mm = cm * 10;
        }else if(satuanMeter === "M") {
            m = parseFloat(angkaTampil);
            dm = m / 10
            dam = dm / 10;
            hm  = dam / 10;
            km  = hm / 10;
            cm = m * 10;
            mm = cm * 10;            
        }else if(satuanMeter === "CM") {
            cm = parseFloat(angkaTampil);
            m = cm / 10;
            dm = m / 10
            dam = dm / 10;
            hm  = dam / 10;
            km  = hm / 10;
            mm = cm * 10;
        }else if (satuanMeter === "MM") {
            mm = parseFloat(angkaTampil);
            cm = mm / 10;
            m = cm / 10;
            dm = m / 10
            dam = dm / 10;
            hm  = dam / 10;
            km  = hm / 10;    
        }
        document.querySelector("#nilaiKM").innerText = km;
        document.querySelector("#nilaiHM").innerText = hm;
        document.querySelector("#nilaiDAM").innerText = dam;
        document.querySelector("#nilaiDM").innerText = dm;
        document.querySelector("#nilaiM").innerText = m;
        document.querySelector("#nilaiCM").innerText = cm;
        document.querySelector("#nilaiMM").innerText = mm
        document.querySelector("#tipeSatuan").innerText = satuanMeter;

        const riwayat = {
            km: km,
            hm: hm,
            dam: dam,
            dm: dm,
            m: m,
            cm: cm,
            mm: mm
        }
        masukanRiwayat(riwayat);
        renderRiwayat();
    }

     const buttons = document.querySelectorAll(".button");
     for (let button of buttons) {
        button.addEventListener('click', function(event) {
      
            const target = event.target;
      
            if (target.classList.contains('Reset')) {
                reset();
                perbaruiTampilan();
                return;
            }
      
            if (target.classList.contains('KM')) {
                satuanMeter = "KM";
                runKonverter();
                return;
            }
      
            if (target.classList.contains('HM')) {
                satuanMeter = "HM";
                runKonverter();
                return;
            }
            if (target.classList.contains('DAM')) {
                satuanMeter = "DAM";
                runKonverter();
                return;
            }
            if (target.classList.contains('DM')) {
                satuanMeter = "DM";
                runKonverter();
                return;
            }
            if (target.classList.contains('M')) {
                satuanMeter = "M";
                runKonverter();
                return;
            }
            if (target.classList.contains('CM')) {
                satuanMeter = "CM";
                runKonverter();
                return;
            }

            if (target.classList.contains('MM')) {
                satuanMeter = "MM";
                runKonverter();
                return;
            }  
            masukanAngka(target.innerText);
            perbaruiTampilan();
        });
     }
    

     
    