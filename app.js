
window.onload = () => {
}
const grid = document.querySelector('.grid');

const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    gutter:10,
    columnWidth:10,
    originLeft:false,
    originTop:false,
});