add h1 to each website, add SEO tags to each website, do something about font readability



what I am doing right now:  add shadows to signify

fixing the add-on information on the vist-html-page, remove it on mobile, put it underneath on mobile, add shadows to signify

(use the search function to find things you've previously mentioned)
current suggestions: 



things I have done:
 -added a double layer of colour to text,
 - made my code more readable by adding everything numerically in the CSS, the index.html styling is on top, then the other pages follow orederly, sorted by how important they are
-I have added a h1 to the index.html and the visit.html, the gravity.html and the electricity.html, all of them
-I added text shadow to the <div class="box" ><p class="visitbb">Experience the Wonders of Science</p></div>, to improve contrast and make sure it wont blend no matter how the background looks, as it now consists of three different colours. 
-changed the hamburger menu to only show on mobile, and to dissapear on PC; I've also used "float: inline-end;" to make the navigation float up top  by the headline for good accsess
- I made the headline responsive by adding vw as the font-size announcer
-I have changed all the h1's, I have changed the add-on information box to sit on the side of the paragrraphs
-I have changed all the navigation/burger-menus to change depending on pc or mobile
-decided to keep the margin 50px that belonged to the museum-choice boxes
-I changed position to absolute on the bread-text higher to keep it centered above the paragraphs, in the middle, readability, keep it tidy
-I changed the Dinosaur.html page to have: a responsive text, vw, I made the class: "h3.openingtext2", I also added padding to it, percentage padding to keep it responsive, padding-top: 10%;
-added padding to the text in the info box, so that it doesn't blend with the edges of it
-added spacing to the info-box
-made the info-box hug the wall so it is separated by positioning from the other contents, checked console-log and found a padding on  the div container that sorrounded it, removed that, now it hugs, the only one without center positioning
-I have now made the "info-box" responsive, it changes depending on where mobile/pc, and it's text is now responsiove, 2vw, it hugs the wall, separate it from the other content
-readable fonts, no cursive, no serif, font used by google email, very readable
-I made the logo clickable as a "home-button" so that any user know where the index.html page is, the landing page, the home of the museum , I did thios by wrapping the excact span the logo was in, into a clickable a href. all pages except index.html can now click on the logo to get back to index.html
-I added opening times to the footer since that is the single most important thing/reason people check museum websites, they have to know when they can visit, or else they will do something else 
-I added an insane display for the visit page to showcase the beautiful architecture of the museumm, now, wehn you scroll the background image acts differently than the rest of the contetn as it has position:fixed  min-height: 100%;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
background-size: cover;}
-
  

maybe make the info-box clip the side to anchor it, gives a sense of it not floating with the others, separatres different types of inforamtion, good guide


a signifier is an additional piece of information that suppports an affordance

A signifier is an additional piece of information that supports an affordance.

Example: The chair has a balloon tied to it, implying that it is reserved for some special occasion.

Example: The button is greyed out, suggesting it is inactive.


what i will do now read more into interaction design to find the pieaces I want to implement, something about buttons, inviting landing page, change hover menu. Give one page a different layout



THINGS TO DO: Make the front page a little more directed, give more descirptions of the navigation-imagess, make bigger head-lines, tell as story on the front-page





make a button that has some signifiers, like handles, or grip

add SEO tags to the images, optimise website for internet-search 

making buttons





what is affordance
an affordance is a percievable or visual clue that tells you what action the thing ca nfford, it tells the user what action they can take with the thing in fron of them
percieving a chair, the structure, plains and stability, we know it can be sat or stood on.

example, percieving a button on a screen, we know it is something that can be pressed to produce an action

make buttons look like buttons

weak signifiers is an even more significant problem for mobile users, in the attempot to understand wether an individual element is interactive ornot, desktop users  can move the cursor on the elment and check wether the cursor changes its state. Mobile users don't have such an opportunity. To understand wether an element is interactive or not, users have to tap on it - there's no other way to check the interactivity 

