let covervideo = document.getElementById('covervideo');

let onasbtn = document.getElementById('onasbtn');
let orgdiv = document.getElementById('orgdiv');
let oceniadiv = document.getElementById('oceniadiv');
let histdiv = document.getElementById('histdiv');

onasbtn.addEventListener('click', () =>{
    if(orgdiv.style.display === 'block') {
          const keyframes = [
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-1500px)' }
          ];
          const casovanie = {
            duration: 1000,
            iterations: 1,
            easing: "cubic-bezier(0.42, 0, 0.58, 1)",
          }
          orgdiv.animate(keyframes, casovanie);
          setTimeout(function(){
            orgdiv.style.display = 'none';
          },1000); 
    }else {
          orgdiv.style.display = 'block';
          const keyframes = [
            { transform: 'translateX(-1000px)' },
            { transform: 'translateX(0px)' }
          ];
          const casovanie = {
            duration: 1000,
            iterations: 1,
            easing: "cubic-bezier(0.42, 0, 0.58, 1)",
          }
          orgdiv.animate(keyframes, casovanie);

        }
    if(clenovia.style.display === 'block') {
          const keyframes = [
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-1000px)' }
          ];
          const casovanie = {
            duration: 1000,
            iterations: 1,
            easing: "cubic-bezier(0.42, 0, 0.58, 1)",
          }
          clenovia.animate(keyframes, casovanie);
          setTimeout(function(){
            clenovia.style.display = 'none';
          },1000); 
    }else {
          clenovia.style.display = 'block';
          const keyframes = [
            { transform: 'translateX(-1500px)' },
            { transform: 'translateX(0px)' }
          ];
          const casovanie = {
            duration: 1000,
            iterations: 1,
            easing: "cubic-bezier(0.42, 0, 0.58, 1)",
          }
          clenovia.animate(keyframes, casovanie);

        }
    if(oceniadiv.style.display === 'block') {
            const keyframes = [
              { transform: 'translateX(0px)' },
              { transform: 'translateX(1500px)' }
            ];
            const casovanie = {
              duration: 1000,
              iterations: 1,
              easing: "cubic-bezier(0.42, 0, 0.58, 1)",
            }
            oceniadiv.animate(keyframes, casovanie);
            setTimeout(function(){
              oceniadiv.style.display = 'none';
            },1000); 
            
      }else {
            oceniadiv.style.display = 'block';
            const keyframes = [
              { transform: 'translateX(1000px)' },
              { transform: 'translateX(0px)' }
            ];
            const casovanie = {
              duration: 1000,
              iterations: 1,
              easing: "cubic-bezier(0.42, 0, 0.58, 1)",
            }
            oceniadiv.animate(keyframes, casovanie);
      }
    
    if(histdiv.style.display === 'block') {
            const keyframes = [
              { transform: 'translateX(0px)' },
              { transform: 'translateX(1000px)' }
            ];
            const casovanie = {
              duration: 1000,
              iterations: 1,
              easing: "cubic-bezier(0.42, 0, 0.58, 1)",
            }
            histdiv.animate(keyframes, casovanie);
            setTimeout(function(){
              histdiv.style.display = 'none';
            },900); 
      }else {
            histdiv.style.display = 'block';
            const keyframes = [
              { transform: 'translateX(1500px)' },
              { transform: 'translateX(0px)' }
            ];
            const casovanie = {
              duration: 1000,
              iterations: 1,
              easing: "cubic-bezier(0.42, 0, 0.58, 1)",
            }
            histdiv.animate(keyframes, casovanie);
    }
  const StopClikOnMenu = document.getElementById('StopClikOnMenu');
  StopClikOnMenu.style.display = 'block';
  let zmenDivDisplaysdf = () => {
    StopClikOnMenu.style.display = 'none';
  }
  
  setTimeout(zmenDivDisplaysdf, 2000)
});
function slideorg(){
  const slideshowimages = document.querySelectorAll(".slideshow");

  const timedelay = 4000;
  let currentImageCounter = 0;
  
  slideshowimages[currentImageCounter].style.display = "block";
  
  setInterval(nextImage, timedelay)
  
  function nextImage(){
    slideshowimages[currentImageCounter].style.display = "none";
    currentImageCounter = (currentImageCounter + 1) % slideshowimages.length;
    slideshowimages[currentImageCounter].style.display = "block";
  
  }
}
function slideshowHis(){
  const slideshowHis = document.querySelectorAll(".slideshowhis");

  const timedelayhis = 2000;
  let currentImageCounterHis = 0;
  
  slideshowHis[currentImageCounterHis].style.display = "block";
  
  setInterval(nextImagehis, timedelayhis)
  
  function nextImagehis(){
    slideshowHis[currentImageCounterHis].style.display = "none";
    currentImageCounterHis = (currentImageCounterHis + 1) % slideshowHis.length;
    slideshowHis[currentImageCounterHis].style.display = "block";
  
  }
}
function slideshowClen(){
  const slideshowClen = document.querySelectorAll(".slideshowClen");

  const timedelayClen = 3000;
  let currentImageCounterClen = 0;
  
  slideshowClen[currentImageCounterClen].style.display = "block";
  
  setInterval(nextImageClen, timedelayClen)
  
  function nextImageClen(){
    slideshowClen[currentImageCounterClen].style.display = "none";
    currentImageCounterClen = (currentImageCounterClen + 1) % slideshowClen.length;
    slideshowClen[currentImageCounterClen].style.display = "block";
  
  }
}
slideorg();
slideshowHis();
slideshowClen();


let PodVedeieDiv = document.getElementById('PodVedeieDiv');
let VedenieDiv = document.querySelector('.Vedenie');
let closevedenie = document.querySelector('.CloseVedenieBtn');
orgdiv.addEventListener('click', () => {

PodVedeieDiv.style.display = "block";
VedenieDiv.style.display = "block";
closevedenie.style.display = "block";

});


closevedenie.addEventListener('click', () => {
  PodVedeieDiv.style.display = "none";
  closevedenie.style.display = "none";
  VedenieDiv.style.display = "none";
});


