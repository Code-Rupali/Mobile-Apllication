
// Mobile Class: Represents a Mobile
class Mobile {
  constructor(name, brand, price,color,ram,rom) {
  this.name = name;
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.ram = ram;
    this.rom = rom;
  
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayMobiles() {
    const mobiles = Store.getMobiles();
      mobiles.forEach((mobile) => UI.addMobileToList(mobile));
    
  }

  static addMobileToList(mobile) {
    const list = document.querySelector('#mobilelist');

    const row = document.createElement('tr');
row.classList.add(`${mobile.brand}`);
if(mobile.price>=1000 && mobile.price<10000){
  row.classList.add("low");
}
else if(mobile.price>=10000 && mobile.price<25000){
row.classList.add("med");
}
else{
  row.classList.add("high");
}
    row.innerHTML = `
     <td>${mobile.name}</td> 
      <td>${mobile.brand}</td>
      <td>${mobile.price}</td>
       <td>${mobile.color}</td>
      <td>${mobile.ram}</td>
      <td>${mobile.rom}</td>
     
      <td><a href="#" class="close">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteMobile(el) {
    if(el.classList.contains('delete')) {
   
        el.parentElement.parentElement.remove();
      
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#mobile_form');
    container.insertBefore(div, form);

    // Vanish in 1 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 1000);
  }

  static clearFields() {
    document.querySelector('#name').value = '';
    document.querySelector('#brand').value = '';
    document.querySelector('#price').value = '';
    document.querySelector('#color').value = '';
    document.querySelector('#ram').value = '';
    document.querySelector('#rom').value = '';
    
  }
}

// Store Class: Handles Local Storage
class Store {
  static getMobiles() {
    let mobiles;
    if(localStorage.getItem('mobiles') === null) {
      mobiles = [];
    } else {
      mobiles = JSON.parse(localStorage.getItem('mobiles'));
    }

    return mobiles;
  }

  static addMobile(mobile) {
    const mobiles = Store.getMobiles();
    mobiles.push(mobile);

    localStorage.setItem('mobiles', JSON.stringify(mobiles));
  }

  static removeMobile(name) {
    const mobiles = Store.getMobiles();

    mobiles.forEach((mobile, index) => {
      if(mobile.name === name) {
        mobiles.splice(index, 1);
      }
    });

    localStorage.setItem('mobiles', JSON.stringify(mobiles));
  }
}

// Event: Display Mobiles


// Event: Add a Mobile
document.querySelector('#mobile_form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const name = document.querySelector('#name').value;
  const brand = document.querySelector('#brand').value;
  const price = document.querySelector('#price').value;
const color = document.querySelector('#color').value;
  const ram = document.querySelector('#ram').value;
  const rom = document.querySelector('#rom').value;
 
  // Validate
  if(name === '' || brand === '' || price === '' || color === '' || ram === '' || rom === '') {
    UI.showAlert('Please fill in all fields','danger');
  } else {
    // Instatiate mobile
    const mobile = new Mobile(name,brand,price,color,ram,rom);

    // Add Mobile to UI
    UI.addMobileToList(mobile);

    // Add mobile to store
    Store.addMobile(mobile);

    // Show success message
    UI.showAlert('Mobile Added', 'success');

    // Clear fields
  
   UI.clearFields();
   
  
  
  }
});
 document.addEventListener('DOMContentLoaded', UI.displayMobiles('All'));
// Event: Remove a Mobile
document.querySelector('#mobilelist').addEventListener('click', (e) => {
  // Remove mobile from UI
  UI.deleteMobile(e.target);

  // Remove mobile from store
  
  Store.removeMobile(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

  // Show success message
  UI.showAlert('Mobile Removed','danger');
});



// display setting....

const header = document.querySelector('header'); 

const addbtn = document.querySelector('.additeams')
const mobileiteams = document.querySelector('form');
const iteams = document.querySelector('table');
addbtn.addEventListener('click',()=>{
    mobileiteams.classList.add('ho');
    header.classList.add('inactive');
    iteams.classList.remove('show');
});
const close = document.querySelector('.close').addEventListener('click',()=>{
     mobileiteams.classList.remove('ho');
     header.classList.remove('inactive');
})

const displaybtn = document.querySelector('.displayiteams');

displaybtn.addEventListener('click',()=>{
mobileiteams.classList.remove('ho');
    header.classList.add('inactive');
    iteams.classList.add('show');
})

// Filtter option (need to be fixed)
const filterMobiles = document.querySelector('.filterMobiles');
filterMobiles.addEventListener('click',(e)=>{
 
  const mobiles = document.querySelectorAll('tbody tr');
 console.log(mobiles);
switch(e.target.value){
  case 'all':
   mobiles.forEach((mobile)=> {
    
    
   mobile.style.display = 'flex';}
 )
    break;
    case 'nokia':
    mobiles.forEach((mobile)=> {
      if(mobile.classList.contains('nokia')){
            mobile.style.display = 'flex';      
      }
      else{
        mobile.style.display = 'none'; 
      }
   }
 )
break;
case 'iphone':
    mobiles.forEach((mobile)=> {
      if(mobile.classList.contains('iphone')){
            mobile.style.display = 'flex';      
      }
      else{
        mobile.style.display = 'none'; 
      }
   }
 )
break;
case 'onePlus':
   mobiles.forEach((mobile)=> {
      if(mobile.classList.contains('oneplus')){
            mobile.style.display = 'flex';      
      }
      else{
        mobile.style.display = 'none'; 
      }
   }
 )
break;

case 'low':
  mobiles.forEach((mobile)=> {
      if(mobile.classList.contains('low')){
            mobile.style.display = 'flex';      
      }
      else{
        mobile.style.display = 'none'; 
      }
   }
 )
break;
case 'med':
      mobiles.forEach((mobile)=> {
      if(mobile.classList.contains('med')){
            mobile.style.display = 'flex';      
      }
      else{
        mobile.style.display = 'none'; 
      }
   }
 )
break;

case 'high':
      mobiles.forEach((mobile)=> {
      if(mobile.classList.contains('high')){
            mobile.style.display = 'flex';      
      }
      else{
        mobile.style.display = 'none'; 
      }
   }
 )
break;
}})

