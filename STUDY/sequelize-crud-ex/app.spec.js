const assert = require('assert');
const fs = require('fs');
// Assetion 라이브러리로 Chai의 Should 스타일 사용
const should = require('chai').should();

const sayHello = require('./app').sayHello;

// if (sayHello) {
//     console.log('sayHello should return hello');
//     if (sayHello() === 'hello') {
//         console.log('Success');
//     } else {
//         console.log('Fail');
//     }
// }

// describe()는 테스트의 범위를 설정하고, it()는 단위 테스트를 설정합니다.
// 인수로 사용한 done은 비동기 단위 테스트를 완료할 때 유용

// describe('App test!', function () {
//     it('sayHello should return hello', function (done) {
//         if (sayHello() === 'hello') {
//             done();
//         }
//     });
// });

// describe('App test!', function () {
//     it('sayHello should return hello', function () {
//         assert.equal(sayHello(), 'hello');
//     });
// });

describe('App test1', function () {
    it('async test', function (done) {
        this.timeout(3000); // 단일 테스트의 제한 시간 설정
        fs.readFile(__filename, done);
    });
});


