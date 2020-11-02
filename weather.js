fetch('http://api.openweathermap.org/data/2.5/weather?q=Taganrog&units=metric&lang=ru&appid=13e5b32f3d5e54970c4e2790c623939e')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });