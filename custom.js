const API = `68b6e395a6a1983c62b83315b9924164`;

const getWeatherData = city => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`

    fetch(url)
      .then(response => response.json())
      .then(data => showDetails(data))
      .catch(err => alert("Enter Valid City Name"))
      
}





const searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click' , function(){
    const inputText = document.getElementById('input-text').value;
    getWeatherData(inputText);
})


const showDetails = detail =>{
    document.getElementById('city').innerText = detail.name ;
    const temp = ((detail.main.temp)-273 );
    document.getElementById('temperature').innerText = temp.toFixed(2);
    document.getElementById('weather').innerText = detail.weather[0].main;
    document.getElementById('img').setAttribute('src',`https://openweathermap.org/img/wn/${detail.weather[0].icon}@2x.png`);
    document.getElementById('input-text').value = "";


}