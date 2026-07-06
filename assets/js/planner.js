const planner = [

{
tanggal:"6 Juli",
tugas:"Draw Harian (25 DM)"
},

{
tanggal:"7 Juli",
tugas:"Draw Harian (25 DM)"
},

{
tanggal:"8 Juli",
tugas:"Draw Harian (25 DM)"
},

{
tanggal:"9 Juli",
tugas:"Draw Harian (25 DM)"
},

{
tanggal:"10 Juli",
tugas:"Top Up 3 WDP (+260 DM)"
},

{
tanggal:"10 Juli",
tugas:"Draw Harian"
},

{
tanggal:"11 Juli",
tugas:"Draw Harian"
},

{
tanggal:"12 Juli",
tugas:"Draw Harian"
},

{
tanggal:"13 Juli",
tugas:"Draw Harian + Draw 3x + Klaim 30 Token"
},

{
tanggal:"17 Juli",
tugas:"Top Up 3 WDP (+260 DM)"
},

{
tanggal:"20 Juli",
tugas:"Draw 3x + Klaim 29 Token"
}

];

const plannerList=document.getElementById("plannerList");

planner.forEach((item,index)=>{

const selesai=
JSON.parse(localStorage.getItem("planner"+index))||false;

plannerList.innerHTML+=`

<div class="task-card">

<div class="task-info">

<h5>${item.tugas}</h5>

<p>${item.tanggal}</p>

</div>

<input
type="checkbox"
${selesai?"checked":""}
onchange="toggleTask(${index},this.checked)">

</div>

`;

});

function toggleTask(index,status){

localStorage.setItem(

"planner"+index,

JSON.stringify(status)

);

}
