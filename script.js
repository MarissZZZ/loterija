const vardi = ['Līga Kokle', 'Lauris Reiniks', 'Pīters Pārkers', 'Anna Failora', 'James Bonds'];
const balvas = ['Thanos laika roka', 'Lavas lampa', 'Elektriskā tējkanna', 'Tesla', 'Zābaki'];
const naudaKopa = 1000000;
let uzvaretajuSkaits = 3;
let rindas = document.querySelector('.rindas'); // pievieno mainīgo

// Math.random=Math.random()*10;

for (let i = 0; i < uzvaretajuSkaits; i++) {

    let rand = Math.random() * vardi.length; // vārdu skaits mainīgs
    rand = Math.floor(rand); // noapaļo uz leju

    console.log(vardi[rand]);
    //index.html meta cods nozīmē kad atļautas ir garumzīme

    let uzvaretajs = vardi[rand]; // console.log vietā
    rindas.innerHTML += `
<tr>
    <td>${i + 1}</td>
    <td>${uzvaretajs}</td>
</tr>` // pievieno +  

}


