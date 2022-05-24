const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    const myitem = input.value;
    if (myitem !== "" ){
        input.value = '';
        const myli = document.createElement('li');
        const mybutton = document.createElement('button');
        myli.textContent = myitem;
        mybutton.textContent = '❌';
        myli.appendChild(mybutton);
        list.appendChild(myli);
        mybutton.addEventListener('click', ()=>{
            return myli.remove();
        })
    }
input.focus()
})
