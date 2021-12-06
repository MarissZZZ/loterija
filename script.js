const vardi = ['Līga Kokle', 'Lauris Reiniks', 'Pīters Pārkers', 'Anna Failora', 'James Bonds'];
const balvas = ['Thanos laika roka', 'Lavas lampa', 'Elektriskā tējkanna', 'Tesla', 'Zābaki'];
const naudaKopa = 1000000;
let uzvaretajuSkaits = 3;
let rindas = document.querySelector('.rindas'); // pievieno mainīgo

// Math.random=Math.random()*10;

function randFunc(maxCipars) {
    let random1 = Math.floor(Math.random() * maxCipars); // math.floor noapaļo uz leju
    return random1
}

function izlozet() {

    rindas.innerHTML=``; // lai katru reizi izdzēš
    
    for (let i = 0; i < uzvaretajuSkaits; i++) {


        // let rand = Math.random() * vardi.length; // vārdu skaits mainīgs
        // rand = Math.floor(rand); // noapaļo uz leju

        // console.log(vardi[rand]);
        // index.html meta cods nozīmē kad atļautas ir garumzīme

        let rand = randFunc(vardi.length);

        let uzvaretajs = vardi[rand]; // console.log vietā

        let balva=balvas[rand];

        rindas.innerHTML += `
<tr>
    <td>${i + 1}</td>
    <td>${uzvaretajs}</td>
    <td>${balva}</td>
</tr>` // pievieno +  

    }
}