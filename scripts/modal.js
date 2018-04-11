const modalController = {
  init: function(memes, modal) {
    // Modal Behavior
    memes.click(function() {
      modal.slideDown();
    });

    // close it on X
    $(".close").click(function() {
      modal.slideUp();
    });

    //close it when clicking on dark area
    $(window).click(function(e) {
      if ($(e.target).is(modal)) {
        modal.slideUp();
      }
    });
  }
};
