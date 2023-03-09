async function getJoke(language){
  let chosenlanguage = language;
  let CHOSENLANGUAGE = require("./languages/" + chosenlanguage + ".json");
  switch (language){
    case language: return CHOSENLANGUAGE;
  default: return{error:"An error has occured"};

  }
};

module.exports = getJoke;