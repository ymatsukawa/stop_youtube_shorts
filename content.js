function isShort() {
  return location.href.split("/").includes("shorts")
}

// https://stackoverflow.com/a/34100952
window.addEventListener('yt-navigate-start', () => {
  if(isShort()) {
    document.body.innerHTML = '<font size="16">Code it NOW</font>'
  }
})