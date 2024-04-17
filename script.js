let mas = [];
let el = document.querySelector('.content');

let filterAfter = document.querySelector(".filterAfter");
let filter = document.querySelector("div.filter");

let electron = document.querySelector("#electron");
let bitov = document.querySelector("#bitov");
let dress = document.querySelector("#dress");
let duxi = document.querySelector("#duxi");

let samsung = document.querySelector("#sams");
let bork = document.querySelector("#bork");
let nokia = document.querySelector("#nokia");
let jew = document.querySelector('.sho');
let alle = document.querySelector('.vse');
let mens = document.querySelector('.cloth');
let wom = document.querySelector('.cloth2');
let elec = document.querySelector('.electr');
let idCard = []; 
let CartMas = []; 
let index = []; 
let sum = document.createElement('p');
let buy = document.querySelector('.cart'); 
let empty = document.querySelector('.clear_shop');
let anim = document.querySelector('.korzina');  

jew.addEventListener('click', () => {fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
     console.log(json);
     filterBox(json,"jewelery");  
})})

alle.addEventListener('click', () => {fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
     console.log(json);
     createCards(json);
     el.style.height = 170 +'vw'; 
})})

mens.addEventListener('click', () => {fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
     console.log(json);
     filterBox(json,"men's clothing");  
})})

wom.addEventListener('click', () => {fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
     console.log(json);
     filterBox(json,"women's clothing");  
})})

elec.addEventListener('click', () => {fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
     console.log(json);
     filterBox(json,"electronics");  
})})

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
     console.log(json);
     createCards(json);
})

function createCards(obj) { 
  deleteCards();
  for(i = 0; obj.length > i; i++){
    CreateCards2(obj[i]);
  }
}
let objArray = [];
function CreateCards2(obj) {
     objArray.push(obj);
     let card = document.createElement('div');
     card.classList.add("cards");
     card.id = "cards";

    let img = document.createElement('img');
    img.src = obj.image;
    img.classList.add("kartina");
    img.id = "cards";

    let titl = document.createElement('h3');
    titl.innerText = obj.title;
    titl.classList.add("tie");
    titl.id = "cards";
    
    let descrip = document.createElement('p');
    descrip.innerText = obj.description;
    descrip.classList.add("desc");
    descrip.id = "cards";
    
    let pric = document.createElement('span');
    pric.innerText = `${obj.price} $`;
    pric.classList.add("price");
    pric.id = "cards ";

    let but1 = document.createElement('button');
    but1.innerText = `В корзину`;
    but1.classList.add("button1");
    but1.id = "cards";

    el.append(card);
    card.append(img);    
    card.append(titl);
    card.append(descrip);
    card.append(pric);
    card.append(but1);
    img.addEventListener('click', () => {ShowDescrip(obj);el.style.height = 40 +'vw'})
    but1.addEventListener('click', () => {AddToShop(but1,objArray,obj.id,obj);}) 
}
function ShowDescrip(obj){
  deleteCards();
  let opisanie = document.createElement('div');
  opisanie.classList.add('description');
  opisanie.id = 'cards';


  let img = document.createElement('img');
  img.src = obj.image;
  img.classList.add("kartina2");
  img.id = "cards";

  let titl = document.createElement('h3');
  titl.innerText = obj.title;
  titl.classList.add("tie2");
  titl.id = "cards";
  
  let descrip = document.createElement('p');
  descrip.innerText = obj.description;
  descrip.classList.add("desc2");
  descrip.id = "cards";
  
  let pric = document.createElement('span');
  pric.innerText = `${obj.price} $`;
  pric.classList.add("price2");
  pric.id = "cards ";

  el.append(opisanie);
  opisanie.append(titl);
  opisanie.append(img);
  opisanie.append(descrip);
  opisanie.append(pric);
}
let k;
function filterBox(obj,str) {
    deleteCards();
    k = 1;
    for (i = 0; i < obj.length; i++) {
        if(obj[i].category == str){
            console.log(k)
            k++;
            CreateCards2(obj[i]);
        }
    }
    windowChange(k);
}
function deleteCards() {
    let cards = document.querySelectorAll('#cards');
    for (i = 0; i < cards.length; i++) {
        cards[i].remove();
    }
}
function windowChange(k){
     if(k<=9 && k>0){
        el.style.height = 50 +'vw';
     }
  }

function AddToShop(but1,objArray,id,obj){
     but1.innerText = 'Добавить ещё..';
     but1.classList.add("but_after_buy");
    empty.remove();
     let check = true;
     if(objArray.lenght){
         for(let item of CartMas){
             if(item.idCard == id){
               item.count++;
               check = false;
          }
             if(check){
                 CartMas.push({
                    idCard: id,
                    count: 1
                })            
               }
          }
     }
else{
     CartMas.push({
          idCard: id,
          count: 1
         })
     }
/*        for(i = 0; CartMas.length > i; i++){
         for (i = 0; objArray.length > i; i++){ 
             if(objArray.id == CartMas.idCard){
               CreateCartCard(obj, CartMas.count);
               console.log(1)
             }
        }  
    }  */
/*     CartMas.forEach(item => { 
        for (const obj of objArray) { 
          if(idCard.idCard == item.id)CreateCartCard(obj, item.count);
        } 
    });   */
}
buy.addEventListener("click", () => {
     anim.classList.toggle('animkorz');
    empty.innerText = '';
    sum.innerText = '';
    if( CartMas.length == 0){
    empty.innerText = 'Здесь пока ничего нет';
    } 
});   
function CreateCartCard(obj,count = 0){ 
    let card2 = document.querySelector('.korzina');
    card2.id = obj.id;

    let col = document.createElement('span');
    col.innerText = count; 

    let clear = document.querySelector('.clear_shop')

    let titl = document.createElement('h3');
    titl.innerText = obj.title;
    titl.classList.add("tie2");
    titl.id = "cards";

    el.prepend(card2);
    card2.prepend(clear);
    card2.prepend(titl);

}
/* 
    let img = document.createElement('img');
    img.src = obj.image;
    img.classList.add("kartina");
    img.id = "cards";

    let titl = document.createElement('h3');
    titl.innerText = obj.title;
    titl.classList.add("tie");
    titl.id = "cards";
    
    let descrip = document.createElement('p');
    descrip.innerText = obj.description;
    descrip.classList.add("desc");
    descrip.id = "cards";
    
    let pric = document.createElement('span');
    pric.innerText = `${obj.price} $`;
    pric.classList.add("price");
    pric.id = "cards ";

    let but1 = document.createElement('button');
    but1.innerText = `В корзину`;
    but1.classList.add("button1");
    but1.id = "cards";    card.append(descrip);
    card.append(pric);
card.append(but1);

     card.append(img); */
