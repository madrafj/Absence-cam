import { Link } from 'react-router-dom'
import { IconButton } from '../ui-base/'
import { IcRoundArrowBack } from '../ui-base/icons'

export const BackButton = props =>
  <IconButton color="var(--bg3)" as={Link} to="/" {...props}>
    <IcRoundArrowBack />
  </IconButton>