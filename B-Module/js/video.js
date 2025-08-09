function video() {
  const video = document.querySelector("video")
  const videoLabelBox = document.querySelector(".videoLabelBox")
  const btnHidden = document.querySelector("#video-btn")

    btnHidden.addEventListener("click", ()=>{
      videoLabelBox.style.display = videoLabelBox.style.display == "flex" ? "none" : "flex"
    })


    videoAction = {
      play: ()=> video.play(),
      stop: ()=> video.pause(),
      pause: ()=> {video.pause(); video.currentTime = 0},
      back: ()=> video.currentTime -= 10,
      fast: ()=> video.currentTime += 10,
      speedDown: ()=> video.playbackRate -= .1,
      speedUp: ()=> video.playbackRate += .1,
      speedReset: ()=> video.playbackRate = 1,
      loop: ()=> video.loop = !video.loop
    }

    for (const id in videoAction) {
      document.getElementById(id).addEventListener("click", videoAction[id])
    }

    const auto = document.querySelector("#autoPlay")

     auto.addEventListener("click", ()=>{
      localStorage.setItem("autoplay", auto.checked)
      auto.checked ? video.play() : video.pause()
     })

     if(localStorage.getItem("autoplay") === "true"){
      video.muted = true;
      video.play()
      auto.checked = true
     }


}

video()