const qrcode = require('qrcode');

const data = 'https://juntosencadaetapa.babysec.com.pe/landing-registro_bjece_formsb/?utm_source=qr&utm_medium=pagohttp://www.tupaginadeprueba.com';

qrcode.toFile('qrcode.png', data, {
    color: {
        dark: '#000000',
        light: '#ffffff'
    },
    width: 2000,
    height: 2000
}, 
    (err) => {
        if (err) throw err;
        console.log('file creado');
    }
);

