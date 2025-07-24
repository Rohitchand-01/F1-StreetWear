// This is a mock function simulating sending data to Google Sheets.
// You can replace it later with real API integration if needed.

export const sendToGoogleSheets = async (data) => {
  try {
    console.log('Sending data to Google Sheets:', data);

    // Simulate a delay like a real API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  } catch (error) {
    console.error('Failed to send data to Google Sheets:', error);
    throw new Error('Google Sheets submission failed');
  }
};
