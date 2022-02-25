import styled from 'styled-components'
import { IconButton } from '../ui-base/'
import { IcTwotoneAddAPhoto } from '../ui-base/icons'

const Label = styled(IconButton)`
  input {
    position: absolute;
    height: 0;
    width: 0;
    overflow: hidden;
  }
`
export const FilePicker = ({onChange, disabled, capture}) => (
  <Label as="label" outlined color="var(--tx2)" size="1.25rem">
    <IcTwotoneAddAPhoto />
    <input type="file"
      accept="image/*"
      onChange={e => onChange(e.target.files[0])}
      disabled={disabled}
      capture={capture && 'environment'}
    />
  </Label>
)