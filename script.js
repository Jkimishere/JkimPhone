function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

console.log('hi');

const features= document.getElementById('features');
const wirelessRemoteCharging = document.getElementById('wirelessRemoteCharging');
const res = document.getElementById('512k');
const speed = document.getElementById('speed');
const storage = document.getElementById('storage');
const screen = document.getElementById('screen');
//const battery = document.getElementById('battery');
document.addEventListener('scroll', () => {
    console.log('scrolling')
    if(isInViewport(features)){
        console.log('in viewport');
        features.classList.add('animatedFeatures');
    }
    if(isInViewport(wirelessRemoteCharging)){
        console.log('in viewport');
        wirelessRemoteCharging.classList.add('animatedWirelessRemoteCharging');
    }
    if(isInViewport(res)){
        console.log('in viewport');
        res.classList.add('animatedRes');
    }
    if(isInViewport(speed)){
        console.log('in viewport');
        speed.classList.add('animatedSpeed');
    }
    if(isInViewport(storage)){
        console.log('in viewport');
        storage.classList.add('animatedStorage');
    }
    if(isInViewport(screen)){
        console.log('in viewport');
        screen.classList.add('animatedScreen');
    }
})
const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    if(confirm('This phone is not available to buy in 10 years haha, do you want to check out the credits?')){
        alert('Coder : Jkim')
        alert('Modeller : Jkim')
        alert('Designer : Jkim')
        alert('Visitor : You')

    }
})