
function add(x,y,z){
  if (z == "+"){
    a = (x + y);
    return (a);
  };
  if (z == "-"){
    b = (x - y)
    return (b)
  };
  if (z == "*"){
    c = (x * y)
    return (c)
  };
  if (z == "/"){
    d = (x/y)
    return (c)
  }
    
}
let x = Number(prompt());
let y = Number(prompt());
let z = (prompt());
sum = add(x,y,z);
console.log(sum);



