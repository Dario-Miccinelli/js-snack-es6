// Snack 3
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

//  Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


let result = document.getElementById("bici");


const bike = [
    {
        nome : "Mayu Baby",
        peso : 11,
    },
    {
        nome : "Volvo VeryLight",
        peso : 5,
    },
    {
        nome : "BMW Enduro",
        peso : 20,
    },
    {
        nome : "BMW Run",
        peso : 11,
    },
    {
        nome : "Smart City",
        peso : 17,
    },
]

const  {nome, peso} = bike[0];

console.log (nome,peso); // Mostra nome e peso della prima bike

let lightBike = {
    nome,
    peso,
};
console.log (lightBike); // Mostra l'object della prima bike


let heavyBike = {
    nome,
    peso,
};

console.log (heavyBike); // Mostra l'object della prima bike 


for (let i = 0; i < bike.length; i++) {  //Ciclo per mostrare anche i valori delle altre bike
    const {nome, peso} = bike[i];
    console.log (bike[i]); // Mostra i valori di tutte le bike (Nome, peso)

    if (lightBike.peso > peso) {    // Se il valore è minore di 20 kg (bike più pesante)
        
        console.log ("bike leggera " + peso); // Valore 5 kg bike più leggera

        lightBike = {
            nome,
            peso,
        };
    };

    if (heavyBike.peso < peso){

        console.log ("Bike pesante " + peso); // valore 20 kg bike più pesante

        heavyBike = {
            nome,
            peso,
        };
    }
    
}

// Inner Html display

bici.innerHTML = `La bici più leggera è la ${lightBike.nome}, pesa ${lightBike.peso} kg. <br><br> La bici più pesante è la ${heavyBike.nome}, pesa ${heavyBike.peso} kg, perfetta e robusta per la montagna.`;

// Inner Html display


