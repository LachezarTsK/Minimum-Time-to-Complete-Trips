
#include <cmath>
#include <vector>
using namespace std;

class Solution {
    
public:
    long long minimumTime(const vector<int>& tripTimes, int totalTrips) const {
        long long minTripTime = 1;
        long long maxTripTime = pow(10, 7) * totalTrips;
        long long minTimeToCompleteTrips = maxTripTime;

        while (minTripTime <= maxTripTime) {
            long long middle = minTripTime + (maxTripTime - minTripTime) / 2;
            bool timeIsSufficient = checkTime(tripTimes, totalTrips, middle);

            if (timeIsSufficient) {
                maxTripTime = middle - 1;
                minTimeToCompleteTrips = middle;
            } else {
                minTripTime = middle + 1;
            }
        }

        return minTimeToCompleteTrips;
    }

private:
    bool checkTime(const vector<int>& tripTimes, int totalTrips, long currentTime) const {
        long long trips = 0;
        for (const auto& tripTime : tripTimes) {
            trips += currentTime / tripTime;
            if (trips >= totalTrips) {
                return true;
            }
        }
        return false;
    }
};
