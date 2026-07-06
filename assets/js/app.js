/* =========================================
   MLBB EVENT TRACKER
   Created for Naila Putri Lapian 💙
========================================= */

// ==========================
// Default Data
// ==========================

let data = JSON.parse(localStorage.getItem("mlbbTracker"));

if (!data) {

    data = {

        event: "Street Fighter",

        targetSkin: "Chun-Li",

        diamond: 487,

        crest: 49,

        token: 0,

        coa: 0,

        budget: 165030,

        targetCrest: 1200

    };

}

// ==========================
// Save
// ==========================

function saveData(){

    localStorage.setItem(

        "mlbbTracker",

        JSON.stringify(data)

    );

}

saveData();

// ==========================
// Update Dashboard
// ==========================

function updateDashboard(){

    if(document.getElementById("diamond")){

        document.getElementById("diamond").innerHTML=data.diamond;

    }

    if(document.getElementById("crest")){

        document.getElementById("crest").innerHTML=data.crest;

    }

    if(document.getElementById("token")){

        document.getElementById("token").innerHTML=data.token;

    }

    if(document.getElementById("coa")){

        document.getElementById("coa").innerHTML=data.coa;

    }

    if(document.getElementById("crestNow")){

        document.getElementById("crestNow").innerHTML=data.crest;

    }

    if(document.getElementById("progress")){

        let persen =

        (data.crest/data.targetCrest)*100;

        document.getElementById("progress").style.width=persen+"%";

    }

}

updateDashboard();

// ==========================
// Countdown
// ==========================

function countdown(){

    let end = new Date("2026-08-15");

    let now = new Date();

    let selisih = end-now;

    let hari = Math.floor(

        selisih/

        (1000*60*60*24)

    );

    if(document.getElementById("countdown")){

        document.getElementById("countdown").innerHTML=

        hari+" Hari Lagi";

    }

}

countdown();

// ==========================
// Diamond
// ==========================

function tambahDiamond(jumlah){

    data.diamond+=jumlah;

    saveData();

    updateDashboard();

}

function kurangDiamond(jumlah){

    data.diamond-=jumlah;

    saveData();

    updateDashboard();

}

// ==========================
// Crest
// ==========================

function tambahCrest(jumlah){

    data.crest+=jumlah;

    saveData();

    updateDashboard();

}

// ==========================
// Token
// ==========================

function tambahToken(jumlah){

    data.token+=jumlah;

    saveData();

    updateDashboard();

}

// ==========================
// CoA
// ==========================

function tambahCoA(jumlah){

    data.coa+=jumlah;

    saveData();

    updateDashboard();

}
