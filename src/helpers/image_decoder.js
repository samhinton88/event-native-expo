import { Buffer } from 'buffer'

export default (imageDataObj) => {
  // process buffer as base64 string
  const { data: { data }, contentType } = imageDataObj;
  console.log('buffering', imageDataObj)
  return `${contentType}base64, ${Buffer(data).toString('base64')}`
}
