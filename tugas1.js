const cekHariKerja = (day) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat'];
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

//then catch

cekHariKerja("minggu")
    .then((results)=>{
    console.log(results);
    })
    .catch((error)=>{
        console.log(error);
    })


//async function dengan try and catch
async function listHarikerja(hari){
    try{
        const results = await cekHariKerja(hari);
        console.log(results);
    } catch(error) {
        console.log(error);
    }
}

listHarikerja("sabtu")