const app = function () {

  const allCats = [
    {
      name: "Joe",
      favouriteFood: "Fish",
      imglink: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Sus_Barbatus%2C_the_Bornean_Bearded_Pig_%2812616351323%29.jpg'
    },
    {
      name: "Jimmy",
      favouriteFood: "Golden Nuggets",
      imglink: 'https://uproxx.files.wordpress.com/2016/11/mrs-doubtfire.jpg?quality=100&w=650'
    },
    {
      name: "Kimmy",
      favouriteFood: "Eggs",
      imglink: 'https://media1.popsugar-assets.com/files/thumbor/4edwqBk_Sean6WBUgtQkQ_DH_ks/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/04/17/780/n/1922283/5d94d17414e92e4c_thumb_temp_image346027521397756352/i/Mrs-Doubtfire-Funny-GIFs.jpg'
    }
  ];

  const image = "";

  for(let animal of allCats) {
    addInfo(animal.name, animal.favouriteFood, animal.imglink);
  }
}

const addInfo = function (name, favouriteFood, imglink) {
  const list1 = createElement('li', name)
  const list2 = createElement('li', favouriteFood)
  const list3 = createElement('li')

  const img = document.createElement('img');
  img.src = imglink;
  img.className ="derp";

  list3.appendChild(img);

  const ul = createElement('ul');

  ul.appendChild(list1);
  ul.appendChild(list2);
  ul.appendChild(list3);

  document.querySelector('#cats').appendChild(ul)
}

const createElement = function (element, text) {
  const elem = document.createElement(element)

  if(text !== undefined) {
    elem.innerText = text
  }
  return elem
}

const appendElement = function (elementToAttach, parentElement) {
  parentElement.appendChild(elementToAttach)
}

document.addEventListener('DOMContentLoaded', app);
