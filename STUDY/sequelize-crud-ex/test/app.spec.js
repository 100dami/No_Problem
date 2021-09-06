const assert = require('assert');
const { expect } = require('chai');
const fs = require('fs');
const internal = require('stream');
// Assetion 라이브러리로 Chai의 Should 스타일 사용
const should = require('chai').should();
const app = require('../app');
// const sayHello = require('./app').sayHello;

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

// describe('App test1', function () {
//     it('async test', function (done) {
//         this.timeout(3000); // 단일 테스트의 제한 시간 설정
//         fs.readFile(__filename, done);
//     });
// });

// describe('# App test', function () {
//     describe('# sayHello', function () {
//         it('should return hello', function () {
//             app.sayHello().should.equal('hello');
//         });
//         it('should a string type', function () {
//             app.sayHello().should.be.a('string');
//         });
//     });

//     describe(' # addNumbers', function () {
//         it('should greater than 5', function () {
//             app.addNumbers(3, 4).should.be.above(5);
//         });
//     });
// });

// describe('hooks', function () {
//     before(function () {
//         // 블록 범위 내 모든 테스트 전에 실행
//     });

//     after(function () {
//         // 블록 범위 내 모든 테스트 후에 실행
//     });

//     beforeEach(function () {
//         // 블록 범위 내 각 테스트 직전에 실행
//     });

//     afterEach(function () {
//         // 블록 범위 내 각 테스트 직후에 실행
//     });

// });

// describe('App test!', function () {
//     before(function () {
//         console.log('before hook');
//     });

//     after(function () {
//         console.log('after hook');
//     });
//     beforeEach(function () {
//         console.log('beforeEach hook');
//     });
//     afterEach(function () {
//         console.log('afterEach hook');
//     });

//     it('A test', function () {
//         assert.equal(app.a(), 'A!');
//     });
//     it('B test', function () {
//         assert.equal(app.b(), 'B!');
//     });
// });

// const myObj = {
//     [Symbol.toStringTag]: 'myCustomType'
// };
// expect(myObj).to.be.a('myCustomType').but.not.an('object');


function sum(a, b) {
    return a + b;
}

describe('Equal Test', () => {
    it("4 + 5 = 9", () => {
        //equal
        expect(sum(4, 5)).to.equal(9);
    });
});


describe('Test', () => {
    const obj = { a: 1, b: 2 };

    it("keys test", () => {
        //obj는 a와 b를 key로 가진다.
        expect(obj).to.have.all.keys('a', 'b');
    });
});

expect(obj).to.have.any.keys('a', 'c');
expect([1, 2, 3]).to.include(1);