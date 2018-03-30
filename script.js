const button = $("button");
const spinner = $(".spinner");
const memes = $(".memes");
const modal = $(".modal");
const iframe = $("iframe");

spinner.hide();

button.click(() => {
  button.html('<img class="spinner" src="./ajax-loader.gif">');
  $.get("http://www.memeking.co.il/api/random-meme", function(data, status) {
    if (status === "success") {
      const memeAddress = data.randomMeme.urlPath;
      const memeId = data.randomMeme.id;
      const category = data.randomMeme.category;
      memes.attr("src", memeAddress);
      button.html("<span>מימ רנדומלי</span>");
      $(iframe)
        .attr(
          "src",
          `http://www.memeking.co.il/memes/${category}/generator/${memeId}/normalFormat`
        )
        .css({
          width: "100%",
          height: "95%"
        });
      console.log(iframe.src);
    } else {
      memes.attr(
        "src",
        "https://fthmb.tqn.com/qLv10Pgd30kCy7OxXacwOWKxZ8M=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg"
      );
    }
  });
});

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

/* todo:
* set spaces between elements like in picture
* try to wrap up the modal
*
* */
