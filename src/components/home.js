import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link to='/usestate'><h1>useState</h1></Link>
      <Link to='/usereducer'><h1>useReducer</h1></Link>
      <Link to='/useeffect'><h1>useEffect</h1></Link>
      <Link to='/useref'><h1>useRef</h1></Link>
      <Link to='/uselayout'><h1>useLayout</h1></Link>
      <Link to='/useimphandle'><h1>useImperativeHandle</h1></Link>
      <Link to='/usecallback'><h1>useCallback</h1></Link>
      <Link to='/usememo'><h1>useMemo</h1></Link>
      <Link to='/usecontext'><h1>useContext</h1></Link>
      <Link to='/usedebugvalue'><h1>useDebugValue</h1></Link>
      <Link to='/useid'><h1>useId</h1></Link>
      <Link to='/usedefvalue'><h1>useDeferredValue</h1></Link>
      <Link to='/usetrans'><h1>useTransitionEffect</h1></Link>
      <Link to='/useinseffect'><h1>useInsertionEffect</h1></Link>
      <Link to='/usesyncextstore'><h1>useSyncExternalStore</h1></Link>
    </div>
  )
}

export default Home
