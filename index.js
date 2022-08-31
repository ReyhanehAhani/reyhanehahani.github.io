// get the sticky element
const stickyElm = document.querySelector('#sidebar')

const observer = new IntersectionObserver(
    ([e]) => { 
        console.log(e)
        if(e.intersectionRatio < 1) {
            e.target.classList.remove('sidebar-unstuck') 
            e.target.classList.add('sidebar-stuck') 
        } else {
            e.target.classList.add('sidebar-unstuck') 
            e.target.classList.remove('sidebar-stuck') 
        }
    },
    { threshold: [1] }
);

observer.observe(stickyElm)