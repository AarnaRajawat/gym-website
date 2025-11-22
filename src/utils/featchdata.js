


export const exercisesOptions = {
 method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
  headers: {
    'x-rapidapi-key': '8aa616ac5fmsh45d2beb22b56224p17ad13jsna586733149cc',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
