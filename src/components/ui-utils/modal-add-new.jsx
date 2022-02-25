import { useEffect, useState } from 'react'
import { Input } from '.'
import { Button } from '../ui-base'
import { Column, Modal } from '../ui-layout'

export const ModalAdd = ({group, onUpdateTmp, onCancel}) => {
  const [tmpData, setTmpData] = useState({ group: '', member: '' })

  // eslint-disable-next-line
  useEffect(() => group && setTmpData({ group: group, member: '' }), [])

  return (
    <Modal>
      <h4>Tambah Angota/Grup</h4>
      <Input
        label="nama Grup"
        autoFocus={!group}
        value={tmpData.group}
        onChange={e => setTmpData({ ...tmpData, group: e.target.value })}
        />
      <Input
        label="nama Member"
        autoFocus={group !== undefined}
        value={tmpData.member}
        onChange={e => setTmpData({ ...tmpData, member: e.target.value })}
      />
      <Column>
        <Button outlined onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={() => onUpdateTmp(tmpData)}>
          Continue
        </Button>
      </Column>
    </Modal>
  )
}