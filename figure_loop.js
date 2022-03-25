// for (var star=1; star<=5; star+= 1) {
//     // console.log('*'.repeat(star))
//     for (var a=0; a<=star; a+= 1) {
//         console.log('*')
//     }
//     console.log('\n')
//   }

// NaN / repeat은 문자열과 숫자를 곱해주는 역할

 
//   for (var star=5; star>=1; star-= 1) {
//     console.log('*'.repeat(star))
//   }
  
//   for (var star=1; star <16; star *=2) {
//     console.log('*'.repeat(star))
//   }
  
//   for (var star=5; star >= 1; star -=1) {
//     console.log(' '.repeat(5  -star) + '*'.repeat(star))
//   }
  
  for (var star = 3; star >=1; star -= 1) {
    console.log('***'.repeat(1))
  }
  
//   for (var star = 1; star <= 5; star += 2) {
//     console.log(' '.repeat((5-star)/2) + '*'.repeat(star))
//   }
  
//   for (var star = 3; star >= 1; star -= 2) {
//     console.log(' '.repeat((5-star)/2) + '*'.repeat(star)) 
//   }
    
// var star = '';
// for (var i = 0; i < 10; i++) {
//     star += '*';
//     console.log(star);
// }

// for(let i = 0 ; i < 4; i++){
//     console.log('****\n');
//     }

// /*
// (1) 처음에 변수 i는 0이고
// (2) i=0이 4보다 작으면
// (3) 콘솔에 *가 4번 찍히고 엔터를 한다.
// (4) 이후 i값에 1을 더해서 i는 2가 된다.
// */


// var star = '';
// for (var i = 0; i < 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         star += '*';
//     }
//     star += '\n';
// }
// console.log(star);

// /*
// star라는 변수는 띄어쓰기다

// i라는 변수가 0, 0은 <10보다 작으니 코드가 실행된다.
// 반복문 안에

// j라는 변수는 0이고, j가 i보다 작거나 같으면; 코드가 실행된다.
// 그래서 *이 붙는다. 그리고 j에 1이 더해져 j는 1이 된다.
// 1이 된 j는 0보다 크므로 반복문 안의 반복문이 끝난다.
// 그리고 엔터가 된다.

// *
// i는 1이 되엇다. 1<0보다 작으니 코드가 실행된다.
// 반복문 안에
// j는 1이고, j=1이고 i=1보다 작거나 같다는 등식이 맞다. 
// 그래서 *에 *가 추가 된다. 이후 j는 2가 되고 2는 1보다 크므로 반복문 안의 반복문이 끝나고
// 또 엔터가 된다.

// 이런식으로 10줄이 반복되어
// 삼각형이 된다.
// */

// // 두개씩 별찍기

// var star = ' ';
// for (var i = 0; i < 10; i++) {
//     for (var j = 0; j <= (i * 2); j++) {
//         star += '*';
//     }
//     star += '\n';
// }
// console.log(star);

// /*
// star라는 변수는 띄어쓰기이다.
// 변수 i값은 0이고; 0은 10보다 작다는 건 true이다.
// 변수 j값은 0이고; 변수 j=0은 변수 i=0에 2를 곱한 값인 0과 같으므로 true이다.
// 따라서 1행에 *이 추가되었고, 0인 j 변수에 1이 추가되었다.
// 다시 j는 1이다. 변수 j=1은 변수 i=0에 2를 곱한 값인 0보다 크므로 이 반복문은 종료된다.
// 그리고 star 변수에 띄어쓰기가 되어 행이 바뀌고
// 0이었던 i 변수값이 1이 추가된다.
// console.log(star)값은 *으로 출력이 되었다.

// 다시 변수 i값은 1이 되었고, 1은 10보다 작다.
// j값은 1이고; j값은 변수1
// */

for (let i=0; i<4; i++) {
  console.log("****")
}