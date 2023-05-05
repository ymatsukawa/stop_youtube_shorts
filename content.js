function isShort() {
  return location.href.split("/").includes("shorts")
}

window.addEventListener('load', () => {
  if(isShort()) {
    document.body.innerHTML = '<font size="32">Code it NOW</font>'
  }
})