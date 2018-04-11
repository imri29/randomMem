const RANDOM_API_URL = "http://www.memeking.co.il/api/random-meme";
const ERROR_MESSAGE =
  "https://fthmb.tqn.com/qLv10Pgd30kCy7OxXacwOWKxZ8M=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg";
const MOBILE_SIZE = 767;

$(document).ready(function() {
  const button = $("button");
  const memes = $(".memes");
  const modal = $(".modal");
  const iframe = $("iframe");

  button.click(() => {
    button.html('<div id="loading"></div>');
    $.get(RANDOM_API_URL, loadAndInsertRandomMeme);
  });

  modalController.init(memes, modal);

  /* Global Functions*/

  function loadAndInsertRandomMeme(data, status) {
    if (status === "success") {
      const memeAddress = data.randomMeme.urlPath;
      const memeId = data.randomMeme.id;
      const category = data.randomMeme.category;
      memes.attr("src", memeAddress);
      button.html("<span>מם רנדומלי</span>");
      iframe
        .attr(
          "src",
          `http://www.memeking.co.il/memes/${category}/generator/${memeId}/normalFormat`
        )
        .css(getIframeSize());
    } else {
      memes.attr("src", ERROR_MESSAGE);
    }
  }
});

function getIframeSize() {
  if (window.innerWidth > MOBILE_SIZE) {
    return {
      height: "95%",
      width: "100%"
    };
  } else {
    return {
      height: "100%",
      width: "100%"
    };
  }
}
