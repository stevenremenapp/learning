#General Questions

- What did you learn yesterday/this week?
- What excites or interests you about coding?
- What is a recent technical challenge you experienced and how did you solve it?
- When building a new web site or maintaining one, can you explain some techniques you have used to increase performance?
- Can you describe some SEO best practices or techniques you have used lately?
- Can you explain any common techniques or recent issues solved in regards to front-end security?
- What actions have you personally taken on recent projects to increase maintainability of your code?
- Talk about your preferred development environment.
- Which version control systems are you familiar with?
- Can you describe your workflow when you create a web page?
- If you have 5 different stylesheets, how would you best integrate them into the site?
- Can you describe the difference between progressive enhancement and graceful degradation?
- How would you optimize a website's assets/resources?
- How many resources will a browser download from a given domain at a time?
- What are the exceptions?
- Name 3 ways to decrease page load (perceived or actual load time).
- If you jumped on a project and they used tabs and you used spaces, what would you do?
- Describe how you would create a simple slideshow page.
- If you could master one technology this year, what would it be?
- Explain the importance of standards and standards bodies.
- What is Flash of Unstyled Content? How do you avoid FOUC?
- Explain what ARIA and screenreaders are, and how to make a website accessible.
- Explain some of the pros and cons for CSS animations versus JavaScript animations.
- What does CORS stand for and what issue does it address?
- How did you handle a disagreement with your boss or your collaborator?
- What resources do you use to learn about the latest in front end development and design?

#Accessibility Interview Questions
These questions try to stay away from directly asking candidates to recite specifications, or rattle off screen reader hot keys. Those can easily be looked up on the job. Instead these questions try to act as conversation starters, to gain insight into how someone solves problems, and interprets accessible, inclusive user experiences.

Questions are grouped into three buckets: General, Technical, and Design. These categories may be a mistake, but we’re going with it for now. If you have better ideas for categories, and questions in general, please let us know! Ideally, a candidate would be able to answer questions from each category.

###General
- Who benefits from accessibility?
- How would you define inclusive and/or universal design?
- Can you provide an example? (does not need to be web related)
- How has your approach to accessibility changed over time?
- Name some ways responsive/mobile first design can affect accessibility.
- What are some user experience (UX) concerns to be aware of when using iconography in user interfaces (UI)?
- What assistive technologies (ATs) are you familiar with (desktop + mobile)?
- What do you feel is your skill level with these AT(s)?
- Describe the purpose of heading and header elements, and how they are useful in websites and web applications.
- What are skip links? How can users benefit from them? What are some of their limitations?
- What are some of the tools available to test the accessibility of a website or web application?
- How can using plain language benefit the accessibility of a project?
- Describe appropriate instances to use a link, vs a generic button, vs a submit button.
- Describe ways to indicate an element or component’s state that aren’t entirely reliant on visuals.
- How can carousels be problematic for users with disabilities?
- What are some design considerations for supporting text resize/zoom on web? Mobile apps?
- In what ways can the CSS display property affect the accessibility of elements within a document?
- What is the difference between legend and label elements?
- What is the purpose of the alt attribute for images?
- Can you describe the effect of an empty alt, or the lack of the attribute, on an image?
- In what instances might an empty alt or no alt be appropriate?
- How might alternative text for an image vary, depending on the context the image is used in?
- Since svgs don’t accept the alt attribute, how can one provide alternative text for these graphics?
- Do you need to supply an image an alt attribute if used witin a figure with a figcaption?

###Technical
- What methods would you use to find an element’s accessible name?
- What is the accessibility tree?
- Why are rems or ems preferable to pixels for setting type size?
- Why is it important to allow the viewport to scale?
- How is the title attribute exposed to assistive technologies?
- What kind of elements can title attributes be used on?
- What sort of information is appropriate for use with the title attribute?
- Describe a scenario where you might need to use aria-describedby.
- What are landmark roles and how can they be useful?
- In what situations might you use a toggle button, vs a switch control, vs a checkbox?
- Describe methods to hide content:
    - From all users.
    - From only screen reader users.
    - From sighted users, but not screen reader users.
    - And why you might do so.
- Is it possible to overuse ARIA in a website? Explain why or why not.
- Aside from screen readers, What other assistive technologies can be affected by use of ARIA? How?
- What is the difference between hidden, aria-hidden="true" and role="presentation" or role="none"?
- Describe instances where you might need to use aria-live.
What values (such as assertive or polite) might you give the attribute in different situations?
- How would you mark-up an icon font or SVG that was for decorative purposes?
- How is CSS pseudo content treated by screen readers?
- Describe the steps you take in reviewing or auditing a website or application for accessibility?
- Describe an instance where an automated test would not flag a blatant accessibility error?
- When should you use or recommend ARIA roles or attributes to solve an accessibility issue?
- Describe your process for figuring out if an accessibility bug is due to a developer, browser, or assistive technology error?
- Describe your thoughts on how a single page web app should handle focus when a new screen loads.
- Name an ARIA attribute that requires either a child/parent relationship or a pairing role.
- What is your understanding of “accessible name computation” and how it affects modifying the way screen readers announce certain content?
- What are some issues with modifying normal scrolling behavior? For example: infinite scrolling or scrolljacking.

###Design
- Talk about the pros and cons of flat and skeuomorphic design trends in regards to accessibility.
- Explain the importance of color contrast in designing for inclusion.
- Besides :hover, name other states an actionable element (links, buttons, form controls, etc.) could have styles for, and why providing them is important?
- When might it be appropriate to remove the visual outline from a focused element?
- If a form or form field were to return an error message, where might you want those error messages to be located?
- How can utilizing animation in an interface affect the user experience?
- Explain how you could make an infographic accessible for screen reader users.
- Why is color alone insufficient to draw attention to actionable elements, or to convey state?
- What are some of the inclusive UX problems that need to be solved when content (static or actionable) is revealed on :hover, and how would you propose solving for them?

#Non-Technical Questions

- What's a cool project that you've recently worked on?
- What are some things you like about the developer tools you use?
- Who inspires you in the front-end community?
- Do you have any pet projects? What kind?
- What's your favorite feature of Internet Explorer?
- How do you like your coffee?