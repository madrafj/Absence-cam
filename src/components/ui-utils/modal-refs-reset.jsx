import { Button } from '../ui-base'
import { Column, Modal } from '../ui-layout'

export const ModalRefReset = ({data, onRefReset, onCancel}) => {
  const refsAmt = data.descriptors.length || 0
  const member = data.label

  return (
    <Modal>
      <h4>
        Konfirmasi RESET Data Wajah ?
      </h4>
      <p>
        Tekan Reset untuk menghapus {refsAmt} data wajah <b>{member}</b>
      </p>
      <Column>
        <Button outlined onClick={onCancel}>
          Cancel
        </Button>
        <Button
          onClick={onRefReset}
          disabled={refsAmt === 0}
        >
          Reset
        </Button>
      </Column>
    </Modal>
  )
}