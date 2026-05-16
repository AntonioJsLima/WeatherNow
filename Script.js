function PrimeiraMaiuscula(texto){
    return texto
        .split(" ")
        .map(palavra => 
            palavra.charAt(0).toUpperCase() + palavra.slice(1)
        )
        .join(" ");
}
document.querySelector("#btn_buscar").addEventListener('click',
    function(){
        var input_cidade = document.querySelector("#input_cidade").value 
        var pais = document.querySelector("#pais")
        var cidade = document.querySelector("#cidade")
        var temperatura = document.querySelector("#temperatura")
        var status_tempo = document.querySelector("#status_tempo")
        var emoji_tempo = document.querySelector("#emoji_tempo")
        var img_tempo = document.querySelector("#img_icon")
        var min_max = document.querySelector("#min_max")
        var sensação = document.querySelector("#sensação")
        var umidade = document.querySelector("#umidade")
        var vento = document.querySelector("#vento")        
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input_cidade}&appid=d898e541cbf56dfc2f89088ea221681a&units=metric&lang=pt_br`)
        .then((A)=>A.json())
        .then((A)=>{
            pais.innerText = A.sys.country 
            cidade.innerText = A.name
            temperatura.innerText = (A.main.temp).toFixed(0)
            status_tempo.innerText = PrimeiraMaiuscula(A.weather[0].description)
            img_tempo.setAttribute('src',`https://openweathermap.org/img/wn/${A.weather[0].icon}@2x.png`) 
            min_max.innerText = `${(A.main.temp_max).toFixed(0)}ºC - ${(A.main.temp_min).toFixed(0)}ºC`
            sensação.innerText = `${(A.main.feels_like).toFixed(0)}ºC`
            umidade.innerText = `${(A.main.humidity).toFixed(0)}%`
            vento.innerText = `${((A.wind.speed)*3.6).toFixed(0)} km/h`
        })
    }
)