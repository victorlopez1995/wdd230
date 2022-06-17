const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
  gridbutton.style.background = "#D5ECD4";
  listbutton.style.background = "transparent";
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
  listbutton.style.background = "#D5ECD4";
  gridbutton.style.background = "transparent";
}

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

  
  function displaycompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let phone = document.createElement('p');
    let address = document.createElement('p');
    let website = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${company.name}`;

    logo.setAttribute('src', company.image);
    logo.setAttribute('alt', `logo of ${company.name}`);
    logo.setAttribute('loading', 'lazy');
  
    phone.textContent = `${company.phone}`;
    address.textContent = `${company.address}`;
    website.innerHTML = `<a href="${company.website}">${company.website}</a>`;

    
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(phone);
    card.appendChild(address);
    card.appendChild(website);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }


