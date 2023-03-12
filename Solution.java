
public class Solution {

    public long minimumTime(int[] tripTimes, int totalTrips) {
        long minTripTime = 1;
        long maxTripTime = (long) Math.pow(10, 7) * totalTrips;
        long minTimeToCompleteTrips = maxTripTime;

        while (minTripTime <= maxTripTime) {
            long middle = minTripTime + (maxTripTime - minTripTime) / 2;
            boolean timeIsSufficient = checkTime(tripTimes, totalTrips, middle);

            if (timeIsSufficient) {
                maxTripTime = middle - 1;
                minTimeToCompleteTrips = middle;
            } else {
                minTripTime = middle + 1;
            }
        }

        return minTimeToCompleteTrips;
    }

    private boolean checkTime(int[] tripTimes, int totalTrips, long currentTime) {
        long trips = 0;
        for (int tripTime : tripTimes) {
            trips += currentTime / tripTime;
            if (trips >= totalTrips) {
                return true;
            }
        }
        return false;
    }
}
