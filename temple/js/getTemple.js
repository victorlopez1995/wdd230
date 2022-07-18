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
    // for (var i = 0; i < temple.services.prototype.lenght-1; i++) {
    //     let li = document.createElement('li');
    //     li.textContent = `${temple.services[i]}`;
    //     u
    //     ulServices.appendChild(li);
    // }
    // for (var i = 0; i < temple.history.prototype.lenght-1; i++) {
    //     let li = document.createElement('li');
    //     li.textContent = `${temple.history[i]}`;
    //     ulHistory.appendChild(li);
    // }
    // for (var i = 0; i < temple.templeClosureSchedule.prototype.lenght-1; i++) {
    //     let li = document.createElement('li');
    //     li.textContent = `${temple.templeClosureSchedule[i]}`;
    //     ulClosure.appendChild(li);
    // }

    photo.setAttribute('src', temple.image);
    photo.setAttribute('alt', `logo of ${temple.name}`);
    photo.setAttribute('loading', 'lazy');
  
    h3.textContent = `${temple.name}`;
    email.innerHTML = `<a href="${temple.emailLink}">${temple.email}</a>`;
    phone.textContent = `${temple.phone}`;
    address.textContent = `${temple.address}`;
    services.textContent = `Services`;
    history.textContent = `history`;
    closure.textContent = `temple closure schedule`;
    
    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
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


