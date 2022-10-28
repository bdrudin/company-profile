const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 600,
    interval: 2600
    
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

const materialbox = document.querySelectorAll('.materialboxed')

M.Materialbox.init(materialbox);

const scroll = document.querySelectorAll('.scrollspy');
console.log(scroll);
M.ScrollSpy.init(scroll, {
    scrollOffset: 70
});