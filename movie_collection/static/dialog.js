;(function () {
  const modal = document.getElementById("modal");

  htmx.on("htmx:afterSwap", (e) => {
    // Response targeting #dialog => show the modal
    if (e.detail.target.id == "dialog") {
      modal.classList.toggle('hidden')
    }
  })

  htmx.on("htmx:beforeSwap", (e) => {
    // Empty response targeting #dialog => hide the modal
    if (e.detail.target.id == "dialog" && !e.detail.xhr.response) {
      modal.classList.toggle('hidden')
      e.detail.shouldSwap = false
    }
  })

  modal.addEventListener("dismissed", () => {
    document.getElementById("dialog").innerHTML = "";
  })
  // Remove dialog content after hiding
  //htmx.on("transitioned", () => {
    //document.getElementById("dialog").innerHTML = ""
  //})
})()
