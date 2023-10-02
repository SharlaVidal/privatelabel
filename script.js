const btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function(){
    window.scrollTo (0,0);
}
);

document.getElementById('openWhatsApp').addEventListener('click', function () {
  
    const phoneNumber = "1234567890";
    const message = "Olá!"; 

   
    const whatsappURL = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

 
    window.location.href = whatsappURL;
});

