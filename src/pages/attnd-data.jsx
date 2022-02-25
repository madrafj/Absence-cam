import { ActionBar, Content, View } from '../components/ui-layout'
import { AppBar, ComboBox, DataTable, DownloadExcelButton, ModalRemoveDate } from '../components/ui-utils'
import { Spacer } from '../components/ui-base'
import { useContext, useEffect, useState } from 'react'
import { removeDateOfAttendance, useDataAttendances, useDataGroup, useDataMember } from '../library/stores'
import { AlertContext } from '../library/context'

const AttendData = () => {
  const groupList = useDataGroup()
  const [currentGroup, setCurrentGroup] = useState(undefined)
  const members = useDataMember(currentGroup)
  const attendanceData = useDataAttendances(currentGroup)
  const setLogContent = useContext(AlertContext)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(undefined)

  const handleDateSelected = date => {
    setSelectedDate(date)
    setModalIsOpen(true)
  }
  const handleRemoveDate = () => {
    removeDateOfAttendance(currentGroup, selectedDate)
    setModalIsOpen(undefined)
    setLogContent({ msg: 'Data Absensi berhasil diHapus' })
  }

  useEffect(() => {
    if (!attendanceData) {
      setLogContent({ msg: 'Data tidak tersedia', type: 'warning' })
    }
  }, [attendanceData, setLogContent])

  return (
    <View bg="img/noContent.png">
      <AppBar title="Attendance Data" />
      <ActionBar>
        <ComboBox
          label="Group"
          data={groupList}
          onChange={e => setCurrentGroup(e.target.value)}
          value={currentGroup}
        />
      </ActionBar>
      <Content sticky block>
        {
          attendanceData ? (
            <DataTable
              id="table-to-xls"
              data={attendanceData}
              members={members}
              onSelectDate={handleDateSelected}
            />
          ) : undefined
        }
      </Content>
      <ActionBar bottom>
        <Spacer w={1.5} />
        <DownloadExcelButton
          table="table-to-xls"
          filename="data-absensi"
          sheet={currentGroup || 'sheet1'}
          buttonText="Download" />
      </ActionBar>
      {
        modalIsOpen ? (
          <ModalRemoveDate
            date={selectedDate}
            onRemoveDate={handleRemoveDate}
            onCancel={() => setModalIsOpen(undefined)}
          />
        ) : undefined
      }
    </View>
  )
}

export default AttendData