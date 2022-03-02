const articles = [
  {
    id: "article1",
    image: "./image-4.jpeg",
    title: "Sara",
    prof: "Front-End Developer",
    age: "19",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
  },
  {
    id: "article2",
    image: "./100faces00.jpg",
    title: "Natasha",
    prof: "Front-End Developer",
    age: "19",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
  },
  {
    id: "article3",
    image: "./face.jpg",

    title: "Victor",
    prof: "Front-End Developer",
    age: "19",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
  }
  
];

const main = document.querySelector('main');
articles.forEach(article => {
  const div = document.createElement('div')
  const h1 = document.createElement('h1');
  const articleElement = document.createElement('article');
  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const h3 = document.createElement('h3')
  const h4 = document.createElement('h4') 
  img.style.width = "250px";

  articleElement.id = article.id;
  h2.textContent = article.title;
  h3.textContent = article.age;
  h4.textContent = article.prof;
  img.src = article.image;
  p.textContent = article.body;
 
  h1.id = article.id2  

  articleElement.append(h2);
  articleElement.append(h4);
  articleElement.append(h3);
  articleElement.prepend(img);
  articleElement.append(p);
  div.append(h1);
  div.append(articleElement)
  main.append(div);
});
let article1 = document.querySelectorAll('article1');

document.getElementById('article1').addEventListener('click', function() {
   
  article1.style.color = "red";
  article1style.width = "300px"
});
let article2 = document.getElementById('article2');

document.getElementById('article2').addEventListener('click', function() {

})
let article3 = document.getElementById('article3');
document.getElementById('article3').addEventListener('click', function() {
 
})
