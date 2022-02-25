import { useEffect, useState } from 'react'
import { Snack } from '../ui-base'

export const SnackBar = ({content}) => {
  const [result, setResult] = useState('')

  useEffect(() => {
    setResult(
      <Snack type={content.type}>
        {content.msg}
      </Snack>
    )
    setTimeout(() => {
      setResult('')
    }, 1500);
  }, [content, setResult])
  
  return result
}