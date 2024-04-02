import fs from 'fs';

// Function to calculate median
function calculateMedian(values) {
    const sortedValues = values.sort((a, b) => a - b);
    const n = sortedValues.length;
    if (n % 2 === 0) {
        return (sortedValues[n / 2 - 1] + sortedValues[n / 2]) / 2;
    } else {
        return sortedValues[Math.floor(n / 2)];
    }
}

// Load heart rate data from JSON file
const heartRateData = JSON.parse(fs.readFileSync('heartRatesData.json', 'utf8'));

// Object to store statistics for each day
const dailyStatistics = {};

// Process heart rate data
heartRateData.forEach(entry => {
    const startDate = new Date(entry.timestamps.startTime).toLocaleDateString();
    const beatsPerMinute = entry.beatsPerMinute;

    // Update daily statistics
    if (!dailyStatistics[startDate]) {
        dailyStatistics[startDate] = { min: beatsPerMinute, max: beatsPerMinute, beats: [beatsPerMinute], latest: entry.timestamps.endTime };
    } else {
        dailyStatistics[startDate].min = Math.min(dailyStatistics[startDate].min, beatsPerMinute);
        dailyStatistics[startDate].max = Math.max(dailyStatistics[startDate].max, beatsPerMinute);
        dailyStatistics[startDate].beats.push(beatsPerMinute);
        dailyStatistics[startDate].latest = dailyStatistics[startDate].latest < entry.timestamps.endTime ? entry.timestamps.endTime : dailyStatistics[startDate].latest;
    }
});

// Calculate median and format output
const output = [];
for (const date in dailyStatistics) {
    const median = calculateMedian(dailyStatistics[date].beats);
    output.push({
        date: date,
        min: dailyStatistics[date].min,
        max: dailyStatistics[date].max,
        median: median,
        latestDataTimestamp: dailyStatistics[date].latest
    });
}

//console.log(output);

// Write output to JSON file
fs.writeFileSync('output.json', JSON.stringify(output, null, 4));

console.log('Statistics calculated and saved to output.json');