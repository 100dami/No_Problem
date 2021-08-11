const http = require('http');
const { parse } = require('querystring');

const parseCookies = (cookie = '') => 
    cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

http.createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log(req.url, cookies);
    res.writeHead(200, {'Ser-Cookie' : 'mycookie=test'});
    res.end('hello Cookie');
})
    .listen(8082, () => {
        console.log('8082 포트!');
    });
