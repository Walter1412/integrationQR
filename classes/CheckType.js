const isValid = (sInvalid) => {
  return !!sInvalid
}

const isNonEmptyObject = (sObject) => {
  return typeof sObject === 'object' && Object.keys(sObject).length > 0
}

const isNumber = (sNumber) => {
  const numberRegex = /^\d+$/
  return numberRegex.test(sNumber)
}

const isEmptyString = (sString) => {
  return !sString
}

const isNonEmptyArray = (sArray) => {
  return Array.isArray(sArray) && sArray.length > 0
}

export default {
  isValid,
  isNonEmptyObject,
  isNumber,
  isEmptyString,
  isNonEmptyArray,
}
