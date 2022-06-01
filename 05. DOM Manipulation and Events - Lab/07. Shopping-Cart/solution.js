function solve() {
   Array.from(document.getElementsByClassName('product-add')).forEach(p => p.addEventListener('click', add));

   function add(event) {
      console.log(event);
      console.log(event.target);
   }
}