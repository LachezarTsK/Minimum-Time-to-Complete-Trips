
/**
 * @param {number[]} tripTimes
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (tripTimes, totalTrips) {
    let minTripTime = 1;
    let maxTripTime = Math.pow(10, 7) * totalTrips;
    let minTimeToCompleteTrips = maxTripTime;

    while (minTripTime <= maxTripTime) {
        let middle = minTripTime + Math.floor((maxTripTime - minTripTime) / 2);
        let timeIsSufficient = checkTime(tripTimes, totalTrips, middle);

        if (timeIsSufficient) {
            maxTripTime = middle - 1;
            minTimeToCompleteTrips = middle;
        } else {
            minTripTime = middle + 1;
        }
    }

    return minTimeToCompleteTrips;
};

/**
 * @param {number[]} tripTimes
 * @param {number} totalTrips
 * @param {number} currentTime
 * @return {boolean}
 */
function checkTime(tripTimes, totalTrips, currentTime) {
    let trips = 0;
    for (let tripTime of tripTimes) {
        trips += Math.floor(currentTime / tripTime);
        if (trips >= totalTrips) {
            return true;
        }
    }
    return false;
}
