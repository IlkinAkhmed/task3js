// 1. Istenilen sayda  gelen datalarin Ortalamasini veren Js function yazin.Call back istifade edeceksiz.

// const numbers = [30,5,43,20,6,72,9,45,62,8,9,10,12,23,54]

// function edediortatap(...numbers) {
//     let cem =  numbers.reduce((initial,elements)=>initial+elements,0)
//     return cem/numbers.length
// }
// function hesabla(callback,...numbers) {
//     return callback(...numbers)
// }

// console.log(`datada olan elementlerin ededi ortasi: ${hesabla(edediortatap,...numbers)}`);






// 2. Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

// const numbers = [30,5,43,20,6,72,9,45,62,8,9,10,12,23,54]
// const cutolanlar = []
// numbers.forEach(i => {
//     if (i%2===0) {
//         cutolanlar.push(i)
//     }
// });
// function topla(...cutolanlar) {
//     return cutolanlar.reduce((initial,elements)=>initial+elements,0)
// }
// function hesabla(callback,...cutolanlar) {
//     return callback(...cutolanlar)
// }
// console.log(`datada olan cutlerin cemi: ${hesabla(topla,...cutolanlar)}`);









// 3. Istenilen sayda gelen datalarin tek olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

// const numbers = [30,5,43,20,6,72,9,45,62,8,9,10,12,23,54]
// const tekolanlar = []
// numbers.forEach(i => {
//     if (i%2!==0) {
//         tekolanlar.push(i)
//     }
// });
// function topla(...tekolanlar) {
//     return tekolanlar.reduce((initial,elements)=>initial+elements,0)
// }
// function hesabla(callback,...tekolanlar) {
//     return callback(...tekolanlar)
// }
// console.log(`datada olan teklerin cemi: ${hesabla(topla,...tekolanlar)}`);








// 4. Istenilen sayda gelen datalarin cut olanlarin toplamini tek olanlarinin toplamina olan hasilini tapan Js function yazin.Call back istifade edeceksiz.

// const numbers = [30,5,43,20,6,72,9,45,62,8,9,10,12,23,54]
// const tekolanlar = []
// const cutolanlar = []
// numbers.forEach(i => {
//     if (i%2!==0) {
//         tekolanlar.push(i)
//     }
//     if (i%2===0) {
//         cutolanlar.push(i)
//     }
// });
// function topla1(...tekolanlar) {
//     return tekolanlar.reduce((initial,elements)=>initial+elements,0)
// }
// function topla2(...cutolanlar) {
//     return cutolanlar.reduce((initial,elements)=>initial+elements,0)   
// }

// function hesabla(callback,...tekolanlar) {
//     return callback(...tekolanlar)
// }
// let teklerincemi = hesabla(topla1,...tekolanlar)

// function hesabla(callback,...cutolanlar) {
//     return callback(...cutolanlar)
// }

// let cutlerincemi = hesabla(topla1,...cutolanlar)


// console.log(`teklerin cemi ile cutlerin ceminin hasili: ${teklerincemi*cutlerincemi}`);
