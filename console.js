import groupArrayElements from "./groupArrayElements.js";
import CONSTANTS from "./constants.js";

const PARAMETER_ONE = process.argv[2],
  PARAMETER_TWO = process.argv[3];

if (PARAMETER_ONE && !Array.isArray(JSON.parse(PARAMETER_ONE))) {
  console.log(CONSTANTS.INVALID_INPUT_ARRAY);
} else if (!PARAMETER_TWO || isNaN(+PARAMETER_TWO)) {
  console.log(CONSTANTS.INVALID_DIVISOR);
} else {
  console.log(groupArrayElements(JSON.parse(PARAMETER_ONE), +PARAMETER_TWO));
}
