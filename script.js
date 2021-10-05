class Film{

    constructor(nev, rendezo, kiadasiEv) {
        this.nev = nev;
        this.rendezo = rendezo;
        this.kiadasiEv = kiadasiEv;
    }
}

let filmAdatok = [];

function hozzaAd() { //listázás egyben a hozzáadással
    let nev = document.getElementById('nev').value;
    let rendezo = document.getElementById('rendezo').value;
    let kiadasiEv = document.getElementById('kiadasi_ev').value;

    if (nev == "" || rendezo == "" || kiadasiEv == "") {
        alert("Minden mezőt kötelező kitölteni!");
    }
    else{
        let obj = new Film(nev, rendezo, kiadasiEv);
        filmAdatok.push(obj);
        //console.log(filmAdatok);

        document.getElementById('nev').value = "";
        document.getElementById('rendezo').value = "";
        document.getElementById('kiadasi_ev').value = "";

        listazas();
    }
}

function listazas() {
    let filmAdatokHossz = filmAdatok.length;
        let adatokString = "";
        for (let i = 0; i < filmAdatokHossz; i++) {
                  adatokString += "<tr>";
                  adatokString += "<td>" + filmAdatok[i].nev + "</td>";
                  adatokString += "<td>" + filmAdatok[i].rendezo + "</td>";
                  adatokString += "<td>" + filmAdatok[i].kiadasiEv + "</td>";
                  adatokString += "</tr>";
        }
        document.getElementById("adatok").innerHTML = adatokString;
}


function listazasHiba() {
    alert("Egybe lettem vonva a hozáadással :(");
}
document.getElementById('hozzad_ad').addEventListener('click', hozzaAd);
document.getElementById('listazas').addEventListener('click', listazasHiba); 
