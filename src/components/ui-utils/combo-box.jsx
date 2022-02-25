import { Field } from '../ui-base/'

export const ComboBox = ({label, data, ...props}) =>
  <Field>
    <legend>
      {label}
    </legend>
    <select {...props}>
      <option key={0} disable="true" hidden>Pick One</option>
      {data && data.map((v, i) => <option key={i+1}>{v}</option>)}
    </select>
  </Field>