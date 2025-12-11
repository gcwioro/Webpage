import type { MaybeRefOrGetter } from 'vue'
import { toValue } from 'vue'

export function useScrollTo() {
  function scrollTo(targetId: MaybeRefOrGetter<string>) {
    const id = toValue(targetId)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { scrollTo, scrollToTop }
}
