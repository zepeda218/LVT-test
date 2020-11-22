# LTV-test

A webpage with responsive design that provides users with an interface to search email addresses. 

After entering an email address into the search bar, the user will encounter a series of validation requests. These requests feature regular expressions in case the written text its not an email address. If a valid email address is entered, a request will be sent to the LTV API. This uses the JS fetch function to find if the email address matches any user in the API.

This object is then stored using the browser's localStorage property so it can be redirected to the results page. There it can show a result according to the retreived object. If the object retreived is empty, the webpage will tell the user it did not find any results. It will then encourage the user to make another search. Instead, if the object retreived has a record, all of the record data gets shown in a card that was hidden before the result.

After this process, the local storage gets cleaned so the user can make another request without a problem. 

Good practices/conventions used for this project:
- Formating and comments for better understanding of the code
- Separated and concise functions that do specific tasks in case there's need of function improvement in the future and to help better understanding of the code.
- Separation of HTML code in sections to help with organizing CSS selectors
- Re-usage of CSS attributes and separation of the file in blocks (general styles, sections, @media) for its readibility and easy finding of attributes in case there's need for change.
- Usage of bootstrap to make the webpage responsive into different types of electronic devices
