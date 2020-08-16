/* Összegzés algoritmusa:
összeg = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    összeg = összeg + szám
CIKLUS VÉGE
*/

let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log ("sum: ", sum);

/* Számlálás algoritmusa

db=0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    Ha igaz a feltétel a számra, AKKOR
        db = db+1
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let db=0;
for(let i=0; i<numericArray.length; i++) {
    if (numericArray [i] % 2 ==0){
        db++;
    }
}
console.log("Even numbers: ", db);