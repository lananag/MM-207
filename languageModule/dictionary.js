const jokes = {
    english: require('./languages/english.json'),
    norwegian: require('./languages/norwegian.json'),
    swedish: require('./languages/swedish.json'),
  };
  
  function getRandomJoke(language) {
    if (!jokes[language]) {
      return { error: `Jokes in ${language} language are not available.` };
    }
    const jokesArray = jokes[language];
    const randomIndex = Math.floor(Math.random() * jokesArray.length);
    return { joke: jokesArray[randomIndex] };
  }
  
  module.exports = getRandomJoke;