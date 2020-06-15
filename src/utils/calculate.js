const countSubsequentIncreases = arr => {
    let arrFromMonday = arr.slice(1);
    let increases = {};
    let count = 0;
    let size = 2;
    let tracking = false;

    for (let i = 1; i < arrFromMonday.length; i++) {
        if (arrFromMonday[i] > arrFromMonday[i - 1]) {
            const diff = arrFromMonday[i] - arrFromMonday[i - 1];

            if (tracking) {
                increases[count].size++;
                increases[count]["steps"].push(diff);
            } else {
                count++;
                increases[count] = {
                    size: size,
                    start: {
                        index: i - 1,
                        value: arrFromMonday[i - 1]
                    },
                    steps: [diff],
                }
            }

            tracking = true;
        } else {
            if (tracking) {
                increases[count].end = {
                    index: i - 1,
                    value: arrFromMonday[i - 1]
                }
            }

            tracking = false;
        }
    }

    return increases;
}

const spikeBigOrSmall = arr => {
    const greaterThanOrEqualToForty = arr.filter(num => num >= 40).length;
    const lessThanForty =  arr.filter(num => num < 40).length;

    if (greaterThanOrEqualToForty && !lessThanForty) {
        return arr.length === 2 ? ["Big Spike", "bigSpike", "likely"] : ["Big Spike", "bigSpike", "certain"];
    }

    if (!greaterThanOrEqualToForty && lessThanForty) {
        return arr.length < 4 ? ["Small Spike", "smallSpike", "likely"] : ["Small Spike", "smallSpike", "certain"];
    }

    return arr.length > 2 ? ["Random", "random", "maybeSmallSpike"] : ["Random", "random", "maybeBigSpike"];
}

module.exports = {
    analyze: function (pricesArr) {
        let lastPriceIdx = pricesArr.indexOf(pricesArr.find(ele => ele === 0)) >= 0 ? pricesArr.indexOf(pricesArr.find(ele => ele === 0)) - 1 : pricesArr.length - 1;
        const increases = Object.values(countSubsequentIncreases(pricesArr));
        console.log("increases", increases);

        if (lastPriceIdx < 2) return ["Unsure", "unsure", "certain"];
        if (lastPriceIdx > 7 && (!increases.length)) return ["Declining", "declining", "certain"];

        if (increases.length > 1) return ["Random", "random", "certain"]; 

        if (increases.length && increases[0]["size"] === 3 && (pricesArr[lastPriceIdx] > increases[0]["end"].value) && pricesArr[lastPriceIdx + 1] > 0) return ["Random", "random", "certain"];
        if (increases.length && increases[0]["size"] === 2) return ["Unsure", "unsure", "notDeclining"];
        if (increases.length && increases[0]["size"] > 2) return spikeBigOrSmall(increases[0]["steps"]);
        if (increases.length) return ["Unsure", "unsure", "notDeclining"];

        return ["Unsure", "unsure", "certain"];
    }
}