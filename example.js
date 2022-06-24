'use strict';

const LightningClient = require('./index');

const client = new LightningClient('/home/brocoind/.lightning');

client.getinfo()
    .then(info => console.log(info));
