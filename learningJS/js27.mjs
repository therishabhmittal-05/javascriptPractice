import fetch from 'node-fetch';
import fs from 'fs/promises';

async function fetchAndSaveJson(apiUrl, outputPath, pageNumber) {
    try {
        // Fetch JSON data
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        // Beautify JSON
        const beautifiedJson = JSON.stringify({ page: pageNumber, data: jsonData }, null, 2);

        // Create a new output file name for each page
        const pageOutputPath = `${outputPath.replace('.json', `(${pageNumber}).json`)}`;

        // Write to the file
        await fs.writeFile(pageOutputPath, beautifiedJson);

        console.log(`JSON data for page ${pageNumber} saved to:`, pageOutputPath);
    } catch (error) {
        console.error('Error fetching and saving JSON:', error.message);
    }
}

// Replace 'gurbani.json' with the desired output file path
const outputPath = 'gurbani.json';

// Replace 'YOUR_BASE_API_URL' with the base URL and use a loop for different page numbers
const baseApiUrl = 'https://data.searchgurbani.com/api/get_ang_by_ang?page=';

// Assuming you want data for pages 1430 to 1435
for (let pageNumber = 1401; pageNumber <= 1401; pageNumber++) {
    const apiUrl = `${baseApiUrl}${pageNumber}&line_no=undefined`;
    await fetchAndSaveJson(apiUrl, outputPath, pageNumber);
}
