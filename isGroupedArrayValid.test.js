import isGroupedArrayValid from "./isGroupedArrayValid.js";

describe("isGroupedArrayValid function", () => {
  describe("returns true", () => {
    test("if all elements have equal length", () => {
      let input = [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ];

      expect(isGroupedArrayValid(input, 2)).toEqual(true);
    });

    test("if all but last element have equal length", () => {
      let input = [[1, 2], [3, 4], [5, 6], [7]];

      expect(isGroupedArrayValid(input)).toEqual(true);
    });
  });

  describe("returns false", () => {
    test("if input is not a multidimensional array", () => {
      expect(isGroupedArrayValid([])).toEqual(false);
    });

    test("if input contains non-array elements", () => {
      let input = [[10], "A", [12, 13]];

      expect(isGroupedArrayValid(input)).toEqual(false);
    });

    test("if any element other than the last do not have equal length", () => {
      let input = [[1, 2], [3, 4, 5], [5, 6], [7]];

      let inputTwo = [
        [1, 2],
        [3, 4, 5],
        [5, 6],
        [7, 8],
      ];

      expect(isGroupedArrayValid(input)).toEqual(false);
      expect(isGroupedArrayValid(inputTwo)).toEqual(false);
    });

    test("if last element contains more than the expected group size", () => {
      let input = [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 6, 8, 9],
      ];

      expect(isGroupedArrayValid(input, 2)).toEqual(false);
    });

    test("if actual group size does not match the expected group size parameter", () => {
      let input = [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 6, 8, 9],
      ];

      expect(isGroupedArrayValid(input, 3)).toEqual(false);
    });
  });
});
