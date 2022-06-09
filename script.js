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
})