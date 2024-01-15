# BUILD CHARTS FOR WORK REPORTS
- Trend tracking (manual)
- Ticket counts
  - team
  - individual
  - TSR / CSR
  - Categories
  

## STRUCTURE
- Data documents store the data for each chart, could be thought of as "API data" that's imported in
- 'examples.tsx' is where all the tested and working charts are ... copy/paste from there, or visit the library website
- For now, all charts UI and data are grouped into folders for full modularity
  

## FUTURE STRUCTURE
- Data will live on app.tsx
  - This is since (and if) JSON file from Sonar always contains the same shape/format
- Components will only have charts and props
  - Props will allow for data to be manipulated
    - For simplicity, we can 'MAP' the data by 'TICKET GROUP' to trim data for accuracy and to make it more lightweight to work with
    - The main ticket properties we care about (so far):
      - 'status' - will help us categorize and keep count