var svgMorph = new SVGMorpheus("#icons");
var btn = document.getElementById("icons")
var current = "menu"
var isMorphing = false
var callback = () => isMorphing = false
btn.addEventListener("click",() => {
    if (!isMorphing){
        isMorphing = true
    if(current === "menu")
        collapse()
    else
        expand()
    current = current === "menu" ? "close" : "menu"
    }
})
var container = $("#menu-container-collapsed")
var animation = anime({
    targets: 'div#menu-subcontainer-expanded',
    scale: [0,1],
    easing: 'easeInOutQuad',
    autoplay: false
})
function collapse(){
    svgMorph.to('close',{},callback)
    if(animation.reversed)
        animation.reverse()
    animation.play()
}
function expand(){
    svgMorph.to('menu',{},callback)
    if(!animation.reversed)
        animation.reverse()
    animation.play()
}