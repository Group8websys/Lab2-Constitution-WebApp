name: Ayah Tharwat
rcsid: tharwa
github handle: Ayahth23

For this lab, I was in charge of working on the interactive section of the lab. I decided
to go with an interactive quiz that would test the user on their knowledge of the Constitution considering
that's the whole assignment. There were some challenges with the javascript creation of the quiz form.
I had 2 main issues. I couldn't get my answers to show up for each multiple choice question. It would only
include the question I included in the javascript file; however, it wouldn't show any of the answer choices.
I was debugging for 2 days trying to find out where I went wrong, only to figure out that I had put "choice,innerText"
instead of "choice.innerText". A classic coding error of just a comma but I was glad to find the issue and 
resolve it after 2 days.

sources for javascript quiz: 
https://www.sitepoint.com/simple-javascript-quiz/
https://simplestepscode.com/javascript-quiz-tutorial/ 
https://coding.degree/javascript-quiz-tutorial/ 
https://dev.to/sulaimonolaniran/building-a-simple-quiz-with-html-css-and-javascript-4elp 

I read through these sources to get an idea on how to implement the quiz. I didn't want to make anything
too complex, but at the same time wanted it to be appealing and engaging for the user. 
The quiz asks the user to begin by pressing the "Play" button. Then it sends them to the game.html file
where they answer 10 mcq questions about the Constitution, it's amendments, articles, and facts.
There is also a progress bar that keeps track of how many questions the user answered out of the 10 questions.
It also tallies up the score of how many correct answers they got. Then it sends the user to the end.html 
page where they can take the quiz again or they can go back to the index.html page where they can review
the constitution and get annotations.
