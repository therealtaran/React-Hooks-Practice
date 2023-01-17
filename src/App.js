import './App.css';
import UseState from './components/useState';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import UseReducer from './components/useReducer';
import UseEffect from './components/useEffect';
import UseRef from './components/useRef';
import UseLayout from './components/useLayout';
import UseImpHandle from './components/useImperativeHandle/useImpHandle';
import UseCallback from './components/useCallBack/useCallback';
import UseMemo from './components/useMemo';
import UseContext from './components/useContext/useContext';
import UseDebugValue from './components/useDebugValue';
import UseID from './components/useId';
import UseDeferredValue from './components/useDeferredValue/useDeferredValue';
import UseTransitionEffect from './components/useTransitionEffect';
import UseInsertionEffect from './components/useInsertionEffect';
import UseSyncExternalStore from './components/useSyncExternalStorage/useSyncExternalStore';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/usestate" element={<UseState />} />
        <Route exact path="/usereducer" element={<UseReducer />} />
        <Route exact path="/useeffect" element={<UseEffect />} />
        <Route exact path="/useref" element={<UseRef />} />
        <Route exact path="/uselayout" element={<UseLayout />} />
        <Route exact path="/useimphandle" element={<UseImpHandle />} />
        <Route exact path="/usecallback" element={<UseCallback />} />
        <Route exact path="/usememo" element={<UseMemo />} />
        <Route exact path="/usecontext" element={<UseContext />} />
        <Route exact path="/usedebugvalue" element={<UseDebugValue />} />
        <Route exact path="/useid" element={<UseID />} />
        <Route exact path="/usedefvalue" element={<UseDeferredValue />} />
        <Route exact path="/usetrans" element={<UseTransitionEffect />} />
        <Route exact path="/useinseffect" element={<UseInsertionEffect />} />
        <Route exact path="/usesyncextstore" element={<UseSyncExternalStore />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
