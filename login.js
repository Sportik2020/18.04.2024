let login = document.querySelector('.LogIn');
login.addEventListener("click",() => {createLogin()});
function createLogin(){
    if(document.querySelector(".login") != null){ 
        document.querySelector(".login").remove();
    }
    let Menu = document.createElement('div');     
    Menu.classList.add("Logdiv"); 

    let Header = document.createElement('h2');    
    Header.innerText = "Войти";  
    Header.classList.add("Loginhead"); 

    let Name = document.createElement('input');   
    Name.type = "text"; 
    Name.placeholder = "username"; 
    Name.classList.add("loginen"); 
 
    let Passin = document.createElement('input');   
    Passin.type = "password"; 
    Passin.placeholder = "password"; 
    Passin.classList.add("loginen"); 
     
    let Buttondiv = document.createElement('div');   
    Buttondiv.classList.add("Divbutton");

    let Escape = document.createElement('button'); 
    Escape.innerText = '×'; 
    Escape.classList.add("escapebut");

    let Buttonlog = document.createElement('button');    
    let text = document.createElement("p");
    Buttonlog.classList.add("LButton"); 
    Buttonlog.innerText = "Login";
    Buttonlog.addEventListener('click',() => {confirm(Name.value,Passin.value,Passin,text)});
    Escape.addEventListener('click',() => {Menu.remove()});

    document.body.prepend(Menu);
    Menu.append(Header);
    Menu.append(Name);
    Menu.append(Passin);
    Menu.append(Buttondiv);
    Menu.append(Escape);
    Menu.append(Buttonlog);
}
function confirm(Name,Passw,el,text){ 
    fetch('https://fakestoreapi.com/auth/login',{ 
      method:'POST', 
      headers: { 
          'Content-Type': 'application/json' 
      }, 
      body:JSON.stringify({ 
          username: Name, 
          password: Passw 
      }) 
  })
  .then(res=>res.json()) 
  .then(json=>{ 
      logIn(json.token);  
  })
  .catch(() => { 
    if(document.querySelector(".flog") == null){ 
        text.innerText = "Имя или пароль введены неправильно"; 
        text.classList.add("Logfail") 
        el.after(text); 
    } 
  }) 
  }
  function logIn(token){ 
    localStorage.setItem("TOKEN",token); 
    document.body.classList.remove("log"); 
    if(document.querySelector(".Logdiv") != null){ 
        document.querySelector(".Logdiv").remove(); 
    }
}
let hide = document.querySelector('.LogIn');
login.addEventListener("click",() => {createLogin()});
