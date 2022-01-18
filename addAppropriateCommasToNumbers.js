const addAppropriateCommasToNumbers = (largeNum) => {
	// Validate the argument
	// make sure largenum is passed to the function
	if (typeof largeNum == "undefined") {
		throw new TypeError(
			"The argument 'largeNum' was not passed to the function."
		);
	}

	// make sure largeNum is a whole number
	if (!Number.isInteger(largeNum)) {
		throw new TypeError(`${largeNum} must be a whole number.`);
	}

	// setting the lower limit of the number
	const LOWERLIMIT = 1000;
	if (largeNum < LOWERLIMIT) {
		throw new TypeError(
			`${largeNum} must be greater than or equal to ${LOWERLIMIT}.`
		);
	}

	// Add commas to the number
	// convert the number to a string
	largeNum = largeNum.toString();
	// get the length of the number
	let lenOfLargeNum = largeNum.length;
	// variable to store comma separated largeNum
	let commaSeparated;

	// find how may commas are needed
	if (Number.isInteger(lenOfLargeNum / 3)) {
		commaSeparated = lenOfLargeNum / 3 - 1;
	} else {
		commaSeparated = Math.floor(lenOfLargeNum / 3);
	}

	// usecases
	/**
	 * let largeNum = 287530
	 * 6 digits / 3 = 2
	 * commaSeparated = 2 - 1 = 1
	 * output :- 287, 530
	 *
	 * let largeNum = 20809217620725
	 * 14 digits / 3 = 4.67
	 * commaSeparated = 4.67 - 0.67 = 4
	 * output :- 20,809,217,620,725
	 */

	// add the commas from right to left
	for (let i = 1; i <= commaSeparated; i++) {
		largeNum =
			largeNum.slice(0, lenOfLargeNum - 3 * i) +
			"," +
			largeNum.slice(lenOfLargeNum - 3 * i);
	}

	// usecases
	/**
     * largeNum = 174805913078
     * lenOfLargeNum = 12
     * commaSeparated = 3
     * 
     * largeNum = largeNum.slice(0, lenOfLargeNum - 3 * 1) +
					"," +
					largeNum.slice(lenOfLargeNum - 3 * 1);

        12-3=9

        174805913,078


     * largeNum = largeNum.slice(0, lenOfLargeNum - 3 * 2) +
					"," +
					largeNum.slice(lenOfLargeNum - 3 * 2);

        12-6=6

        174805,913,078


     * largeNum = largeNum.slice(0, lenOfLargeNum - 3 * 3) +
					"," +
					largeNum.slice(lenOfLargeNum - 3 * 3);

        12-9=3

        174,805,913,078
     */

	// output
	return largeNum;
};

console.log(addAppropriateCommasToNumbers(1000));
// console.log(addAppropriateCommasToNumbers(100));
console.log(addAppropriateCommasToNumbers(1000000));
console.log(addAppropriateCommasToNumbers(10000000));
console.log(addAppropriateCommasToNumbers(100000000));
console.log(addAppropriateCommasToNumbers(1000000000));
console.log(addAppropriateCommasToNumbers(1000000000000));
console.log(addAppropriateCommasToNumbers(10000000000000));
console.log(addAppropriateCommasToNumbers(100000000000000));
console.log(addAppropriateCommasToNumbers(157921823));