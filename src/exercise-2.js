const getTheExactNumber = (numbers) => {
  const getFilteredNumbers = numbers.filter(number => number % 3 === 0);
    if (getFilteredNumbers.length === 0) {
        return null;
    }
    return Math.max(...getFilteredNumbers);
}

export default getTheExactNumber;