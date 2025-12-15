var doc = document.querySelector(".login_container");
var muc = document.querySelector(".mouse");

doc.addEventListener("mousemove", function(dets){
muc.style.left = dets.x+"px";
muc.style.top = dets.y+"px";

})

doc.addEventListener("mouseenter", function(){
    muc.style.opacity = 1;
})

doc.addEventListener("mouseleave", function(){
    muc.style.opacity = 0;
})