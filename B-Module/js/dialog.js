function dialog() {
  const body = document.querySelector("body")
  const dialog = document.querySelector("dialog")
  const noUserBtn = document.querySelector(".noUser")
  const close = document.querySelector(".close")

  noUserBtn.addEventListener("click", ()=>{
    dialog.showModal()
    body.style.overflow = "hidden"
  })

  close.addEventListener("click", ()=>{
    dialog.close()
    body.style.overflow = "visible"
  })


  
}

dialog()