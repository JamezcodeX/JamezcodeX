const apikey = "api key";
const main = document.getElementbyId('main');
const form = document.getElementbyId('form');
const search = document.getElementbyId('search');
const url = (city)=>
     `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=$(apikey)`;
async function getWeatherByLocation(city) {
    const resp = await fetch(url) {
        const resp = await fetch(url(city), {
            origin:"cros"});
            const respData = await resp.json();
            addWeatherTopage(respData);
        }
        function addWeatherTopage(data){
            const temp = ktoc(data.main.temp);
            const weather = document.createElement('div')
                weather.classlist.add('weather');
                weather.innerHTML =`
                <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
                ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
                </h2>
                <small>${data.weather[0].main}</small>
                `;
                // cleanup
                main.innerHTML="";
                main.appendchild(weather);
        };
        function ktoc(K) {
            return Math.floor(k - 273.15);
        }
        form.addeventlistener('submit',(e)=>{
            e.preventDefault();
            const city = search.value;
            if(city){
                getWeatherByLocation(city)
            }
        });
            