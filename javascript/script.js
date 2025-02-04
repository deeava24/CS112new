//email me after registration
function sendMail(event) {
  event.preventDefault(); 
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    cellphone: document.getElementById("cellphone").value,
    userid: document.getElementById("userid").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_rnyea2d", "template_fihd42c", parms)
    .then(function (response) {
      alert("You have registered successfully!"); 
      console.log("SUCCESS!", response.status, response.text);
      document.getElementById("myform").reset(); 
    })
    .catch(function (error) {
      alert("Failed to send email. Please try again."); 
      console.error("FAILED...", error);
    });
} 
      // JavaScript to handle scrolling
    const scrollContainer = document.querySelector('.scroll-container');
    scrollContainer.addEventListener('wheel', (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });

    $(document).ready(function () {

    })
//map
    function initMap(lat, lng) {
      const userLocation = { lat: lat, lng: lng };
      const map = new google.maps.Map(document.getElementById("map"), {
        center: userLocation,
        zoom: 14,
      });
      new google.maps.Marker({
        position: userLocation,
        map: map,
        title: "Your Location",
      });}

    // Button Click Event for Geolocation
    $("#locate-me").click(function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

   //  map with user's location
            initMap(userLat, userLng);
          },
          function (error) {
            alert("Failed to get location: " + error.message);
          });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });

    // Default Map (Fallback Location)
    $(document).ready(function () {
      initMap(34.0522, -118.2437); // Los Angeles (Default Location)
    });

    //mouseover
    document.querySelectorAll('.gallery img').forEach(img => {
      img.addEventListener('click', () => {
        const fullSize = document.createElement('div');
        fullSize.className = 'full-view';
        fullSize.innerHTML = `
          <div class="overlay"></div>
          <img src="${img.src}" alt="${img.alt}">
        `;
        document.body.appendChild(fullSize);

        // Close full view on overlay click
        fullSize.addEventListener('click', () => {
          fullSize.remove();
        });
      });
    });
    //after registration opens login page
    function openWin() {
      window.open("http://127.0.0.1:5500/index/loginpasswordpop.html");
    }

      
    
  
  
  