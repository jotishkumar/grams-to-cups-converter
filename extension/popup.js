var U=[["g","grams","gram","g"],["cup","cups","cup","cups"],["tbsp","tablespoons","tablespoon","tbsp"],["tsp","teaspoons","teaspoon","tsp"],["oz","ounces","ounce","oz"]];
function $(id){return document.getElementById(id);}
I.forEach(function(i){$("ing").add(new Option(i[1],i[0]));});
U.forEach(function(u){$("from").add(new Option(u[3],u[0]));$("to").add(new Option(u[3],u[0]));});
$("to").value="cup";
function grams(v,u,g){return u=="g"?v:u=="oz"?v*28.349523:u=="cup"?v*g:u=="tbsp"?v*g/16:v*g/48;}
function fromG(x,u,g){return u=="g"?x:u=="oz"?x/28.349523:u=="cup"?x/g:u=="tbsp"?x/g*16:x/g*48;}
function fmt(x){if(!isFinite(x))return "–";var r=Math.round(x*100)/100;return r.toLocaleString("en-US",{maximumFractionDigits:2});}
function nm(v,u){var x=U.find(function(z){return z[0]==u;});return Math.round(v*100)/100==1?x[2]:x[1];}
function run(){var it=I.find(function(i){return i[0]==$("ing").value;}),g=it[2],v=parseFloat($("amt").value),out=$("out");
 out.textContent="";
 if(isNaN(v)){out.textContent="Enter an amount";return;}
 var f=$("from").value,t=$("to").value,r=fromG(grams(v,f,g),t,g);
 out.appendChild(document.createTextNode(fmt(v)+" "+nm(v,f)+" = "+fmt(r)+" "+nm(r,t)));
 var s=document.createElement("small");s.textContent=it[1]+" · 1 US cup = "+fmt(g)+" g";out.appendChild(s);}
["ing","amt","from","to"].forEach(function(id){$(id).addEventListener("input",run);});run();