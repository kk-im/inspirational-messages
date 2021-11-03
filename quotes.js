const API_KEY = "cODXRWrwP3VW939zOjWGCCFxZikrWvvY";
const videoBox = document.querySelector(".video-container");
const generator = document.querySelector(".generator");

// Create a random number
const randomChoice = (arr) => {
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
};

// Create a video
function createVideo(src) {
  const video = document.createElement("video");
  video.src = src;
  video.autoplay = true;
  video.loop = true;
  video.className = "video";

  return video;
}

// Get data from GIPHY
const getGif = function () {
  // get random gif
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=cODXRWrwP3VW939zOjWGCCFxZikrWvvY&q=inspirational&limit=25&offset=0&rating=g&lang=en`
  )
    // we use .then() to handle the response
    .then((response) => {
      // Convert response to json
      return response.json();
    })

    // we use .then() again to handle the json data
    .then((json) => {
      const gif = randomChoice(json.data);

      // // This is the original mp4 src
      const src = gif.images.original.mp4;

      const video = createVideo(src);

      // // append newly created video to video element
      videoBox.appendChild(video);
    })

    .catch((error) => {
      console.log("sorry");
    });
};


// // run getGif on click or keyup of icon
generator.addEventListener(("click"), function() {
  getGif();
});
