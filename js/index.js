// onclick event
const burger = document.getElementById("nav-links")
const OnClick = () => {
    burger.classList.toggle('active')
}

function saveData() {
    const emailInput = document.getElementById('user-email')
    const value = emailInput.value

    if (!value) {
        alert("Введите email!")
        return
    }

    localStorage.setItem('userEmail', value)

    sessionStorage.setItem('userEmail', value)

    document.cookie = `userEmail=${value}; max-age=604800`
}



//mousemove event
const glow = document.getElementById('glow')
const heroImg = document.querySelector('.info__img img')

window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px'
    glow.style.top = e.clientY + 'px'

    if (heroImg) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01
        
        heroImg.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${-moveY * 0.5}deg) rotateY(${moveX * 0.5}deg)`
    }
})



//scroll event
window.onscroll = function() {
    let scroll = document.documentElement.scrollTop
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrolled = (scroll / height) * 100
    
    document.getElementById("progress-line").style.width = scrolled + "%"
}

if (document.documentElement.scrollTop > 300) {
    document.getElementById("up-btn").style.display = "block"
} else {
    document.getElementById("up-btn").style.display = "none"
}