require('dotenv').config();
const express = require('express');
const app = express();

const morgan = require('morgan');
morgan.token('body', (req) => JSON.stringify(req.body));

const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);
const redisKey = {
    code: 'short-url:code',
    map: 'short-url:map'
};

const _alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const _base = _alphabet.length;
const encode = (id) => {
    let code = '';
    while (id > 0) {
        code = _alphabet.charAt(id % _base) + code;
        id = Math.floor(id / _base);
    }
    return code;
};

app.use(express.static('build'));
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

app.get('/:code', async (request, response) => {
    const code = request.params.code;
    const originUrl = await redis.hget(redisKey.map, code);
    if (!originUrl) {
        return response.status(404).json({ error: 'Unknown URL' }).end();
    }
    response.redirect(originUrl);
});

app.post('/', async (request, response) => {
    const encodedUrl = encodeURI(request.body.url);
    if (!/^((https|http)?:\/\/)[^\s]+/.test(encodedUrl)) {
        return response.status(400).json({ error: 'Incorrect URL format' }).end();
    }
    const id = await redis.incrby(redisKey.code, 1);
    const code = encode(id);
    await redis.hmset(redisKey.map, { [code]: encodedUrl });
    response.json({ url: encodedUrl, code });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});