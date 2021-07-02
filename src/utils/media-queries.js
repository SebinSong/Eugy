import React, {
  useState,
  useEffect
} from 'react'


const settings = {
  smallPhone: { bp: 415,  mqString: v => `(max-width: ${v - 1}px)` },
  tablet: { bp: 769, mqString: v => `(min-width: ${v}px)` },
  desktop: { bp: 1200, mqString: v => `(min-width: ${v}px)` }
}

function factory (deviceType) {
  // in : device type , out: react component
  const { mqString, bp } = settings[deviceType]


  return ({ children, fallback = null }) => {
    const [matches, updateMatches] = useState(false)
    const onResize = () => {
      const check = window.matchMedia(mqString(bp)).matches

      // make sure the value of the 'matches' we compare to is not stale.
      updateMatches(m => m !== check ? check : m)
    }

    // side-effect
    useEffect(() => {
      window.addEventListener('resize', onResize)

      return () => {
        window.removeEventListener('resize', onResize)
      }
    }, []) // only after mount & unmount of the component

    if (matches)
      return <>{children}</>
    else
      return fallback ? <>{fallback}</> : null
  }
}

const MQ = {
  Desktop: factory('desktop'),
  Tablet: factory('tablet'),
  SmallPhone: factory('smallPhone')
};

export default MQ;