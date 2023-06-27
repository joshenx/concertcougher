import { Suspense, cloneElement, useEffect, useState } from 'react'
import { Link } from '@chakra-ui/react'
// import { Footer } from '@pmndrs/branding'

function Ready({ setReady }) {
  useEffect(() => () => void setReady(true), [])
  return null
}

export default function Intro({ children }) {
  const [clicked, setClicked] = useState(false)
  const [ready, setReady] = useState(false)
  return (
    <>
        <Suspense fallback={<Ready setReady={setReady} />}>
            {cloneElement(children, { ready: clicked && ready, clicked: clicked })}
        </Suspense>
        <div className={`fullscreen bg ${ready ? 'ready' : 'notready'} ${clicked && 'clicked'}`}>
            <div className="stack">
                <Link sx={{ marginX: '20vw', display: 'inline-block', textAlign: 'center', mt: '40vh' }} href="#" onClick={() => setClicked(true)}>
                    {!ready ? 'Loading...' : 'This experience requires audio. Click to proceed.'}
                </Link>
            </div>
            {/* <Footer
            date="30. December"
            year="2021"
            link1={<a href="https://github.com/pmndrs/drei">pmndrs/drei</a>}
            link2={<a href="https://codesandbox.io/s/e6bjz">s/e6bjz</a>}
            /> */}
        </div>
    </>
  )
}
