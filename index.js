const tr = require("googletrans").default;
const fs = require('fs');


const languages = [
  "gl",  "gu",  "el",  "nl",  "ne",  "no",  "da",  "de",
  "lo",  "lv",  "ru",  "ro",  "lt",  "mr",  "mk",
  "ml",  "ms",  "mn",  "eu",  "my",  "vi",  "be",  "bn",
  "bg",  "sr",  "sw",  "sv",  "es",  "sk",  "sl",  "si",
  "ar",  "hy",  "is",  "az",  "af",  "sq",  "am",  "et",
  "ur",  "uk",  "it",  "id",  "ja",  "ka",  "zu",  "zh",
  "cs",  "kk",  "ca",  "kn",  "hr",  "km",  "ky",  "ta",
  "th",  "tr",  "te",  "pa",  "fa",  "pt",  "pl",  "fr",
  "fil",  "hu",  "iw",  "hi"
];


async function call(){
  var text = "";
  try{
    for(let i=0;i<languages.length;i++){

      const res = await tr(["Flash signal.",
      "Create your own flash signal.",
      "Manipulate time, color, and timing to create your own flash signal"],
      { from: "en", to: languages[i] })

      text += ('lang - '+languages[i]+"\n")

      for(let j=0;j<res.textArray.length;j++){
        text += res.textArray[j];
        text += "\n";
      }
      text+= "\n";

    }

    fs.writeFileSync("target.txt", '\ufeff' + text, {encoding: 'utf8'});
  }catch(e){
    console.log('e',e.message)
  }
}

call();
  
