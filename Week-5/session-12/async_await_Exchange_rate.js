async  function getExchangeRate(currencyCode){
    try {
        let url="https://api.exchangerate.host/latest"
        let response= await fetch(url)
        if(response.status==200){
            let jsonResponse = await response.json()
            if(!jsonResponse["rates"][currencyCode]){
                return null;

            }
            jsonResponse["rates"][currencyCode].toFixed(4);


        }
        else{
            throw new Error(`${response.status}`);
        }

    }
    catch{
        console.log("We are not able to fetch the data");

    }


}
getExchangeRate("USD")
.then( (rate) =>{
    console.log(rate)}
    )
.catch( error => console.log(error))

