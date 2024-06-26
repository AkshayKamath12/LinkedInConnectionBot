Create CSV file
1) first column should contain the full urls for each LinkedIn profile that you want to connect to
2) second column is used to send optional messages to the LinkedIn profile on its row; values for this column can be empty
3) there shouldn't be headers used but the scraper will still work if they are present

error handling for CSV file
1) Rows with invalid urls or urls that don't go to LinkedIn profiles are skipped and the errors are logged on the console window
2) empty rows are skipped over
3) LinkedIn profiles that have the follow option instead of the connect option result in the follow button being clicked

How to run:
1) Download repository as a zip file and extract the contents.
2) Navigate to chrome extensions and enable developer mode.
3) Select load unpacked and choose the location of the extracted zip file.
4) IMPORTANT: Navigate to any LinkedIn url before starting the scraping and ensure you are logged in.
5) Click on the "choose file" button
6) Upload the csv file that you made and let the scraper connect to each profile
