function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const features= document.getElementById('features');

features.onload = function(){
    console.log('hi hi hi');
}

document.addEventListener('scroll,', function(){
    console.log('aaa')
    if(isInViewport(features)){
        console.log('in viewport');
        features.classList.add('animatedFeatures');
    }
})