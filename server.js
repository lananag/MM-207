const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const getJoke = require("./languageModule/dictionary.js")

app.use(express.json());
app.use(express.static("public"));

app.post("/jokes", async function (req, res) {
  let language = req.body.ID;
  console.log(language);
  try {
    let answer = await getJoke(language);
    console.log(answer);
    //if (answer.ok){
      res.status(200).json(answer);
    /*}
    else{
      res.status(403).json({error:"Failed to retrieve joke"})*/
    }

    catch(err){
      next(err)
    }
  
});

app.use(function(err,res){
  res.status(403).json({
    error:"An error occured",
    type:err
  }).end();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 