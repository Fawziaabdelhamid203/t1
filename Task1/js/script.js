let f= "fatma";

console.log(f.length);

 let j= "fatma";
 console.log(j.indexOf('m'));

let e= "fatma";
console.log(e.lastIndexOf('a'));


 let k= "fatma";
 console.log(k.search('t'));

 let r= "fatma";
 console.log(r.indexOf('a',2));
  
// بترجع قبل النهايه بواحد
 let w= "my name is shrouk";
console.log(w.slice(8,10));
 

 let o= "my name is shrouk";
 console.log(o.substring(0,2));
 

let n= "my name is shrouk";
 console.log(n.replace('name','new'));


 let l= "my name is shrouk";
 console.log(l.toUpperCase());


 let H= "My Name Is Shrouk";
 console.log(H.toLowerCase());


 let c= 5.67588494;
 console.log(c.toFixed(1));

 let v= 3456456789;
 console.log((v.toString()).replace('3','4'));

console.log(Date());

 document.getElementById('mybtn').onclick= displaydate;
 function displaydate(){
    document.getElementById('demo').innerHTML=Date();
 }










 
