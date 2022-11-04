function greet(language) {      
  let lang = {              //we create an array of objects of mulitple languages that have their respective way of saying "welcome"
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
 
  }
  
  
  let defaultLang = 'english'   //we create a default that equals English
  return lang[language] || lang[defaultLang] //we will return the lang array with whatever language is passed into the function, if there is none or it dosnt exist, we will return the default language, english
  }
