const videoItems = document.querySelectorAll("li.video-reviews__item");

for (videoItem of videoItems) {
  const video = videoItem.querySelector("video.video-review");
  const muteButton = videoItem.querySelector("button.video-reviews__button");

  muteButton.addEventListener("click", () => {
    video.muted = !video.muted;
    console.log(video.muted)
    muteButton.querySelector("img").src = video.muted ? "../public/icons/video-review__muted.svg" : "../public/icons/video-review__sound.svg"
  })
}