let one=document.querySelector(".one");
let two=document.querySelector(".two");
let three=document.querySelector(".three");
let four=document.querySelector(".four");
let five=document.querySelector(".five");
let submit=document.querySelector(".submit_Button");
let container=document.querySelector(".container");
let btarr=["zero",one,two,three,four,five];

for(let i=1;i<6;i++){
  btarr[i].addEventListener('click', () => {
    btarr[i].classList.add("button_clicked");
    let a=i;
    submit.addEventListener('click', (a) =>{
    container.innerHTML+=`<div class="ratingCard thankyouCard">
      <img src="images/illustration-thank-you.svg" alt="">
      <div class="orange_Text_Container">
        <p class="orange_Text">You selected ${i} out of 5</p>
      </div>
        <h1>Thank you!</h1>
        <p class="text-color">We appreciate you takeing the time to give a rating if you ever need more support, don't lhesitate to get in touch!</p>
    </div>`;
})
  });  
}
