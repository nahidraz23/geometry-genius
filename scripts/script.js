//Triangle area function
function triangleArea(){
   const base =  parseFloat(document.getElementById('tri-base').value);
   
   const height = parseFloat(document.getElementById('tri-height').value);

   const areaValue = document.getElementById('t-area');

   const area = 0.5 * base * height;

   areaValue.innerText = "The area of triangle is: " + area.toFixed(2);
}

//Rectangle Area function
function rectangleArea(){
    const width =  parseFloat(document.getElementById('rec-width').value);
    
    const length = parseFloat(document.getElementById('rec-length').value);
 
    const areaValue = document.getElementById('t-area');
 
    const area = width * length;
 
    areaValue.innerText = "The area of rectangle is: " + area.toFixed(2);
 }

 //Parallelogram Area function
function parallelogramArea(){
    const base =  parseFloat(document.getElementById('para-base').value);
    
    const height = parseFloat(document.getElementById('para-height').value);
 
    const areaValue = document.getElementById('t-area');
 
    const area = base * height;
 
    areaValue.innerText = "The area of parallelogram is: " + area.toFixed(2);
 }

//Rhombus Area function
function rhombusArea(){
    const d1 =  parseFloat(document.getElementById('rhom-d1').value);
    
    const d2 = parseFloat(document.getElementById('rhom-d2').value);
 
    const areaValue = document.getElementById('t-area');
 
    const area = 0.5 * d1 * d2;
 
    areaValue.innerText = "The area of rhombus is: " + area.toFixed(2);
 }

//Pentagon Area function
function pentagonArea(){
    const perimeter =  parseFloat(document.getElementById('pen-perimeter').value);
    
    const base = parseFloat(document.getElementById('pen-base').value);
 
    const areaValue = document.getElementById('t-area');
 
    const area = 0.5 * perimeter * base;
 
    areaValue.innerText = "The area of pentagon is: " + area.toFixed(2);
 }

 //Ellipse Area function
function ellipseArea(){
    const a =  parseFloat(document.getElementById('elli-a').value);
    
    const b = parseFloat(document.getElementById('elli-b').value);
 
    const areaValue = document.getElementById('t-area');
 
    const area = 3.1416 * a * b;
 
    areaValue.innerText = "The area of ellipse is: " + area.toFixed(2);
 }