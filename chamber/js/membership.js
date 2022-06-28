const display = document.querySelector(".spotlight");


//-----------------------------get cards from json --------------------------------- //

const requestURL = 'json/data.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displaycompanies);
  });

let count = 0 ;  
  function displaycompanies(company) {
    // Create elements to add to the document
    if (company.membership == "Gold" && count< 3) {
    count += 1;
    let card = document.createElement('div');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let h3 = document.createElement('p');
    let website = document.createElement('p');
    let phone = document.createElement('p');

    h2.textContent = `${company.name}`;

    logo.setAttribute('src', company.image);
    logo.setAttribute('alt', `logo of ${company.name}`);
    logo.setAttribute('loading', 'lazy');
  
    h3.textContent = `${company.description}`;
    website.innerHTML = `<a href="${company.website}">${company.website}</a>`;
    phone.textContent = `${company.phone}`;
    
  
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


