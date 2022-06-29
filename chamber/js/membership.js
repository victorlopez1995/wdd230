const display = document.querySelector(".spotlight");


//-----------------------------get cards from json --------------------------------- //

const requestURL = 'json/data.json';
let countext = 0; 
let count = 0 ;
let random = 0;
let include = [];

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    while (countext< 3){
    companies.forEach(displaycompanies);
    }
  });


  function displaycompanies(company) {
    // Create elements to add to the document
    random = getRandomInt(2);
    if ((company.membership == "Gold" || company.membership == "Silver" ) && count< 3 && countext< 3 && random == 1 && (!(include.includes(company.name)))) {
    count += 1;
    countext += 1;
    let card = document.createElement('div');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let h3 = document.createElement('p');
    let website = document.createElement('p');
    let phone = document.createElement('p');

    include.push(company.name)

    h2.textContent = `${company.name}`;

    logo.setAttribute('src', company.image);
    logo.setAttribute('alt', `logo of ${company.name}`);
    logo.setAttribute('loading', 'lazy');
  
    h3.textContent = `${company.description}`;
    website.innerHTML = `<a href="${company.website}">${company.website}</a>`;
    phone.textContent = `${company.phone}`;
    if (count == 3){
        card.setAttribute('class','lastspot');
    }
    
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(h3);
    card.appendChild(website);
    card.appendChild(phone);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.spotlight').appendChild(card);
    }
  }

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