Your ability to interpret clickability signifiers aren't the same as your user's because you know what each element in your own design is intended to do 

among all the examples of buttons, the "filled button with shadows" design is the clearest for users. When users ee dimensionality of an object, they instantly know that it's something they can press. 

Don't forget about the whitespace 
not only the visual properties of the button itself are important. the amount of whitespace near the button makes it easier (or harder) for users to understand wether it'sd an interactive element or not. In the example below some user might confuse the ghost button with an information box 

Conventional placement for buttons imporves discoverability. With a standar layout, users will easily understand the purpose of each element - even if it's a button without strong signifiers
combinign a standard layout with clean visual design and ample whitespace makes the layout more understandable

dont play hunt-the-button game with your users.


THE CARD THING: IF YOU WANT CERTAIN ANIMAL SPECIES TO SHOW UP AS A CARD COLLECTION; press it and see more details about the animal on the card 
Add the card thing to show dinosaurs, we find this in 
JavaScript 1 - Module 4 , Lesson - Query String Parameters, "Adding parameters" 
it's description says:
 In this video we will add a variable to the href value in an <a> tag, retrieve it from the query string on a separate page, and then use its value in an API call.


 form validation JavaScript 1 - Module 4,  lesson 4.4


I like this class for the styling of the Electricity:  <h2 class="bb">Electricity</h2>



One study conducted by decision making expert Sheena Iyengar found that people are 10x more likely to make purchases when presented with fewer purchasing options.
link: https://www.invisionapp.com/inside-design/pros-and-cons-of-hamburger-menus/




p.landingPage {
 margin-left: 1480%;
 
}

@media screen and (min-width: 801px) {}
.dropdown-content a {
  
  display: none;
}

a tiny bit on usability testing 

usability testing

developers, designers, and other product stakeholders might get locked in certain types of thinking while working on a certain procject . They might be unable to see issues on the interface or wioth the flow of the website. A develoeprs view might also be more technical than your average user - performing technical tasks which might seem easy for a developer could be quite difficult for real users. There might be several issues we haven't though of which usability testing can reveal. Assesing real users and their interactions with your product is vital to the success of your product 

Usuabilityt testing allows us to test how user-friendly a site is and wether users get lost or confuesd t anyy point. If there is anythign that makes the need of the user dissapear, this mus be fixed. 
Usabilty testing can be  implemented at various stages of the proces, from the paper  prototype at the start of the project , trhrough to the website before launching. It can even take the form of continued testing down the line. At almost every point in a porduct life cycle, it is useful to understand how a user will interact with the product 


ideas for addition: add javascript location, javaascript for the address update location with weather forecast, implement innerhtml
innerhtml


I made the hamburger menu stay up top on the same height level as the science museum headline by adding something to the media query, I added float, so it could float up there,
i added float: inline-end, and i removed display: block. Now it stays up top on the peak of the headline, all the way up top navigation, only on mobile 
.dropdown {
  position: relative;

  width: 100px;
align-items: center;
left:0;
right: auto;
float: inline-end;




 
  
}

box model

i pressed crl+shift+f and then searched for the class "txt" which I knew, by analyzing the console log and it's properties contained my headline, their I got the intel that the element in control was in this present case the .txt. here i changed the font-size from percentages to a responsive thing, that being: vw. Now the font size is 5vw, this  make the hamburger menu stay up top as the headline srhinks synchronised with the page shrinking, thus leaving room for the hamburger menu at all times so it signifies I am the navigation by staying up top in the right corner where we humans freqently scramble for information, and often navigation placed in a place of comfort and as and endpoint to come back to, upper right corner 


saturday, sunday: add some sort of JavaScript Functionality, Cart, read through what they say in Discord, add a map that shows the location, with JavaScript API, this helps you in many ways

dont care about other projects, only the current project, ask if you can have the resits when you are being quizzed 




add to the footer opening hours