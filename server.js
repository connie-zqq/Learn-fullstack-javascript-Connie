import https from 'https';

    https.get('https://www.sina.com', res => {
    console.log('Response status code: ', res.statusCode);

    res.on('data', chunk => {
        console.log(chunk.toString());
    });
});
