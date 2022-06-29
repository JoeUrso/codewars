// This is a shitty attempt and doesnt work anyway

// export function solution(number: number): string {
//     // convert the number to a roman numeral
//     let originalNum: number = number;
//     let numBreakdown: number[] = [];
//     let answer = "";

//     while (originalNum > 0) {
//         if (originalNum === 4 || 9 || 40 || 90 || 400 || 900) {
//             numBreakdown.push(originalNum);
//             originalNum -= originalNum;
//         }

//         if (originalNum >= 1000) {
//             numBreakdown.push(1000);
//             originalNum -= 1000;
//         } else if (originalNum >= 500) {
//             numBreakdown.push(500);
//             originalNum -= 500;
//         } else if (originalNum >= 100) {
//             numBreakdown.push(100);
//             originalNum -= 100;
//         } else if (originalNum >= 50) {
//             numBreakdown.push(50);
//             originalNum -= 50;
//         } else if (originalNum >= 10) {
//             numBreakdown.push(10);
//             originalNum -= 10;
//         } else if (originalNum >= 5) {
//             numBreakdown.push(5);
//             originalNum -= 5;
//         } else if (originalNum >= 1) {
//             numBreakdown.push(1);
//             originalNum -= 1;
//         }
//     }

//     for (let i = 0; i < numBreakdown.length; i++) {
//         switch (numBreakdown[i]) {
//             case 1:
//                 answer += "I";
//                 break;
//             case 5:
//                 answer += "V";
//                 break;
//             case 10:
//                 answer += "X";
//                 break;
//             case 50:
//                 answer += "L";
//                 break;
//             case 100:
//                 answer += "C";
//                 break;
//             case 500:
//                 answer += "D";
//                 break;
//             case 1000:
//                 answer += "M";
//                 break;
//             case 4:
//                 answer += "IV";
//                 break;
//             case 9:
//                 answer += "IX";
//                 break;
//             case 40:
//                 answer += "XL";
//                 break;
//             case 90:
//                 answer += "XC";
//                 break;
//             case 400:
//                 answer += "CD";
//                 break;
//             case 900:
//                 answer += "CM";
//                 break;
//         }
//     }

//     return answer;
// }
