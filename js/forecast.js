const KEY = 'a32a21db864a7f2a1d4a12023cc3f91c';

// request get data

const getData = async (city) => {
  const base = 'https://api.openweathermap.org/data/2.5/weather';
  const query = `?q=${city}&units=metric&appid=${KEY}`;
  loader(true);
  const req = await fetch(base + query);
  // if(weather.cod >= 400){
  //   throw new Error('nimadr')
  // }
  const data = await req.json();
  loader(false);
  return data;
};