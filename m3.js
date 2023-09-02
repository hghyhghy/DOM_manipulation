// to access the body of the html we use

const body = document.body;

console.log(body);

document.body.style.backgroundColor = 'red';

const box2 = document.getElementById('box-2');

console.log('box2');

const divs = document.getElementsByTagName('p');

console.log('divs');

console.log('box');

//changing the inner html by js

const box1 = document.getElementById('box-1');

box1.innerHTML = '<h3>HELLO</h3>';
box1.style.backgroundColor = 'yellow';

const boxa = document.getElementById('box-2');

boxa.style.backgroundColor = 'yellow';

const box0 = document.getElementById('box-3');

box0.style.backgroundColor = 'yellow';

const boxq = document.getElementById('box-4');

boxq.style.backgroundColor = 'yellow';

const boxes = document.getElementsByClassName('box');
{
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.add('round-border');
  }
}

// to remove a class from a container we use

//box1.classlist.remove();

//to create a new element using js

const p0 = document.createElement('p');

p0.innerText = 'This is Subham Sarkar';

p0.classList.add('box');

const p1 = document.getElementById('con');

// to append a new child inside a element

p1.appendChild(p0);
