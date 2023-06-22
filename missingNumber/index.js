const missingNumber = (nums) => {
  const length = nums.length;
  const summ = nums.reduce((acc, n) => (acc += n), 0);

  return (length * (length + 1)) / 2 - summ;
};
