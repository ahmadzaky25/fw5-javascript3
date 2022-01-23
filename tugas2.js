const getmonth = (callback) => {
    setTimeout(()=>{
        let error = false;
        let month = ['january','february','maret','April','May','Juni','July','August','September','October','November','Desember'];
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sory Data Not Found',[]))
        }
    }, 4000)
}

function cetakBulan(error, bulan) {
    if(!error){
        bulan.map(el =>{
            console.log(el);
        })
    } else {
        console.log(error);
    }
}

getmonth(cetakBulan)
