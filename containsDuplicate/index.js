const containsDuplicate = (nums) => {
  // Creating a new array with unique elements
  const unique = [...new Set(nums)];

  return unique.length === nums.length ? false : true;
};
