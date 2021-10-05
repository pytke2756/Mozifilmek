class Film{

    constructor(nev, rendezo, kiadasiEv) {
        this.nev = nev;
        this.rendezo = rendezo;
        this.kiadasiEv = kiadasiEv;
    }
}

let filmAdatok = [];

function hozzaAd() {
    let nev = document.getElementById('nev').value;
    let rendezo = document.getElementById('rendezo').value;
    let kiadasiEv = document.getElementById('kiadasi_ev').value;

    let obj = new Film(nev, rendezo, kiadasiEv);
    filmAdatok.push(obj);

    document.getElementById('nev').value = "";
    document.getElementById('rendezo').value = "";
    document.getElementById('kiadasi_ev').value = "";
}

document.getElementById('hozzad_ad').addEventListener('click', hozzaAd);
console.log(1);