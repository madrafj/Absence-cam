import { useDestructureDate } from '../../library/utils'
import { Table } from '../ui-base/'
import { IcRoundDeleteForever } from '../ui-base/icons'

export const DataTable = ({ id, data, members, onSelectDate }) => {
  const { days, uniqMonths } = useDestructureDate(data)

  return (
    <Table id={id}>
      <thead>
        <tr>
          <th rowSpan={2} key={0}>Name</th>
          {
            uniqMonths.map((m, i) =>
              <th colSpan={m.count} key={i+1}>{m.month}</th>
            )
          }
          <th rowSpan={2} key={999}>
            Total
          </th>
        </tr>
        <tr>
          { days.map((d, i) => <th key={i}>{d}</th>) }
        </tr>
      </thead>
      <tbody>
        {
          members.map((member, i) =>
            <tr key={i}>
              <th>{member}</th>
              {
                Object.keys(data).map((day, j) =>
                  data[day][member] ? <th key={j}>✔</th> : <th key={j}> </th>
                )
              }
              <th key={999}>
                {
                  Object.keys(data).filter(day => data[day][member]).length
                }
              </th>
            </tr>  
          )
        }
        <tr key={99}>
          <th></th>
          {
            Object.keys(data).map((day, j) => (
              <th key={j}>
                <IcRoundDeleteForever
                  onClick={() => onSelectDate(day)}
                />
              </th>
            ))
          }
        </tr>
      </tbody>
    </Table>
  )
}