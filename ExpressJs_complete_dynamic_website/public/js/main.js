const cityName = document.getElementById('city_name');
const searchBtn = document.getElementById('search');
const temp = document.getElementById('temp');
const time = document.getElementById('time');
const city = document.getElementById('city');
const country = document.getElementById('country');
const weatherMood = document.getElementById('weatherMood');
let localHours = new Date().getHours();
let localTime =  new Date().getMinutes();
let hours = '';
let period = '';

if(localHours<11){
    period = 'AM';
}else{
    period = 'PM';
}
if(localHours>12){
    hours = localHours - 12;
}
if(localTime<10){
    localTime = '0' + localTime;
}

const getInfo = async (event)=>{
    event.preventDefault();
    const cityVal = cityName.value;
    if(cityVal === ''){
        alert('Please Enter any city name.');
    }else{
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4db243d5b0dd3264b7c4875848405191`);
            const data = await res.json();
            time.innerText = hours +":" + localTime+" "+ period;
            city.innerText = (data.name);
            country.innerText = (data.sys.country);
            temp.innerText = (data.main.temp);
            const mood = (data.weather[0].main);
            console.log(mood);
            if(mood === 'Clear'){
                weatherMood.innerText = '🌞';
            }else if( mood === 'Clouds'){
                weatherMood.innerText = '🌥';
            }else if( mood === 'Rain'){
                weatherMood.innerText = '🌧';
            }else if( mood === 'Fog'){
                weatherMood.innerText = '🌫';
            }else{
                weatherMood.innerText = '🌤';
            }
            
            
        } catch (error) {
            console.log(`${error} occured, please enter city name properly.`)
        }
    }  
}

searchBtn.addEventListener('click', getInfo);