import { Field } from '../ui-base/input-field'

export const Input = props => (
  <Field>
    <legend>
      {props.label}
    </legend>
    <input {...props} />
  </Field>
)