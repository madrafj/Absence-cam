import { useState, useEffect } from 'react'
import {
  TinyFaceDetectorOptions,
  detectAllFaces,
  detectSingleFace,
  fetchImage,
  FaceMatcher,
  loadTinyFaceDetectorModel,
  loadFaceLandmarkTinyModel,
  loadFaceRecognitionModel,
  LabeledFaceDescriptors,
  draw,
  resizeResults,
} from "face-api.js"
export { fetchImage }

const options = new TinyFaceDetectorOptions({ inputSize: 224 })

export const extractAllFaces = input =>
  detectAllFaces(input, options).withFaceLandmarks(true).withFaceDescriptors()

export const extractSingleFace = input =>
  detectSingleFace(input, options).withFaceLandmarks(true).withFaceDescriptor()

export const useWarmUp = () => {
  const [isWarmedUp, setIsWarmedUp] = useState(false)

  useEffect(() => {
    const warmUp = async() => {
      const img = await fetchImage('./img/testImage.jpg')
      extractSingleFace(img)
      console.log('WarmedUp');
    }

    Promise.all([
      loadTinyFaceDetectorModel('./models'),
      loadFaceLandmarkTinyModel('./models'),
      loadFaceRecognitionModel('./models')
    ]).then(warmUp).then(() => setIsWarmedUp(true))
  }, [])

  return isWarmedUp
}

export const createFaceMatcher = (detection, facedatas, label) => {
  let faceMatcher, labeledFace
  const description = detection.descriptor
  if (facedatas) {
    console.log('fd: ' + facedatas);
    console.log('lb1: ' + facedatas['labeledDescriptors']);
    console.log('lb2: ' + facedatas.labeledDescriptors);
    faceMatcher = new FaceMatcher.fromJSON(facedatas)
    const mapDescriptors = faceMatcher.labeledDescriptors
    labeledFace = mapDescriptors.find(desc => desc.label === label)
    if (labeledFace) {
      console.log('lajur1 tambah wajah');
      labeledFace.descriptors.push(description)
    } else {
      console.log('lajur2 tambah member');
      labeledFace = new LabeledFaceDescriptors(label, [description])
      mapDescriptors.push(labeledFace)
    }
  } else {
    console.log('lajur3 tambah member + grup');
    labeledFace = new LabeledFaceDescriptors(label, [description])
    faceMatcher = new FaceMatcher([labeledFace], .5)
  }
  return faceMatcher.toJSON()
}

export const newFaceMatcher = faceData =>
  new FaceMatcher.fromJSON(faceData)

export const clearCanvas = canvas =>
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

export const faceRecognition = async args => {
  // Detect Faces in frame
  const detections = await extractAllFaces(args.input)
  const canvas = args.canvas
  clearCanvas(canvas)
  if (detections.length === 0) { return 0}
  // Compare Results to References
  const resizedDetections = resizeResults(detections, args.displaySize)
  const results = resizedDetections.map(det =>
    args.faceMatcher.findBestMatch(det.descriptor)
  )
  results.forEach((bestMatch, i) => {
    // Add Label to Bounding Box
    const box = resizedDetections[i].detection.box
    const text = bestMatch.toString()
    const drawBox = new draw.DrawBox(box, { label: text })
    drawBox.draw(canvas)
    // Add MemberName to ResultList
    if (text) {
      const label = text.slice(0, text.indexOf(' ('))
      if (label !== 'unknown') {
        args.resultList.add(label)
      }
    }
  })
}