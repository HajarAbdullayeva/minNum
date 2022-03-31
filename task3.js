// const input = [
//     [12, 13, 23, 11, 21, 11, 11, 11, 11, 11],
//     [11, 21, 15, 11, 14, 18, 11, 19, 11, 11],
//     [12, 31, 61, 11, 31, 17, 11, 67, 11, 11],
//     [13, 14, 17, 11, 12, 16, 11, 11, 11, 11],
//     [14, 13, 81, 11, 13, 51, 11, 11, 35, 44],
//     [75, 22, 19, 11, 14, 14, 11, 11, 11, 11],
//     [16, 34, 11, 11, 15, 31, 11, 11, 11, 11],
//     [17, 14, 11, 11, 16, 12, 11, 11, 11, 11],
//     [21, 15, 11, 11, 11, 11, 11, 11, 11, 11],
//     [16, 34, 11, 15, 31, 11, 11, 11, 11, 11]
// ];
// const temp = [];
// const filtered = [];
// for (let k = 0; k < input.length; k++) {
//     for (let i = 0; i < input[k].length; i++) {
//         for (let j = 0; j < input[k].length; j++) {
//             if (input[k][j] > input[k][j + 1]) {
//                 let temp = input[k][j];
//                 input[k][j] = input[k][j + 1];
//                 input[k][j + 1] = temp;
//             }
//         }
//     }
// }
//
// let minValue = Number.MAX_SAFE_INTEGER;
//
// for(let i = 0; i < input.length; i++) {
//     if(input[i][0] < minValue) {
//         minValue = input[i][0]
//     }
// }
//
// for(let i = 0; i < input.length; i++) {
//     if(input[i][0] === minValue) {
//         filtered.push(i + 1)
//     }
// }
//
// console.log(filtered);