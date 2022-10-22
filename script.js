//*SIEMPRE HAMBRIENTO
function siempreHambriento(arr) {
    let existe = "no";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "comida") {
            console.log("delicioso");
            existe = "si";
        }
    }
    
        if (existe == "no") {
            console.log("Tengo hambre");
        }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"
//********************************************* */
//*Filtro paso alto
function highPass(arr, cutoff) {
    let x = 0;
    let filteredArr = [];
    for (let i=0 ; i < arr.length ; i++) {
        if (arr[i] > cutoff) {
            filteredArr[x] = arr[i];
            x++;
        }

    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]
//********************************************* */
//*mejor que el promedio
function betterThanAverage(arr) {
    let sum = 0;
    let prom = 0;
    for (let i=0 ; i < arr.length ; i++) {
        sum = sum + arr[i];
    }
    prom = sum / arr.length;
    console.log ("el promedio es " + prom)
    let count = 0
    for (let i=0 ; i < arr.length ; i++) {
        if (arr[i] > prom) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta
//********************************************* */
//*arreglo invertido
//********************************************* */

//*arreglo invertido

function reverse(arr) {

    let arrinv = [];
    let x = 0;
    for (i = arr.length ; i >= 0 ; i--) {
        arrinv[x] = arr[i];
        x++;
    }
    return arrinv;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]




//********************************************* */
//*arreglo fibonacci
function fibonacciArray(n) {

    // [0, 1] son los valores inciales del arreglos para calcular el resto
    let fibArr = [0, 1];
    let x = 0;
    for (i = fibArr.length; i <= n-1; i++) {

        x = fibArr[i-1] + fibArr[i-2];
        fibArr.push(x);
        console.log("valor de i=" + i);

    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]