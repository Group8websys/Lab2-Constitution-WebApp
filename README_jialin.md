Jialin Yu - yuj14
Induvidual repo: https://github.com/jlin9533/websyslabs

Works: HTML & CSS for index, annotations for articles 1-4

I copied the texts of article 1-7 and 10 amendments from the gov site into our site. 
For styling, I didn't do anything fancy. I divided each article/amendment with a border and used different heading tag to mark up the texts and make them easier to read. 

Instead of directing the user to another web page to read our analysis, we decided as a group to make a toggle function to hide or show the annotation blocks. To implement this functionality, I place a button at the end of each article/amendment div and wrote a short function using jQuery. (Clicking the button can toggle the corresponding annotation div) 

One thing that I got stuck is I could not find a way to toggle different annotation div indiviudally. When the user clicked on one of the button, all annotations would show up or hide. I found a way to fix this issue: given each annotation a unique id and setting the display style to none. This is definitly not the most efficient way to fix the problem and I will continue to find a better solution after class. 