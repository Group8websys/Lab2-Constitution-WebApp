# Lab2
**Krisia Flores** personal rep: https://github.com/kflores2/websys.git

Works: annotations/analysis for articles 5-7 and the 10 amendments, helped with decision to toggle analysis, did code review
I ran into some problems when trying to analyze the 10 amendments, as they are very short. To solve this problem, I gave examples and the reasoning as to why they were implemented.
We decided as a group to make a toggle function to hide or show the annotation blocks that included our analysis.


name: **Ayah Tharwat**
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

Another problem was the CSS formatting of the quiz. I had a problem getting all the button to look the same using
the same class (button) but some of them had the correct class but would not format the way I wanted and that
was because I had linked the wrong css file or forgot to link the css file onto the html.
I also experimented with some new css propoerties like display:flex and font-size:rem.
Display flex was much nicer to use especially for my buttons and the mcq choices which were in highlighed boxes.
I wanted the buttons to be symmetrical and under each other without any positioning difficulty and display flex
deemed to be a better more flexible design and layout choice. I used the below sources to understand more.
https://www.geeksforgeeks.org/css-flex-property/ 
https://css-tricks.com/snippets/css/a-guide-to-flexbox/ 

I also used font-size: rem instead of the generic px,pt,%. I liked that rem would be easier to scale if the user
decided to change their browser's font-size option.They are resolution independent. Professor gave me this piece of advice:"You can use rem for font size. Just remember that rem is relative so either force a font with something like Google Web fonts or test out a couple of different fonts off your font-family list to make sure things still look OK with alternative fonts". This is
not an issue because I tested out the sizes and they looked good.

**Jialin Yu** - yuj14
Induvidual repo: https://github.com/jlin9533/websyslabs

Works: HTML & CSS for index, annotations for articles 1-4

I copied the texts of article 1-7 and 10 amendments from the gov site into our site. 
For styling, I didn't do anything fancy. I divided each article/amendment with a border and used different heading tag to mark up the texts and make them easier to read. 

Instead of directing the user to another web page to read our analysis, we decided as a group to make a toggle function to hide or show the annotation blocks. To implement this functionality, I place a button at the end of each article/amendment div and wrote a short function using jQuery. (Clicking the button can toggle the corresponding annotation div) 

One thing that I got stuck is I could not find a way to toggle different annotation div indiviudally. When the user clicked on one of the button, all annotations would show up or hide. I found a way to fix this issue: given each annotation a unique id and setting the display style to none. This is definitly not the most efficient way to fix the problem and I will continue to find a better solution after class. 