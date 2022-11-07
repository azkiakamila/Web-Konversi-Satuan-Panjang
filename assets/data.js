const CACHE_KEY = "riwayat";

 function checkForStorage() {
    return typeof(Storage) !== "undefined"
   }

   function masukanRiwayat(data) {
    if (checkForStorage()) {
        let riwayatData = null;
        if (sessionStorage.getItem(CACHE_KEY) === null) {
            riwayatData = [];
        } else {
           riwayatData = JSON.parse(sessionStorage.getItem(CACHE_KEY));
        }
  
        riwayatData.unshift(data);
  
        if (riwayatData.length > 10) {
            riwayatData.pop();
        }
  
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(riwayatData));
    }
 }

 function tampilRiwayat() {
    if (checkForStorage()) {
        return JSON.parse(sessionStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
 }

 function renderRiwayat() {
    const riwayatData = tampilRiwayat();
    let daftarRiwayat = document.querySelector("#daftarRiwayat");

    daftarRiwayat.innerHTML = "";  
  
    for (let riwayat of riwayatData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + riwayat.km + "</td>";
        row.innerHTML += "<td>" + riwayat.hm + "</td>";
        row.innerHTML += "<td>" + riwayat.dam + "</td>";
        row.innerHTML += "<td>" + riwayat.dm + "</td>";
        row.innerHTML += "<td>" + riwayat.m + "</td>";
        row.innerHTML += "<td>" + riwayat.cm + "</td>";
        row.innerHTML += "<td>" + riwayat.mm + "</td>";  
        daftarRiwayat.appendChild(row);
    }
}