# DOM manipulation (Document object model)

### Table of Content
- [1. getElementById](#1-getElementById)
- [2. getElementsByTagName](#2-getElementsByTagName)
- [3. getElementsByClassName](#3-getElementsByClassName)
- [4. querySelector](#4-querySelector)
- [5. querySelectorAll](#5-querySelectorAll)
- [Traverse DOM](#Traverse-DOM)
    - [1. parentNode](#1-parentNode)
    - [2. childNodes](#2-childNodes)
    - [3. nextElementSibling](#3-nextElementSibling)
    - [4. previousElementSibling](#4-previousElementSibling)
- [Manipulation](#Manipulation)
- [Create elements](#Create-elements)
- -[DOM events(Example)](#DOM-events)

## 1. getElementById

```js
const heading = document.getElementById('heading');
console.log(heading);
```

## 2. getElementsByTagName

```js
const heading = document.getElementsByTagName('h1');
```

## 3. getElementsByClassName

```js
const heading = document.getElementsByClassName('heading');
```

## 4. querySelector

```js
const heading = document.querySelector('.heading');
```

## 5. querySelectorAll

```js
const heading = document.querySelectorAll('.heading');
console.log(heading);
```

# Traverse DOM

## 1. parentNode
```js
const heading = document.querySelector('.heading');
const parent = heading.parentNode;
console.log(parent);
```

## 2. childNodes
```js
const parent = document.querySelector('.parent');
console.log(parent.childNodes);
```

## 3. nextElementSibling
```js
const heading = document.querySelector('.heading');
console.log(heading.nextElementSibling);
```

## 4. previousElementSibling
```js
const subHeading = document.querySelector('h3');
console.log(subHeading.previousElementSibling);
```

# Manipulation
```js
const heading = document.querySelector('.heading');
heading.innerHTML = 'Web dev is awesome!';
heading.style.color = 'red';
heading.style.fontSize = '100px';
heading.classList.add('title');
heading.classList.remove('heading');
```

## Create elements
```js
const heading = document.createElement('h1');
heading.innerHTML = 'Javascript is awesome!';
heading.classList.add('title');
const parent = document.querySelector('.parent');
parent.appendChild(heading);

const subHeading = document.createElement('h3');
subHeading.innerHTML = 'Web dev is awesome!';
heading.insertAdjacentElement('afterend', subHeading);

console.log(heading);
```

# DOM events
```js
const button = document.querySelector('#btn');
const heading = document.querySelector('#heading');

button.addEventListener('click', function (event) {
    heading.style.color = 'purple';
    heading.style.fontSize = '60px';
    console.log('button clicked', event);
});

const bulbSwitch = document.querySelector('#bulbSwitch');
const bulb = document.querySelector('#bulb');

bulbSwitch.addEventListener('click', function () {
    console.log(bulb.src);
    if (bulb.src.match('off')) {
        bulb.src = './bulb-on.gif';
        bulbSwitch.innerHTML = 'Turn OFF';
    } else {
        bulb.src = './bulb-off.gif';
        bulbSwitch.innerHTML = 'Turn ON';
    }
});

const root = document.querySelector('#root');
const button = document.querySelector('button');

function createItem(item) {
    // Card
    const card = document.createElement('div');
    card.classList.add('card');

    // Photo
    const photo = document.createElement('img');
    photo.src = item.thumbnailUrl;

    // title
    const title = document.createElement('h4');
    title.innerHTML = item.title;
    card.appendChild(photo);
    card.appendChild(title);
    root.appendChild(card);
}

function displayImages(items) {
    items.forEach(function (item) {
        createItem(item);
    });
}

button.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((res) => res.json())
        .then((items) => {
            displayImages(items);
        });
});
```

📂 `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dom manipulation</title>
    <style>
        button {
            width: 100px;
        }
    </style>
</head>
<body>
<!--     <div>
        <img id="bulb" src="./bulb-off.gif" alt="bulb-off">
        <button id="bulbSwitch">Turn ON</button>
    </div> -->
<button>Get Images</button>
<div id="root">

</div>
    <script src="./script.js"></script>
</body>
</html>
```
