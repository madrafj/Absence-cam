import { fetchImage, matchDimensions } from 'face-api.js'
import { useState, useEffect, useContext, useRef } from 'react'
import { Badge, Button, Img, Video } from '../components/ui-base'
import { IcRoundCalendarToday } from '../components/ui-base/icons'
import { ActionBar, Content, RelBox, View } from '../components/ui-layout'
import { AppBar, ComboBox, FilePicker, HollowDate, ModalSaveAttnd } from '../components/ui-utils'
import { AlertContext } from '../library/context'
import { clearCanvas, faceRecognition, newFaceMatcher } from '../library/faceapi'
import { updateAttendances, useDataGroup, useFaceData } from '../library/stores'
import { formatDate } from '../library/utils'

const FaceRecog = () => {
  const [date, setDate] = useState(formatDate(new Date()))
  const groupList = useDataGroup()
  const [currentGroup, setCurrentGroup] = useState(undefined)
  const faceMatcher = useFaceData(currentGroup, newFaceMatcher)
  const [imgSrc, setImgSrc] = useState(undefined)
  const imgRef = useRef()
  const canvasRef = useRef()
  const [result, setResult] = useState(new Set())
  const setLogContent = useContext(AlertContext)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleGroupSelected = e => {
    setCurrentGroup(e.target.value)
    setResult(new Set())
  }
  const handleImgChange = async(blob) => {
    const url = URL.createObjectURL(blob)
    setImgSrc(url)
    clearCanvas(canvasRef.current)
    if (!faceMatcher) {
      setLogContent({ msg: 'Anda belum merekam data wajah untuk grup ini!', type: 'warning' })
      return
    }
    const imgEl = imgRef.current
    const args = {
      input: await fetchImage(url),
      canvas: canvasRef.current,
      displaySize: { width: imgEl.width, height: imgEl.height },
      faceMatcher: faceMatcher,
      resultList: new Set(result)
    }
    matchDimensions(args.canvas, args.displaySize)
    let res = await faceRecognition(args)
    if (res === 0) setLogContent({
      msg: 'Wajah tidak terdeteksi',
      type: 'warning'
    })
    setResult(args.resultList)
  }
  const handleProceed = () => {
    updateAttendances(date, currentGroup, [...result])
    setLogContent({ msg: 'Data berhasil diperbarui' })
    setModalIsOpen(false)
    setImgSrc(undefined)
    clearCanvas(canvasRef.current)
  }

  const calendarButton =
    <RelBox>
      <IcRoundCalendarToday />
      <Badge>{date.slice(8)}</Badge>
    </RelBox>

  useEffect(() => {
    setImgSrc(undefined)
    clearCanvas(canvasRef.current)
  }, [currentGroup, date, setImgSrc])

return (
    <View bg="img/recogCam.png">
    <AppBar
      title="Face Recognition"
      optButton={calendarButton}
    >
      <HollowDate onChange={e => setDate(e.target.value)} />
    </AppBar>
    <ActionBar>
      <ComboBox
        label="Group"
        data={groupList}
        onChange={handleGroupSelected}
        value={currentGroup}
      />
    </ActionBar>
    <Content>
      <Img src={imgSrc} ref={imgRef} />
      <Video
        as="canvas"
        ref={canvasRef}
      />
    </Content>
    <ActionBar bottom>
      <FilePicker
        onChange={handleImgChange}
        disabled={!currentGroup}
        capture
      />
      <Button onClick={() => setModalIsOpen(true)}>
        Proceed
      </Button>
    </ActionBar>
    {
      modalIsOpen ? (
        <ModalSaveAttnd
          data={[...result]}
          onUpdateAttnd={handleProceed}
          onCancel={() => setModalIsOpen(false)}  
        />
      ) : undefined
    }
  </View>
  )
}

export default FaceRecog