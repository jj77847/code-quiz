# code-quiz-final

Batman 66 inspired quiz using JavaScript, HTML and CSS

Welcome to a Batman 66' themed Quiz.

There are 10 questions and a 100sec timer that will Start; once the 'START QUIZ' button is pressed.

You will have 10 points awarded for a correct answer and -5points for an incorrect answer.

Once you've finished; you can save your high-score.

By adding your initials to the text box and pressing the
'SUBMIT' button.

Summary

- HTML and CSS and Javascript documents create a quiz with multiple choice questions with Javascript trivia
- This project emphasizes the use of using Javascript to make dynamic changes to an HMTL document
- This project utilizes the use of appending HTML pages

This project has the following features:

- A Start Quiz button
  _ This starts a timer for the user
  _ Each question averages 10 seconds each for a total time of 100 seconds + 1.
  ￼
- An appended HTML page that features questions, and multiple choice answers
  _ If questions are answered incorrectly, 5 seconds are deducted off remaining time
  _ Answers are recording using an event listener, "click" and tracks correct answers
  ￼
  ￼
- An appended HTML page that features:
  _ Final score which is calculated using time remaining
  _ A Summary of how many questions answered correctly
  _ Input area to record initials
  _ A Submit button \* Submit buttom saves initials and score to local storage
  ￼
- A Highscores HTML
  _ This a list summary of intials and final scores
  _ Clear button resets the page and local storage \* Go back button travels to the start of the quiz
  ￼

Psuedo code:

- Create a timer attached to a button with a starting value of 0
- When timer is pressed start a reverse countdown
- Create a 0 for countdown
- When countdown starts, start quiz
- Start Quiz will be on appended page
- Append the question: choices
- When user selects the right answer, textcontent "Correct!"
- When user selects the right answer, textcontent "Wrong!"
- Final score will keep track of how many the user got right
- Left over time will be deducted from final score
- Final Score Appended page
- Captures local storage
- Travels to another HTML
- Retrieved highscores

This project has script features of:

- Questions contained in an array variable with objects
- Variable declaration area
- An event listener (onclick) that generates time interval
- A function to render the questions and choices on the page using a for loop
- An event listener on all list choices
- A comparison statement to compare correct answers to choices
- An appended page showing the final stats of the individual user with input area for initials, captures local storage
- Highscores retreived local storage

This project has media Queries for:

- max-width: 980px
  - Adjusts body and container width
- max-width: 786px
  - Adjusts body and container width
  - Adjusts buttons
- max-width: 640px
  - Adjusts body and container width
  - Adjusts buttons to be centered and stacked

To Execute File:
Open in browser

Features:

- Two HTML Pages
  - Index.html
    - Contains landing page to start timer
    - Appends two new pages
- Highscores \* Retreives local data from previous page
- One CSS Page
  - Styles.css
    - Contains centering and styling for html list features
    - Contains media queries
- Two Javascript Page _ Contains: _ Variables, including arrays with object _ Event listeners _ if/else if statements _ For Loops _ Functions \* Local Storage set and get

Author

Jonathan Jefferies
