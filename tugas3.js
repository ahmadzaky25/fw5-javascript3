//PROMISE MERUPAKAN OBJEK YANG MEREPRESENTASIKAN KEBERHASILAN ATAU KEGAGALAN

let bayar = false

const hutang = new Promise((resolve,reject) => {

    if(bayar){
        resolve('Lunas')
    } else{
        reject('Belum Lunas')
    }
})

hutang
    .then(respon => console.log('OK ' + respon))
    .catch(respon => console.log('NOT OK ' + respon))



//2

let janji = 'menonton'

let bikinJanji = new Promise ((resolve,reject) => {
    setTimeout(()=> {
        if (janji === "menonton") {
            resolve("Kita Nonton")
        } else {
            reject("Kita Batal Nonton")
        }
    })
})

bikinJanji
    .then(respon => console.log('OK ' + respon))
    .catch(respon => console.log('Maaf, ' + respon))