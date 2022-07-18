//-----------------------------get cards from json --------------------------------- //

const requestURL = 'json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    temples.forEach(displaytemples);
  });


  function displaytemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('div');
    let photo = document.createElement('img');
    let h3 = document.createElement('h3');
    let email = document.createElement('p');
    let phone = document.createElement('p');
    let address = document.createElement('p');
    let services = document.createElement('p');
    let history = document.createElement('p');
    let closure = document.createElement('p');
    let ulServices = document.createElement('ul');
    let ulHistory = document.createElement('ul');
    let ulClosure = document.createElement('ul');
    let star = document.createElement('img');
    let starLike = document.createElement('img');
    let starButton = document.createElement('button');

    temple.services.forEach( element => {
        let li = document.createElement('li');
        li.textContent = `${element}}`;
        ulServices.appendChild(li); 
    } )
    temple.history.forEach( element => {
        let li = document.createElement('li');
        li.textContent = `${element}}`;
        ulHistory.appendChild(li); 
    } )
    temple.templeClosureSchedule.forEach( element => {
        let li = document.createElement('li');
        li.textContent = `${element}}`;
        ulClosure.appendChild(li); 
    } )

    photo.setAttribute('src', temple.image);
    photo.setAttribute('alt', `logo of ${temple.name}`);
    photo.setAttribute('loading', 'lazy');

    star.setAttribute('src', "images/star.png");
    star.setAttribute('alt', `logo of star`);

    starLike.setAttribute('src', "images/star_like.png");
    starLike.setAttribute('alt', `logo of star`);

    starButton.appendChild(star);
    starButton.appendChild(starLike);    
  
    h3.textContent = `${temple.name}`;
    email.innerHTML = `<a href="${temple.emailLink}">${temple.email}</a>`;
    phone.textContent = `${temple.phone}`;
    address.textContent = `${temple.address}`;
    services.textContent = `Services`;
    history.textContent = `History`;
    closure.textContent = `Temple Closure Schedule`;
    
    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
    card.appendChild(starButton)
    card.appendChild(photo);
    card.appendChild(address);
    card.appendChild(email);
    card.appendChild(phone);
    card.appendChild(services);
    card.appendChild(ulServices);
    card.appendChild(history);
    card.appendChild(ulHistory);
    card.appendChild(closure);
    card.appendChild(ulClosure);

    document.querySelector('div.cards').appendChild(card);
  }


