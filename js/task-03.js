const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

  
  const imagesArrayEl = images.map (image => {
    const liEl = document.createElement('li');
    const thumbEl = document.createElement('div');
    thumbEl.classList.add('img-thumb')

    console.log(thumbEl);
    const imageEl = document.createElement('img');
    newImageEl.src = image.url;
    newImageEl.alt = image.alt;

    thumbEl.appendChild(newImageEl)
    newLiEl.appendChild(thumbEl);

    return newImageEl;
  })

  const ulEl = document.querySelector ('#gallery');

  ulEl.append (...imagesArrayEl);
