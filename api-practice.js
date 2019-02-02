
async function start(){
    var fd = async function() {
        var data = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=40').then(resp => resp.json()).catch(console.warn)
        return data
       }
    
    var data = await fd()

    data.forEach(obj => {
        var div = document.createElement('div')
        div.innerText = obj.id
        document.body.append(div)
    })

    console.log(data)

}


