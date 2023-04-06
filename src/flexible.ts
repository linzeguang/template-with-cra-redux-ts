function flexible(window: Window, document: Document) {
  const docEl = document.documentElement

  function setRemUnit() {
    let rem: number

    if (docEl.clientWidth < 320) rem = 12
    else if (docEl.clientWidth < 375) rem = 14
    else if (docEl.clientWidth < 390) rem = 16
    else if (docEl.clientWidth < 414) rem = 18
    else rem = 20

    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })
}

export default flexible
