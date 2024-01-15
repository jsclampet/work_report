# BUILD CHARTS FOR WORK REPORTS
- Trend tracking (manual)
- Ticket counts
  - team
  - individual
  - TSR / CSR
  - Categories

## KEEP IN MIND
- Ticket group ID
- BOTH ARE STRINGS, <NOT> NUMBERS
  - TECH SUPPORT
    - 17
      - Tech Support Tier 2 = 
    - 3
      - NRTC Tech Support
    - 
  - CUSTOMER SUPPORT
    - 19
      - NRTC Customer Support
    - 18
      - CUSTOMER SUPPORT TIER 2

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
      - 'sonar_unique_id' - for keys in TSX maps
      - "created_at": "2024-01-09T07:57:41-06:00",
        - TO KEEP TRACK OF MONTHS and DAYS
          - const dateTrimmed = data.created_at.split('T')[0]
          - const month = date.split('-')[1]
          - const day = date.split('-')[2]
        - TO KEEP TRACK OF TIME (it is stored as military)
          - const timeTrimmed = data.created_at.split('T')[1].split('-')[0]
          - const convertMilitaryToStandard = (t) => t + (t > 12 ? t - 12 + 'pm' : t + 'am')
          - const time = convertMilitaryToStandard(timeTrimmed)