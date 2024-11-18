First install node js from https://nodejs.org/en/download/
If you don't have it installed.. type node -v in your terminal to check if it's installed.

Run npm init -y in your terminal to create a package.json file.

Install tailwind css by running npm install -D tailwindcss postcss autoprefixer

Run npx tailwindcss init to create a tailwind.config.js file.

Update the tailwind.config.js file with the following:
content: [./*.{html,js}]

create input.css file and add the following:
@tailwind base;
@tailwind components;
@tailwind utilities;

Edit the package.json file to include the following scripts:
watch: tailwindcss -i ./input.css -o ./output.css --watch
or "watch": "tailwindcss -i ./input.css -o ./output.css --watch"

Copy the index.html file and paste it in your project folder from tailwind.  Start using Tailwind in your HTML.
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>

run npm run watch in your terminal to start the Tailwind CSS compiler.

On Tailwinds CSS website, go search for background colors and copy the code and paste it in your HTML file.
Put class into html element to see the background color.

Code in index.html file:   <h1 class="text-3xl font-bold underline bg-green-500 text-white container">

Edit the tailwind.config.js file to add a screen size under the theme section.
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },

Edit the tailwind.config.js file extend section and add a container class with center true, padding with default of 12px and md with 32px.

Update the index.html to change colors based on sm, md, lg, xl.
  <h1 class="text-3xl font-bold underline bg-green-500 text-white container mx-auto sm:bg-red-500 md:bg-blue-500 lg:bg-yellow-500 xl:bg-green-500">

Go to Fonts.google.com and search for font you want.  Copy all the code and paste it in the index.html file in the head section.  I used Lobster and Jost.  Be sure to click @import at the top of the code to import the font.  Put this in the input.css file. 

Edit the tailwind.config.js file and add the font family to the extend section.  
Add font-Jost and font-Lobster to the index.html file h1 element to see the fonts.

  <h1 class="text-3xl font-bold underline bg-green-500 text-white container mx-auto sm:bg-red-500
   md:bg-blue-500 lg:bg-yellow-500 xl:bg-green-500 font-Lobster">

Copy index skeleton and paste into index.html file.

Under Swiper comment section add link to output.css file.
<link href="./output.css" rel="stylesheet">

Add favicon to the head section ico file.
<link rel="icon" type="image/x-icon" href="./favicon.ico">

Add cdn link for remixicon under remix comment section.
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.4.0/fonts/remixicon.css" rel="stylesheet">


Edit input.css to add a body and apply backgroun color of b-green-950.
body{
   @apply  bg-green-950 text-white font-Jost tracking-wider;
}

Edit the header section to add class to navbar id element.

Add new link settings and hover effect in the input.css file.

Add class name of nav-link to the elements in the index.html file.

Now just follwo rest of code.. use main.js comemnts and step thru.

Create long line comments for these sections:  TOGGLE BUTTON, SHOW SCOLL UP, CHANGE BACKGROUND HEADER, SWIPER, SCROLL SECTIONS ACTIVE LINK AND SCROLL REVEAL ANIMATION.
main.js file starter code:
/*==================== TOGGLE BUTTON ====================*/

/*==================== SHOW SCROLL UP ====================*/ 

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SWIPER ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== SCROLL REVEAL ANIMATION ====================*/


https://www.youtube.com/watch?v=zKguO4oaAGs&t=892s

