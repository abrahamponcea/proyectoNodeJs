const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    console.log('scroll', scrollY)
    if(scrollY => 180){
        navbar.classList.add('bg')
    }else{
        navbar.classList.remove('bg')
    }
})

const createNavbar = () => {
    navbar.innerHTML += 
    `
        <ul class="links-container">
            <li class="link-item">
                <a href="#" class="link active">Home</a>
            </li>
            <li class="link-item">
                <a href="#">Product</a>
            </li>
            <li class="link-item">
                <a href="#">About</a>
            </li>
            <li class="link-item">
                <a href="#"">Contact</a>
            </li>
        </ul>
    `
}

createNavbar()