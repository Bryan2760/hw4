const r = Number(prompt("Enter the circle radius:"))

const circle = {
  circumference : (2 * r * Math.PI),
  area: (Math.PI * r * r)
};

// TODO: create the circle object here

console.log(`Its circumference is ${circle.circumference}`);
console.log(`Its area is ${circle.area}`);
1