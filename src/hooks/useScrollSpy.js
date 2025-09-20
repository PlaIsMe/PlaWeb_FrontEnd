import { useEffect, useState } from 'react'

export default function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds?.[0] ?? null)

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return

    const options = {
      root: null,
      rootMargin: '0px 0px -40% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }

    const callback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (entry.isIntersecting) {
          entry.target.classList.add('show-animate')
        }
      })

      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visible) {
        const id = visible.target.getAttribute('id')
        setActiveId(id)
      }
    }

    const observer = new IntersectionObserver(callback, options)
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean)

    elements.forEach(el => observer.observe(el))

    if (elements[0]) {
      elements[0].classList.add('show-animate')
    }

    return () => {
      elements.forEach(el => observer.unobserve(el))
      observer.disconnect()
    }
  }, [sectionIds?.join(',')])

  return activeId
}
