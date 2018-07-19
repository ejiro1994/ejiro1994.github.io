
window.addEventListener('load', function(){

var listItems = document.querySelectorAll('.nav-links li');
var burgerItem = document.querySelector('.nav-links li:first-of-type');

burgerItem.addEventListener('click', function(){
  listItems.forEach(function(item, index){
    if (index === 0) return;

    item.classList.toggle('show');
  })
})

});
