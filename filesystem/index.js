const fs = require('fs');
const {resolve} = require('path');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log("Gagal Membaca Berkas");
        return;
    }

    console.log(data);
};

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);