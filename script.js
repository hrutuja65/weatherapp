const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const  temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
     const api_key = "d40ba599aef231f974ecaf23a70bd265";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
     description.innerHTML = `${weather_data.weather[0].description}`;
     humidity.innerHTML = `${weather_data.main.humidity}%`;
     wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
     switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src ="c:\Users\HRUTUJA MAHADIK\AppData\Local\Temp\a57544de-1719-40c1-bc14-138229de2363_JavaScript-Projects-main (2).zip.363\JavaScript-Projects-main\Weather App\assets\cloud.png";break;
            break;
        case 'Clear':
            weather_img.src = "c:\Users\HRUTUJA MAHADIK\AppData\Local\Temp\f9e476a4-b11a-4bf9-aca0-aa823cb1775f_JavaScript-Projects-main (2).zip.75f\JavaScript-Projects-main\Weather App\assets\clear.png";
            break;
        case 'Rain':
            weather_img.src = "c:\Users\HRUTUJA MAHADIK\AppData\Local\Temp\a502cb41-c32d-4306-a337-81df620ab5e9_JavaScript-Projects-main (2).zip.5e9\JavaScript-Projects-main\Weather App\assets\rain.png";
            break;
        case 'Mist':
            // weather_img.src = "c:\Users\HRUTUJA MAHADIK\AppData\Local\Temp\735d5a6f-4132-48bb-869e-e74caa67670f_JavaScript-Projects-main (2).zip.70f\JavaScript-Projects-main\Weather App\assets\mist.png";
            // break;
        case 'Snow':
            weather_img.src = "c:\Users\HRUTUJA MAHADIK\AppData\Local\Temp\f7ac38bb-9f99-4257-a63e-6de9a303ae3d_JavaScript-Projects-main (2).zip.e3d\JavaScript-Projects-main\Weather App\assets\snow.png";
            break;

    }

}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
    // if(weather_data.cod === `404`){
    //     location_not_found.style.display = "flex";
    //     weather_body.style.display = "none";
    //     console.log("error");
    //     return;

//     console.log("run");
//     location_not_found.style.display = "none";
//     weather_body.style.display = "flex";
//     temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
//     description.innerHTML = `${weather_data.weather[0].description}`;

    // humidity.innerHTML = `${weather_data.main.humidity}%`;
    // wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    // switch(weather_data.weather[0].main){
    //     case 'Clouds':
    //         weather_img.src ="https://in.images.search.yahoo.com/images/view;_ylt=AwrPpRghftdlCscxV8S9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2ZhOWZkNzRmYjExNjliMDkzOTRhY2FhZmZhOWQ5NDViBGdwb3MDMTA1BGl0A2Jpbmc-?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dcloud%2Bimage%2Bin%2Bweather%2Bapp%26ei%3DUTF-8%26type%3DE210IN714G0%26fr%3Dmcafee%26fr2%3Dsa-gp-search%26nost%3D1%26tab%3Dorganic%26ri%3D105&w=512&h=512&imgurl=www.shareicon.net%2Fdata%2F2016%2F07%2F22%2F799894_cloud_512x512.png&rurl=https%3A%2F%2Fwww.shareicon.net%2Fclouds-and-sun-sky-cloudy-weather-meteorology-sunny-cloud-799894&size=+8.2KB&p=cloud+image+in+weather+app&oid=fa9fd74fb1169b09394acaaffa9d945b&fr2=sa-gp-search&fr=mcafee&tt=Clouds+And+Sun%2C+sky%2C+Cloudy%2C+weather%2C+meteorology%2C+Sunny%2C+Cloud+icon&b=61&ni=160&no=105&ts=&tab=organic&sigr=FJJUI8QCw9bF&sigb=lAWygTPdcp9H&sigi=MSvUEts9kvdk&sigt=JSDkXris7DTh&.crumb=5y/Zw3ig76S&fr=mcafee&fr2=sa-gp-search&type=E210IN714G0";
    //         break;
    //     case 'Clear':
    //         weather_img.src = "https://www.macobserver.com/wp-content/uploads/2021/07/Apple-Weather-app-logo.png";
    //         break;
    //     case 'Rain':
    //         weather_img.src = "https://tse1.mm.bing.net/th?id=OIP.5kC6RcWCE-V94actyvLuTAHaHa&pid=Api&P=0&h=180";
    //         break;
    //     case 'Mist':
    //         weather_img.src = "https://tse2.mm.bing.net/th?id=OIP.wPubA_QJjGYe6LAJfUe7vgHaHa&pid=Api&P=0&h=180";
    //         break;
    //     case 'Snow':
    //         weather_img.src = "https://cdn0.iconfinder.com/data/icons/cloudy-2/425/snow-1024.png";
    //         break;

    // }

//     console.log(weather_data);
// }


