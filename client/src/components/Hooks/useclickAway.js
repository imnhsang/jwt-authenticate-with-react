import { useEffect, useRef } from 'react'

export function on(obj, ...args) {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...args)
  }
}

export function off(obj, ...args) {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...args)
  }
}

const useClickAway = (ref, onClickAway, events = ['click']) => {
  const savedCallback = useRef(onClickAway)

  useEffect(() => {
    savedCallback.current = onClickAway
  }, [onClickAway])

  useEffect(() => {
    const handler = (event) => {
      const { current: el } = ref
      el && !el.contains(event.target) && savedCallback.current(event)
    }
    for (const eventName of events) {
      on(document, eventName, handler)
    }
    return () => {
      for (const eventName of events) {
        off(document, eventName, handler)
      }
    }
  }, [events, ref])
}

export default useClickAway
