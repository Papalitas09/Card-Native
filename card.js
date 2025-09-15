const BeforeContent = document.getElementById("before")
const AfterContent = document.getElementById("after")
const TextClick = document.getElementById("ClickMeText")
document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".nama-class-cardnye");

  card.addEventListener("mousemove", function (e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  });
});

HideContent(BeforeContent, 'hidden')
HideContent(TextClick, 'hidden')

function HoverMyselfBefore(){
    TextClick.style.visibility = 'visible'
}

function ClickedMuka()
{
    HideContent(BeforeContent, 'hidden')
    HideContent(AfterContent, 'visible')
}

function HideContent(name, value){
    name.style.visibility = value
}