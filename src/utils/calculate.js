const findFirstIncrease = arr => {
    for (let i = 2; i < 8; i++) {
        if (arr[i] > arr[i - 1]) return i;
    }

    return null;
}

const countSubsequentIncreases = arr => {
    let increases = {};
    let count = 0;
    let length = 2;
    let tracking = false;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            const diff = arr[i] - arr[i - 1];

            if (tracking) {
                increases[count].length++;
                increases[count]["steps"].push(diff);
            } else {
                count++;
                increases[count] = {
                    length: length,
                    start: {
                        index: i - 1,
                        value: arr[i - 1]
                    },
                    steps: [diff],
                }
            }

            tracking = true;
        } else {
            if (tracking) {
                increases[count].end = {
                    index: i - 1,
                    value: arr[i - 1]
                }
            }

            tracking = false;
        }
    }

    return increases;
}

const catalogStepDifferences = arr => {
    const stepDifferences = {};

    for (let i = 1; i < arr.length; i++) {
        stepDifferences[i] = arr[i] - arr[i - 1];
    }

    return stepDifferences;
}

module.exports = {
    isDeclining: function (pricesArr) {
        return findFirstIncrease(pricesArr) ? true : false;
    },
    isBigSpike: function (pricesArr) {
        const firstIncreaseIdx = findFirstIncrease(pricesArr);

        if (pricesArr[firstIncreaseIdx] > pricesArr[firstIncreaseIdx + 1]) return false;

        /*
            Condition for Big Spike
            1: Three increasing days 
            2: Followed by at least two decreasing days
            3: Third increasing day is at or above 225
    
            typeCase 0 = no conditions met (0, unchanged)
            typeCase 1 = first condition met but first condition not met (1 = 1)
            typeCase 2 = second condition met but second condition not met (0 + 2 = 2)
            typeCase 3 = both conditions met (1 + 2 = 3)
    
            Having firstCondition() and secondCondition return numbers rather than boolean values. 
            Future releases will hopefully be able to analyze likelihood of spikes based on preliminary values rather than after all values have already been collected for the week, and number values could help determine likelihood in advance.
        */

        const firstCondition = () => {
            for (let j = firstIncreaseIdx + 1; j < firstIncreaseIdx + 2; j++) {
                if (pricesArr[j + 1] < pricesArr[j] && pricesArr[j + 1] !== 0) return 0;
            }

            return 1;
        }

        const secondCondition = pricesArr[firstIncreaseIdx + 3] < pricesArr[firstIncreaseIdx + 2] && pricesArr[firstIncreaseIdx + 4] < pricesArr[firstIncreaseIdx + 3] ? 2 : 0;

        const thirdCondition = pricesArr[firstIncreaseIdx + 2] >= 225 ? true : false;

        const typeCase = firstCondition() + secondCondition;

        return typeCase === 3 && thirdCondition ? true : false;
    },
    isSmallSpike: function (pricesArr) {
        const firstIncreaseIdx = findFirstIncrease(pricesArr);

        if (pricesArr[firstIncreaseIdx] > pricesArr[firstIncreaseIdx + 1]) return false;

        /*
            Condition for Small Spike
            1: Four increasing days 
            2: Followed by at least one decreasing day
            3: Third increasing day is below 225
    
            typeCase 0 = no conditions met (0, unchanged)
            typeCase 1 = first condition met but first condition not met (1 = 1)
            typeCase 2 = second condition met but second condition not met (0 + 2 = 2)
            typeCase 3 = both conditions met (1 + 2 = 3)
    
            Having firstCondition() and secondCondition return numbers rather than boolean values. 
            Future releases will hopefully be able to analyze likelihood of spikes based on preliminary values rather than after all values have already been collected for the week, and number values could help determine likelihood in advance.
        */

        const firstCondition = () => {
            for (let j = firstIncreaseIdx + 1; j < firstIncreaseIdx + 3; j++) {
                if (pricesArr[j + 1] < pricesArr[j] && pricesArr[j + 1] !== 0) return 0;
            }

            return 1;
        }

        const secondCondition = pricesArr[firstIncreaseIdx + 4] < pricesArr[firstIncreaseIdx + 3] ? 2 : 0;

        const thirdCondition = pricesArr[firstIncreaseIdx + 2] < 225 ? true : false;

        const typeCase = firstCondition() + secondCondition;

        return typeCase === 3 && thirdCondition ? true : false;
    },
    isRandom: function (pricesArr) {
        const firstIncreaseIdx = findFirstIncrease(pricesArr);

        if (pricesArr[firstIncreaseIdx + 1] < pricesArr[firstIncreaseIdx]) return true;

        if (pricesArr[firstIncreaseIdx + 1] > pricesArr[firstIncreaseIdx] && pricesArr[firstIncreaseIdx + 2] < pricesArr[firstIncreaseIdx + 1]) return true;

        return false;
    }
}