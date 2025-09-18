//  EmailJS
(function(){
  emailjs.init("SIfFifYryfdZKm3fr"); 
})();

// 🟢 "test" و "live"
const MODE = "live";  

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (MODE === "test") {
   
      showPopup("✅ (TEST) Message box preview!", "success");
      form.reset();

    } else if (MODE === "live") {
      
      emailjs.sendForm("service_0xuns4s", "template_ttf4x7s", form)
        .then(function() {
          console.log("✅ Message sent to me!");
          emailjs.sendForm("service_0xuns4s", "template_jnf35th", form)
            .then(function() {
              showPopup("✅ Message sent successfully!", "success");
              form.reset();
            }, function(error) {
              showPopup("❌ Error sending auto-reply!", "error");
              console.error(error);
            });
        }, function(error) {
          showPopup("❌ Error sending to me!", "error");
          console.error(error);
        });
    }
  });
});

// message
function showPopup(message, type) {
  const popup = document.createElement("div");
  popup.textContent = message;
  popup.className = "popup-message " + type;
  document.body.appendChild(popup);

  setTimeout(() => popup.classList.add("show"), 100);
  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 500);
  }, 3000);
}

setTimeout(() => {
  const flash = document.querySelector('.flash-message');
  if(flash) flash.style.display = 'none';
}, 3000);



window.addEventListener('load', () => {
  const text = "Welcome To My Website";
  const element = document.getElementById("welcomePopup");
  let i = 0;

  element.innerHTML = "";

  function typeWriter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});

