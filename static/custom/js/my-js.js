/*!
* Start Bootstrap - Simple Sidebar v6.0.3 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

jQuery(document).ready(function($) {
    var owl = $('.owl-carousel.partner-carousel');
    owl.owlCarousel({
      nav: false,
      lazyLoad: true,
      margin: 10,
      video: true,
      
      responsive: {
        0: {
          items: 2
      },
      600: {
          items: 3,
      },
      960: {
          items: 4,
      },
      1200: {
          items: 6
      }
  }
  });
  });

  $(document).ready(function() {
    $('.js-example-basic-single').select2();
});
function bulma_openTab(evt, tabTitle) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
		tablinks[i].classList.remove('is-active');
    }
    document.getElementById(tabTitle).style.display = "block";
    evt.currentTarget.classList.add('is-active');
}
