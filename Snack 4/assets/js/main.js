// Snack4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const squad2 = [];
const squad = [
    {
        nome : "Cani",
        punti: 0,
        falli: 0,
    },
    {
        nome : "Cerbiatti",
        punti: 0,
        falli: 0,
    },
    {
        nome : "Gatti",
        punti: 0,
        falli: 0,
    },
    {
        nome : "Scoiattoli",
        punti: 0,
        falli: 0,
    },
    {
        nome : "Rinoceronti",
        punti: 0,
        falli: 0,
    },
]


for(let i = 0; i<squad.length; i++){ 
let falliSquadra = Math.floor(Math.random() * 11) // Falli da 0 a 10 ;
let puntiSquadra = Math.floor(Math.random() * 11) // Punti da 0 a 10;
let {punti = puntiSquadra, falli = falliSquadra} = squad; // Cambio dei parametri

squad[i] ={
    ...squad[i],
    punti,
    falli,
}
console.log (punti, falli); // rispettivi punti e falli math random



}

console.log(squad); // squad object con punti e falli random



// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



for(let i = 0; i<squad.length;i++){
    const nome = squad[i].nome

    
    
    const falliSquadra = Math.floor(Math.random() * 10);

    console.log(nome + ":" + " falli della squadra " + falliSquadra);
        squad2.push({ // pusho i falli e il nome della squadra dentro l'array squad2 inizializzato (vuoto) a inizio file 
        falliSquadra,
        nome,
     })

     
}
console.log(squad2) // Array con  soli nomi e falli.
    






