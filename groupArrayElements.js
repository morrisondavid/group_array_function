import CONSTANTS from "./constants.js";

export default function groupArrayElements(array, divisor) {
  let groupSize,
    groupIndex = 0,
    groupedArray = [];

  if (!array || !Array.isArray(array)) {
    throw new Error(CONSTANTS.INVALID_INPUT_ARRAY);
  }

  if (isNaN(divisor) || +divisor < 1) {
    throw new Error(CONSTANTS.INVALID_DIVISOR);
  }

  groupSize = Math.ceil(array.length / divisor);

  for (let i = 0; i < array.length; i++) {
    if (!groupedArray[groupIndex]) {
      groupedArray[groupIndex] = [];
    }

    if (groupedArray[groupIndex].length < groupSize) {
      groupedArray[groupIndex].push(array[i]);
    }

    if (groupedArray[groupIndex].length === groupSize) {
      groupIndex++;
    }
  }

  return groupedArray;
}
