const container = document.querySelector('.container')

const squareHover = (e) => {
   if (!e.target.classList.contains('blue')) {
    e.target.classList.toggle('hover2')
    // e.target.classList.remove('hover1')
   } 
}


container.addEventListener('mouseover', squareHover)