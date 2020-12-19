export default function isGroupedArrayValid(groupedArray, expectedGroupSize) {
  let allInnerItemsAreArrays, groupsAreEqualSizeExceptLast;

  if (!Array.isArray(groupedArray) || groupedArray.length === 0) {
    return false;
  }

  allInnerItemsAreArrays = groupedArray.every((group) => Array.isArray(group));
  expectedGroupSize = expectedGroupSize || groupedArray[0].length;

  groupsAreEqualSizeExceptLast = groupedArray.every((group, i) =>
    i === groupedArray.length - 1
      ? group.length <= expectedGroupSize
      : group.length === expectedGroupSize
  );

  return allInnerItemsAreArrays && groupsAreEqualSizeExceptLast;
}
