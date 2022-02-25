import { useMemo } from 'react'

// const camOptions = {
//   video: {
//     width: 320,
//     height: 320,
//     facingMode: { exact: 'environment' }
//   }
// }

// export const useCamera = (ref, status) => {
//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia(camOptions).then(stream => {
//       ref.current.srcObject = stream
//       console.log('camera is available')
//     }).catch(err => console.error(err))
//   }, [ref])

//   useEffect(() => {
//     if (status) {
//       ref.current.play()
//       console.log('played');
//     } else {
//       ref.current.pause()
//       console.log('paused');
//     }
//   }, [status, ref])
// }

export const getRefIndex = (facedata, member) => {
  if (facedata) {
    const idx = facedata
      .labeledDescriptors
      .findIndex(desc => desc.label === member)
    console.log(`${member}: [${idx}]`);
    return idx
  } else {
    return -1
  }
}

const monthName = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export const useDestructureDate = data => useMemo(() => {
  const dates = Object.keys(data).map(dt => new Date(dt))
  const days = dates.map(dt => dt.getDate())
  const months = dates.map(dt => monthName[dt.getMonth()])
  const uniqMonths = [...new Set(months)].map(m => ({
    month: m,
    count: months.filter(v => v === m).length
  }))

  return { days, uniqMonths }
}, [data])

export const formatDate = date => date.toISOString().slice(0, 10)