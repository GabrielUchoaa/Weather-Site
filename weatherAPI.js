const APIKey = '445ce01d7d4e9dd944947e80c69b7f32';
let c = (el) => document.querySelector(el);
let city = document.querySelector('.pesquisa')
let clima = c('.clima')
let cityname = c('.city-name span')
let temp = c('.temperature span')
let flag = c('.flag')
let description = document.querySelector('.description')



c('.search-icon').addEventListener("click", ()=> {
if(city.value != ""){   
c('.to-search').style.paddingBottom = "370px"
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=445ce01d7d4e9dd944947e80c69b7f32&lan=pt_br`)
.then(res => res.json())
.then(data => {
temp.innerHTML = `${data.main.temp} C`
cityname.innerHTML = data.name
flag.src = `https://www.countryflagicons.com/FLAT/64/${data.sys.country}.png`

console.log(data)

description.innerHTML = data.weather[0].description

if(data.clouds.all >= 70){
setTimeout(()=>{clima.classList.remove('nada')},500)
clima.src = "file:///C:/Users/Nonato/Desktop/Coding/Imagens/nublado.png"
}

if(data.clouds.all <= 70 && data.weather[0].main !== "Clear"){
    setTimeout(()=>{clima.classList.remove('nada')},500)
    clima.src = "file:///C:/Users/Nonato/Desktop/Coding/Imagens/Partially.png"
    }

if(data.weather[0].main === "Rain" /*|| data.weather[0].description === "overcast clouds"*/){
    
    setTimeout(()=>{
        clima.classList.remove('nada')
        clima.src = "file:///C:/Users/Nonato/Desktop/Coding/Imagens/Rain.png"
},500)}

if(data.weather[0].main === "Clear"){
    
    setTimeout(()=>{
        clima.classList.remove('nada')
        clima.src = "file:///C:/Users/Nonato/Desktop/Coding/Imagens/ensolarado.png"
},500)}


})
.catch(()=> {
    cityname.innerHTML = "Local não encontrado"   
    clima.src = "file:///C:/Users/Nonato/Downloads/erro%20de%20requisi%C3%A7%C3%A3o.avif"
    temp.innerHTML = ``
    flag.src = ""
    description.innerHTML = ""
}) }

}) 
























/*
const getWeatherData = async(city) => {
    const apiWeatherData = `https://api.openweathermap.org/data/2.5/weather?q=${Maceio}&units=metric&appid=${APIkey}&lan=pt_br`
    const res = await fetch(apiWeatherData)
    const data = res.json()
    console.log(data)
}

*/

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=445ce01d7d4e9dd944947e80c69b7f32