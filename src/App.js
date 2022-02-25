import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SnackBar } from './components/ui-utils'
import { AlertContext } from './library/context'
import { useWarmUp } from './library/faceapi'
import AttendData from './pages/attnd-data'
import FaceRef from './pages/face-ref'
import FaceRecog from './pages/face-recog'
import MainMenu from './pages/main-menu'
import StartUp from './pages/start-up'
import About from './pages/about'

const App = () => {
  const [logContent, setLogContent] = useState({ msg: 'Pemanasan Selesai' })
  const isWarmedUp = useWarmUp()

  if (!isWarmedUp) return <StartUp />

  return (
    <AlertContext.Provider value={setLogContent}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="face-ref" element={<FaceRef />} />
          <Route path="face-recog" element={<FaceRecog />} />
          <Route path="attnd-data" element={<AttendData />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <SnackBar content={logContent} />
    </AlertContext.Provider>
  )
}

export default App