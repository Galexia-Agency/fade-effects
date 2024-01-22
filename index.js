window.addEventListener('load', () => {
  const anims = []
  const elems = document.querySelectorAll('.fadeIn')

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const el = entry.target
      if (entry.isIntersecting) {
        el.classList.add('visible')
        anims.splice(anims.indexOf(el), 1)
        if (anims.length === 0) {
          observer.disconnect()
        }
      }
    })
  })

  // We're now ready to show fade in effects, so add the class to the body
  document.body.classList.add('fade-active')

  elems.forEach((e) => {
    anims.push(e)
    observer.observe(e) // Start observing each element
  })

  function render () {
    let af
    if (anims.length > 0) {
      af = requestAnimationFrame(render)
    } else if (af) {
      cancelAnimationFrame(af)
    }
  }
  render()
})
