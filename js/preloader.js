function startLoader() {
    const loader = document.querySelector(".loader");
  
    setTimeout(function() {
      loader.style.right = "0";
    }, 1000);
  
    window.addEventListener("DOMContentLoaded", function(event) {
      setTimeout(function() {
        loader.style.left = "100%";
        document.body.classList.remove("loading");
      }, 1500);
    });
  }
  
  startLoader();
  