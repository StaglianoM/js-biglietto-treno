
const userKm = parseInt(prompt(`Quanti chilometri vuoi percorrere`));
const userAge = parseInt(prompt(`Inserire età del passeggero`));
const kmPrezzo = 0.21 ;
const prezzoBaseBiglietto = 0.21 * userKm;
let prezzoFinale = prezzoBaseBiglietto


if (userAge < 18) {
    prezzoFinale = prezzoBaseBiglietto - (prezzoBaseBiglietto * 20 / 100)
} else if (userAge >= 65) {
    prezzoFinale = prezzoBaseBiglietto - (prezzoBaseBiglietto * 40 / 100)
}
console.log(prezzoFinale.toFixed(2))

