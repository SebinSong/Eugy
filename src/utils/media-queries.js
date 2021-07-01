import React, {
  useState,
  useEffect
} from 'react'


const settings = {
  smallPhone: { bp: 415,  mqString: v => `(max-width: ${v - 1}px)` },
  tablet: { bp: 769, mqString: v => `(min-width: ${v}px)` },
  desktop: { bp: 1200, mqString: `(min-width: ${v}px)` }
}

function factory (deviceType) {
  // in : device type , out: react component
  const { mqString, bp } = settings[deviceType]


  return ({ children }) => {
    const [matches, updateMatches] = useState(false)
    const onResize = () => {
      const check = window.matchMedia(mqString(bp)).matches

      if (matches !== check)
        updateMatches(check)
    }

    // side-effect
    useEffect(() => {
      window.addEventListener('resize', onResize)

      return () => {
        window.removeEventListener('resize', onResize)
      }
    }, []) // only after mount & unmount of the component

    return <>{ matches ? children : null }</>
  }
}

const MediaQueries = {
  Desktop: factory('desktop'),
  Tablet: factory('tablet'),
  SmallPhone: factory('smallPhone')
}

export default MediaQueries;