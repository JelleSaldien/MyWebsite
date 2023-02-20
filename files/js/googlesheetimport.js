// Replace 'SPREADSHEET_ID' with your own spreadsheet ID and 'SHEET_NAME' with the name of your sheet.
const SPREADSHEET_ID = '1O1U5HUjsVnCu2f-DhbEjVxQD9apvfOojQ1IuJ4PS2Tw';
const SHEET_NAME = 'Links Github';

// Load the Google Sheets API client library
gapi.load('client', function() {
  // Initialize the API client with your Google Sheets API credentials
  gapi.client.init({
    apiKey: 'AIzaSyBx-QZ-jgA4w0SXP0dksfIs7n-xan_7oaM',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  }).then(function() {
    // Load the data from the specified sheet
    return gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: SHEET_NAME,
    });
  }).then(function(response) {
    // Parse the data from the response object
    const data = response.result.values;
    if (data.length > 0) {
      // Create an unordered list element to hold the links
      const linkList = document.createElement('ul');
      // Loop through the data and create an anchor element for each link
      for (let i = 1; i < data.length; i++) {
        const linkName = data[i][0];
        const linkURL = data[i][1];
        const link = document.createElement('a');
        link.href = linkURL;
        link.textContent = linkName;
        const listItem = document.createElement('li');
        listItem.appendChild(link);
        linkList.appendChild(listItem);
      }
      // Add the link list to the page
      const linkContainer = document.getElementById('links');
      linkContainer.appendChild(linkList);
    }
  }, function(error) {
    console.error(error.result.error.message);
  });
});
