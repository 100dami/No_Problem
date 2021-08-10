const url = require('url');

const URL = url.URL;
const myURL = new URL('https://runebook.dev/ko/docs/dom/window/setimmediate');
console.log('new URL():', myURL);
console.log('url.format() : ', url.format(myURL));
console.log('========================');
const parsedurl = url.parse('https://runebook.dev/ko/docs/dom/window/setimmediate');
console.log('url.parse() : ', parsedurl);
console.log('url.format()', url.format(parsedurl));