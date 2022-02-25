import { Button } from '../ui-base'
import { Column, Modal } from '../ui-layout'

export const ModalRemoveDate = ({date, onCancel, onRemoveDate}) => {
  return (
    <Modal>
      <h4>
        Konfirmasi HAPUS tanggal Absensi ?
      </h4>
      <p>
        Hapus Tanggal {date} dari daftar absensi
      </p>
      <Column>
        <Button outlined onClick={onCancel}>
          Cancel
        </Button>
        <Button
          onClick={onRemoveDate}
        >
          Delete
        </Button>
      </Column>
    </Modal>
  )
}