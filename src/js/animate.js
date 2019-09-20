export default class Animate {
  constructor (delay = 0.5) {
    this.delay = delay
    this.items = []
    this.observer = null
  }
  add(selector = null, animation = () => {}) {
    this.items = [...this.items, {
      nodes: document.querySelectorAll(selector),
      animation
    }]

    return this
  }
  watch() {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const intersectItem = this.items.find(item => {
            return Array.from(item.nodes).some(node => node === entry.target)
          })
          intersectItem.animation.call(null, intersectItem.nodes, this.delay)
          
          this.delay += 0.2
          observer.unobserve(entry.target)
        }
      })
    })

    this.items.forEach(item => {
      item.nodes.forEach(node => {
        this.observer.observe(node)
      })
    })
  }
  // watch(entries = [], observer) {
    // entries.forEach(entry => {
    //   if (entry.isIntersecting) {
    //     const tl = new TimelineLite()
        // tl.fromTo(entry.target, 1, { y: "-50%", opacity: "0" }, { y: "0%", opacity: "1" }, `+=${this.delay}`)

    //     // this.delay += 0.2
    //     observer.unobserve(entry.target)
    //   }
    // })
    // const observer = new IntersectionObserver((entries, observer) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
          // const tl = new TimelineLite()
          // tl.fromTo(entry.target, 1, { y: "-50%", opacity: "0" }, { y: "0%", opacity: "1" }, `+=${this.delay}`)
          
          // this.delay += 0.2
          // observer.unobserve(entry.target)
    //     }
    //   })
    // })
  // }
}