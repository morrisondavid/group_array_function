import groupArrayElements from "./groupArrayElements.js";
import isGroupedArrayValid from "./isGroupedArrayValid.js";
import CONSTANTS from "./constants.js";

describe("groupArrayElements", () => {
  test("random array input returns valid result", () => {
    let arraySize = Math.floor(Math.random() * (1 - 100000) + 100000);

    let input = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random())
    );

    let divisor = Math.floor(Math.random() * (1 - arraySize) + arraySize);
    let expectedGroupSize = Math.ceil(arraySize / divisor);
    let groupedArray = groupArrayElements(input, divisor);

    expect(isGroupedArrayValid(groupedArray, expectedGroupSize)).toEqual(true);
  });

  test("returns correct value", () => {
    let expected = [[1, 2], [3, 4], [5]];

    let actual = groupArrayElements([1, 2, 3, 4, 5], 3);

    expect(actual).toEqual(expected);
  });

  test("returns correct number of groups", () => {
    let expected = 4;

    let actual = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4).length;

    expect(actual).toEqual(expected);
  });

  test("throws error if array parameter is not an array", () => {
    let func = () => groupArrayElements("Hello", 2);

    expect(func).toThrowError(CONSTANTS.INVALID_INPUT_ARRAY);
  });

  test("throws error if input array is null", () => {
    let func = () => groupArrayElements(null, 2);

    expect(func).toThrowError(CONSTANTS.INVALID_INPUT_ARRAY);
  });

  test("throws error if divisor parameter is less than one", () => {
    let func = () => groupArrayElements([1, 2, 3], -2);

    expect(func).toThrowError(CONSTANTS.INVALID_DIVISOR);
  });

  test("throws error if divisor parameter is not a number", () => {
    let func = () => {
      return groupArrayElements([1, 2, 3], []);
    };

    expect(func).toThrowError(CONSTANTS.INVALID_DIVISOR);
  });
});
