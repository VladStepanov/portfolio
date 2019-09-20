export default class IntersectAnimation {
  constructor() {
    this.items = []
    this.intersectionObserver = null
  }
  add(selector = null, animation = () => {}) {
    const nodes = Array.from(document.querySelectorAll(selector))
    this.items = [...this.items, ...nodes.map(node => ({
      node, animation
    }))]
    return this
  }
  track() {
    this.intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const intersectedItem = this.items.find(item => item.node === entry.target)
          intersectedItem.animation.call(null, intersectedItem.node)

          observer.unobserve(entry.target)
        }
      })
    })
    this.items.forEach(item => {
      this.intersectionObserver.observe(item.node)
    })
  }
}