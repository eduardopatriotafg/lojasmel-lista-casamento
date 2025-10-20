import { useEffect } from 'react'

const MinicartHandler = () => {
  useEffect(() => {
    window.addEventListener('message', ({ data }) => {
      if (data?.event === 'addToCart') {
        const trigger = document.querySelector('.vtex-minicart-2-x-minicartContainer .vtex-button')
        if (!trigger) return
  
        trigger.click()
      }
    })
  }, [])

  return null
}

export default MinicartHandler