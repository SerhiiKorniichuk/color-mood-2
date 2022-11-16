import { RefObject, useEffect } from 'react'

type Handler = (event: MouseEvent) => void

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler
) => {
  useEffect(() => {
    let startedInside = false
    let startedWhenMounted = false

    const listener = (event: MouseEvent) => {
      // Do nothing if `mousedown` or `touchstart` started inside ref element
      if (startedInside || !startedWhenMounted) return
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains((event?.target as Node) || null))
        return

      handler(event)
    }

    const validateEventStart = (event: Event) => {
      startedWhenMounted = !!ref.current
      startedInside = Boolean(
        ref.current && ref.current.contains((event?.target as Node) || null)
      )
    }

    document.addEventListener('mousedown', validateEventStart)
    document.addEventListener('touchstart', validateEventStart)
    document.addEventListener('click', listener)

    return () => {
      document.removeEventListener('mousedown', validateEventStart)
      document.removeEventListener('touchstart', validateEventStart)
      document.removeEventListener('click', listener)
    }
  }, [ref, handler])
}

export { useClickOutside }
