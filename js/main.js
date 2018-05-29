$('.carousel').carousel({
    interval: 4000
  })

window.sr = ScrollReveal();
sr.reveal(".navbar", {
    duration: 2000,
    origin: "bottom"
});

sr.reveal(".pag-left", {
    duration: 2000,
    origin: "left",
    distance:"300px"
});

sr.reveal(".pag-right", {
    duration: 2000,
    origin: "right",
    distance:"300px"
});

sr.reveal(".btn-pag", {
    duration: 2000,
    delay: 2000,
    origin: "bottom",
});

sr.reveal(".triangle-left", {
    duration: 2000,
    origin: "left",
    distance:"300px",
    viewFactor: 0.3
});

sr.reveal(".triangle-right", {
    duration: 2000,
    origin: "right",
    distance:"300px",
    viewFactor: 0.3
});

sr.reveal(".pagus-right", {
    duration: 2000,
    origin: "right",
    distance:"300px",
    viewFactor: 0.3
});

sr.reveal(".pagus-left", {
    duration: 2000,
    origin: "left",
    distance:"300px",
    viewFactor: 0.3
});

$(function() {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });


  /******* Google Map general*******/

  function initMap(){
      //map options
      var options = {
          zoom: 10,
          center: {
              lat:44.447754,
              lng:15.056677
          }
      }
      //new map
      map = new google.maps.Map(document.getElementById('map'), options);

      //add marker
      var marker = new google.maps.Marker({
          position:{
              lat:44.443803,
              lng: 15.055404
          },
          map: map
      })
  }

  