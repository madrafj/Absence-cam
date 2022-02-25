import { useEffect, useState } from 'react'

const getItem = key => {
  const dt = localStorage.getItem(key)
  if (dt) return JSON.parse(dt)
  else return undefined
}

const getItems = key => {
  const dt = localStorage.getItem(key)
  if (dt) return JSON.parse(dt)
  else return []
}

const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))

  const event = new CustomEvent('storageChanged', {
    detail: { key: key, value: value }
  })

  window.dispatchEvent(event)
}

const useListener = (key, getter, callback, deps) => useEffect(() => {
  callback(getter(key))

  const listener = e => {
    if(e.detail.key === key) callback(e.detail.value)
  }
  
  window.addEventListener('storageChanged', listener)
  return () => window.removeEventListener('storageChanged', listener)
  // eslint-disable-next-line
}, [deps, callback])

export const useDataGroup = () => {
  const [groupList, setGroupList] = useState([])

  useListener('GDesc', getItems, setGroupList)

  return groupList
}

export const useDataMember = group => {
	const [memberList, setMemberList] = useState([])

  useListener(`GDesc/${group}`, getItems, setMemberList, group)

  return memberList
}

export const useFaceDataOn = group => {
	const [faceData, setFaceData] = useState(undefined)

  useListener(`GFaces/${group}`, getItem, setFaceData, group)

  return faceData
}

export const useFaceData = (group, func) => {
	const [faceData, setFaceData] = useState(undefined)

  useEffect(() => {
    const dt = getItem(`GFaces/${group}`)
    setFaceData(dt ? func(dt) : dt)
  }, [group, func])

  return faceData
}

export const useFaceDataChanged = (group, callback, ...args) => useEffect(() => {
  const listener = e => {
    if(e.detail.key === `GFaces/${group}`) callback(e.detail.value, ...args)
  }
  window.addEventListener('storageChanged', listener)
  return () => window.removeEventListener('storageChanged', listener)
  // eslint-disable-next-line
}, [group, callback])

export const resetMemberFace = (group, faceData, index) => {
  const newFM = { ...faceData }
  newFM.labeledDescriptors[index].descriptors = []
  setItem(`GFaces/${group}`, newFM)
}

export const updateFaceData = (newFM, group, member) => {
  const groupList = getItems('GDesc')
  const memberList = getItems(`GDesc/${group}`)
  const groups = groupList.includes(group) ? groupList : [...groupList, group]
  const members = memberList.includes(member) ? memberList : [...memberList, member]
  setItem(`GFaces/${group}`, newFM)
  setItem(`GDesc/${group}`, members)
  setItem('GDesc', groups)
}

export const updateAttendances = (date, group, members) => {
  const memberList = members.reduce((obj, key) => ({ ...obj, [key]: true }), {})
  const tempData = getItem(`GAttendances/${group}`) || {}
  tempData[date] = memberList
  setItem(`GAttendances/${group}`, tempData)
}

export const useDataAttendances = group => {
  const [data, setData] = useState(undefined)

  useListener(`GAttendances/${group}`, getItem, setData, group)

  return data
}

export const removeDateOfAttendance = (group, date) => {
  const tempData = getItem(`GAttendances/${group}`)
  delete tempData[date]
  setItem(`GAttendances/${group}`, tempData)
}