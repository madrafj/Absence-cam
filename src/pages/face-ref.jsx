import { IcRoundPersonAddAlt1, IcTwotonePersonPin } from '../components/ui-base/icons'
import { Button, Img, Spacer } from '../components/ui-base'
import { AppBar, ComboBox, FilePicker, ModalAdd, DetStatus, ModalRefReset } from '../components/ui-utils'
import { ActionBar, Content, View, Flex } from '../components/ui-layout'
import { useState, useEffect, useContext } from 'react'
import { createFaceMatcher, extractSingleFace, fetchImage } from '../library/faceapi'
import { AlertContext } from '../library/context'
import { resetMemberFace, updateFaceData, useDataGroup, useDataMember, useFaceDataChanged, useFaceDataOn } from '../library/stores'
import { getRefIndex } from '../library/utils'

const FaceRef = () => {
  const groupList = useDataGroup()
  const [currentGroup, setCurrentGroup] = useState(undefined)
  const faceData = useFaceDataOn(currentGroup)
  const memberList = useDataMember(currentGroup)
  const [currentMember, setCurrentMember] = useState(undefined)
  const [imgSrc, setImgSrc] = useState(undefined)
  const setLogContent = useContext(AlertContext)
  const [detStat, setDetStat] = useState(undefined)
  const [refsIndex, setRefsIndex] = useState(undefined)
  const [openedModal, setOpenedModal] = useState(undefined)

  const handleSaveRef = async() => {
    const imgBlob = await fetchImage(imgSrc)
    const detection = await extractSingleFace(imgBlob)
    if (!detection) {
      setLogContent({ msg: 'Wajah tidak terdeteksi !', type: 'warning' })
      setDetStat(false)
      return
    }
    const fm = await createFaceMatcher(detection, faceData, currentMember)
    updateFaceData(fm, currentGroup, currentMember)
    setLogContent({ msg: 'Data wajah berhasil disimpan' })
    setDetStat(true)
  }
  const handleCloseModal = () => setOpenedModal(undefined)
  const handleTmpChange = tmpData => {
    setCurrentGroup(tmpData.group)
    setCurrentMember(tmpData.member)
    handleCloseModal()
  }
  const handleRefReset = () => {
    resetMemberFace(currentGroup, faceData, refsIndex)
    handleCloseModal()
    setLogContent({ msg: 'Data Wajah berhasil dihapus' })
  }

  useEffect(() => setDetStat(undefined), [imgSrc, setDetStat])
  useEffect(() => {
    setImgSrc(undefined)
    setDetStat(undefined)
    setRefsIndex(getRefIndex(faceData, currentMember))
    console.log('member: ' + currentMember);
    // eslint-disable-next-line
  }, [currentMember, setImgSrc, setDetStat, setRefsIndex])
  useFaceDataChanged(
    currentGroup,
    (...args) => setRefsIndex(getRefIndex(...args)),
    currentMember
  )

  return (
    <View bg="img/noImage.png">
      <AppBar
        title="Face References"
        onOptClick={() => setOpenedModal('add')}
        optButton={<IcRoundPersonAddAlt1 />}
      />
      <ActionBar>
        <ComboBox
          label="Group"
          data={groupList}
          onChange={e => setCurrentGroup(e.target.value)}
          value={currentGroup}
      />
      </ActionBar>
      <Content>
        <Img src={imgSrc} />
        <DetStatus stat={detStat} />
      </Content>
      <ActionBar bottom>
        <Flex>
          <ComboBox
            label="Member"
            data={memberList}
            value={currentMember}
            onChange={e => setCurrentMember(e.target.value)}
          />
          {
            currentMember && (refsIndex >=0)
            ? <IcTwotonePersonPin onClick={() => setOpenedModal('reset')} />
            : <Spacer w={1.5} />
          }
        </Flex>
        <FilePicker
          onChange={blob => setImgSrc(URL.createObjectURL(blob))}
          disabled={!currentMember}
        />
        <Button outlined onClick={() => setCurrentGroup('')}>
          Cancel
        </Button>
        <Button
          disabled={!imgSrc}
          onClick={handleSaveRef}
        >
          Save
        </Button>
      </ActionBar>
      {
        openedModal === 'add'
        ?
        <ModalAdd
          group={currentGroup}
          onUpdateTmp={handleTmpChange}
          onCancel={handleCloseModal}
        />
        :
        openedModal === 'reset'
        ?
        <ModalRefReset
          data={faceData.labeledDescriptors[refsIndex]}
          onRefReset={handleRefReset}
          onCancel={handleCloseModal}
        />
        :
        undefined
      }
    </View>
  )
}

export default FaceRef