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
    <div class="user-interacions">
        <div class="search-box">
            <input type="text" class="search" placeholder="search holder">
            <button class="search-btn">
                <img src="./img/search.png" alt="" class="cart-icon">
            </button>
        </div>
        <div class="cart" onclick="location.href='/cart'">
            <img src="./img/cart.png" alt="" class="cart-icon">
            <span class="cart-item-cpunt">00</span>
        </div>
        <div class="user">
            <img src="./img/user-icon.png" alt="" class="user-icon">
            <div class="user-icon-popup">
                <p>Login to your account</p>
                <p>Login</p>
            </div>
        </div>
    </div>
    `
}

createNavbar()

//user icon pop

let usericon = document.querySelector('.user-icon')
let userPopupIcon = document.querySelector('.user-icon-popup')

usericon.addEventListener('click', () => {
    userPopupIcon.classList.toggle('active')
})

let text = userPopupIcon.querySelector('p')
let actionBtn = userPopupIcon.querySelector('a')
let user = JSON.parse(sessionStorage.user || null)

if(user != null){
    text.innerHTML = `log in as, $(user.name)`
    actionBtn.innerHTML = `login`
    actionBtn.addEventListener('click', () => {
        longOut()
    })
}else{
    text.innerHTML = 'log in to your account'
    actionBtn.innerHTML = `login`
    actionBtn.addEventListener('click', () => {
        location.href('/login')
    })
    
}

const longOut = () => {
    sessionStorage
}