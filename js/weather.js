const API_KEY='96a47a2f165d7a0814ead6396369b841';

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response=>response.json()).then(data=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        city.innerText=`${data.name} 유령이 된 나는, 내일 먼 곳의 너를 보러 갈 거야`;
        weather.innerText=`${data.weather[0].main} and ${data.main.temp}C`;
    });
    
}
function onGeoError(){
    alert("너를 그저 놓쳐버릴 듯이-藍二乗");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);