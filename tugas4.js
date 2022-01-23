//Package
const fetch = require("cross-fetch");
const { fetchUrl } = require("fetch");


//ambil data dari url
const url = "https://jsonplaceholder.typicode.com/users"

// function results(err,meta,body) {
//     const res = body.toString()
//     const data = JSON.parse(res)
//     // console.log(data[0].name);

//     data.forEach(item => {
//         console.log(item.name);
//     });
// }

// fetchUrl(url,results)

fetch(url).then(res => {
    res.json().then(fin => {
        fin.forEach(item => {
            console.log(item.name);
        });
    }).catch(err => {
        console.log("URL SALAH");
    })
}).catch(err => {
    console.log("URL KOSONG");
})