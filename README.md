Heart Rate Statistics Calculator
This is a Node.js script to calculate and analyze heart rate statistics from a JSON file containing heart rate data.

Installation
Before running the script, ensure you have Node.js installed on your system. You can download it from nodejs.org.

Clone this repository to your local machine:
bash
Copy code
git clone git@github.com:kiran1503/cloudrayAssesment.git
Navigate to the project directory:

Copy code
npm install
Usage
Place your heart rate data in a JSON file named heartRatesData.json in the root directory of the project. Ensure the structure of the JSON file matches the expected format (e.g., { "timestamps": { "startTime": "YYYY-MM-DDTHH:MM:SSZ", "endTime": "YYYY-MM-DDTHH:MM:SSZ" }, "beatsPerMinute": 70 }).

Run the script:
Copy code
npm start
Once the script finishes execution, the calculated statistics will be saved to a file named output.json in the root directory.

Output Format
The output file output.json will contain an array of objects, each representing the heart rate statistics for a particular day. The properties of each object include:

date: The date for which the statistics are calculated.
min: The minimum heart rate recorded on that day.
max: The maximum heart rate recorded on that day.
median: The median heart rate calculated from all recorded heart rates on that day.
latestDataTimestamp: The timestamp of the latest heart rate data entry on that da
