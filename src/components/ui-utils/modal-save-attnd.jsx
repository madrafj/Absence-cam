import { Button } from '../ui-base'
import { Column, Modal } from '../ui-layout'

export const ModalSaveAttnd = ({data, onUpdateAttnd, onCancel}) =>
  <Modal>
    <h4>Daftar Anggota/Siswa Terdeteksi</h4>
    <ol>
      {
        data.length > 0
        ? data.map((mbr, i) => <li key={i}>{mbr}</li>)
        : 'No Face Detected'
      }
    </ol>
    <Column>
      <Button outlined onClick={onCancel}>
        Cancel
      </Button>
      <Button
        onClick={onUpdateAttnd}
        disabled={data.length === 0}
      >
        Update
      </Button>
    </Column>
  </Modal>