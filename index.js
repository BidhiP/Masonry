// external js: masonry.pkgd.js

var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  columnWidth: 160,
  itemSelector: '.grid-item'
});

var appendButton = document.querySelector('.append-button');
appendButton.addEventListener( 'click', function() {
  // create new item elements
  var elems = [];
  var fragment = document.createDocumentFragment();
  for ( var i = 0; i < 3; i++ ) {
    var elem = getItemElement();
    fragment.appendChild( elem );
    elems.push( elem );
  }
  // append elements to container
  grid.appendChild( fragment );
  // add and lay out newly appended elements
  msnry.appended( elems );
});

// create <div class="grid-item"></div>
function getItemElement() {
  var elem = document.createElement('div');
  var wRand = Math.random();
  var hRand = Math.random();
  var widthClass = wRand > 0.8 ? 'grid-item--width3' : wRand > 0.6 ? 'grid-item--width2' : '';
  var heightClass = hRand > 0.85 ? 'grid-item--height4' : hRand > 0.6 ? 'grid-item--height3' : hRand > 0.35 ? 'grid-item--height2' : '';
  elem.className = 'grid-item ' + widthClass + ' ' + heightClass;
  return elem;
}
