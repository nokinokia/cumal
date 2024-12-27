function scroller() {
    $(".smooth").on("scroll", function() {
      let scrollPos = $(this).scrollTop();
      $(".parallax").css({
        top: scrollPos / 2 + "px",
        opacity: 1 - scrollPos / 200
      });
    });
  }
  scroller();

  function copy() {
    const captionElement = document.querySelector('.caption');
    const captionText = captionElement.textContent;
  
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = captionText;
    document.body.appendChild(tempInput);
  
    // Select the input element and copy its value
    tempInput.select();
    document.execCommand('copy');
  
    // Remove the temporary input element
    document.body.removeChild(tempInput);
  
    // Optional: Show a success message
    alert('copy success');
  }
  // Menggunakan library GSAP
gsap.from(".text-particles span", {
    opacity: 0,
    y: 50,
    stagger: 2,
    duration: 3
  });
