
 let random = (Math.random());
 let random1 = (Math.random());
 let random2 = (Math.random());

 let adjective;
 let shop;
 let word;
 console.log(random);
 if(random <= 0.33){
   adjective ="Crazy";
 }
 else if(random <= 0.66){
   adjective ="Amazing";
 }
 else{
    adjective ="Fire";
 }

  if(random1 <= 0.33){
     shop ="Foods"
 }
 else if(random1 <= 0.66){
     shop ="Engine"
 }
 else{
     shop ="Garments"
 }

  if(random2 <= 0.33){
     word ="Bros"
 }
 else if(random2 <= 0.66){
    word ="Limited"
 }
 else{
     word ="Hub"
 }
 console.log(`${adjective } ${shop} ${word}`);
//  alert(`${adjective } ${shop} ${word}`);