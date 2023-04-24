var accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(function(header) {
  header.addEventListener('click', function() {
    var accordionItem = this.parentNode;
    if (accordionItem.classList.contains('active')) {
      accordionItem.classList.remove('active');
    } else {
      accordionHeaders.forEach(function(item) {
        item.parentNode.classList.remove('active');
      });
      accordionItem.classList.add('active');
    }
  });
});