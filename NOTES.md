# Bootstrap 5 from scratch - Build 5 Modern Websites

## Getting Started

### Welcome to the course & Projects Overview

- [Bootstrap 5 websites course GitHub repo](https://github.com/bradtraversy/bootstrap-5-websites)
- [BS5 simple starter boilerplate GitHub repo](https://github.com/bradtraversy/bs5-simple-starter)

#### Project details

- Blog Mastery : Ebook website. Clean look and feel
  - Responsive, navigation bar, custom primary color, background effect using svg, font awesome icons, modal, input, contact form, map, Formspree, deployment
- Corso        : training and seminar videos website
  - Responsive, navigation bar, background image pattern with custom css for overlay and carousel, sliders, cards
- Portfolio    : Portfolio website
  - Responsive, full viewport, custom javascript, font awsome brand icons, progress bars, Third party script lightbox2 open with scroll, deployment
- Yavin        : Building office spaces website. Light modern business look. Cards, icons, slider
  - Responsive, navigation bar, positioned background images, custom javascript, inner page, cards, icon area, carousel slider
- Vera         : software solutions website. Dark modern business look
  - Responsive, navigation bar, third party javascript, custom css for absolute background images, image cards with badges, video section with animated button, video modal, image card modals, subscribe form

### What is Bootstrap

- Bootstrap is an open-source frontend CSS/UI framework for developing responsive websites and user interfaces
- It provides pre-existing components like buttons, alerts, navigation bars and more
- Long lived and easy to use
- Includes many utility classes to maximize your efficiency (i.e. for margins, paddings, display, positioning, grids, colors etc.)

#### Prerequisites

- It's important to know the fundamentals of both **HTML** & **CSS** before jumping into ***ANY*** type of web framework

#### Advantages

- **Responsive Design** : Bootstrap is a ***mobile-first*** framework
- **Rapid Development** : Save time by not writing near as much CSS
- **Prototyping** : Great for getting frontends up quickly
- **Customizable** : Use ***Sass*** to compile your own version of bootstrap.css
- **JavaScript Plugins** : Modals, carousels, popovers and more
- **Documentation** : Find working examples of everything
- **Cross Browser Compatibility** : Works on all browsers and OS

#### Is bootstrap dead rumour

- Bootstrap is heavily used in all areas including enterprise, startups and freelancers/agencies
- It is the alternative to Tailwind CSS
- Most people that say Bootstrap (or anything for that matter) is dead are influencers and people that never worked in the real world
- Some large companies thath use Bootstrap are: Twitter, Spotify, Linkedin, Udemy, Upwork and many, many more

### How to use Bootstrap

#### Using a CDN (Content Delivery Network)

- Use remote links in your HTML file for the CSS and JS (I.e. via jsDelivr)

```html
<link href="..." rel="stylesheet" />
<script src="..."></script>
```

- This method is not very customizable, but is quick and simple

#### Download the files

- You can download the compiled CSS and JS and include them locally instead of using remote links

```html
<link href="bootstrap.min.css" rel="stylesheet" />
<script src="bootstrap.min.js"></script>
```

- This method is also not very customizable, but it is quick, simple **and local**

#### Compiling Sass

- You can compile the Bootstrap Sass files on your own and customize the CSS that is built from them
- You can download the Sass files or install them using a package manager like **NPM**
- This method is more complicated but very customizable **and local**

### Basic Environment Setup

#### Text editor

- Visual Studio Code

#### Runtime Environment (for utilizing npm)

- Node.js

#### Version Control System

- git

#### Visual Studio Code Extensions

- **Live server** : Launch a development local Server with live reload feature for static & dynamic pages
- **Prettier - Code formatter** : Opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. (Also recommended to enable ***Editor: Format On Save Mode*** in ***Settings***)
- **Emmet**: Abbreviations transformed into structured code block. Improves HTML & CSS workflow: Usually already installed

### Bootstrap Sandbox Setup

- Files added in [bootstrap-sandbox folder](bootstrap-sandbox/template.html)

## Bootstrap Fundamentals - Part 1

### Containers

- Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.

### Typography

- Typography is a feature of Bootstrap for styling and formatting the text content
- Automatically selects the best font family for your device

### Display & Position

- The Position Helper is for quickly configuring the position of an element
- The Display Property is to quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing

### Background & Text Colors

- Convey meaning through background-color and add decoration with gradients
- Convey meaning through text-color with a handful of color utility classes. Includes support for styling links with hover states

### Spacing

- Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance
- Spacing values:
| -1 | 0.25 rem |
| -2 | 0.50 rem |
| -3 | 1.00 rem |
| -4 | 1.50 rem |
| -5 | 3.00 rem |

### Sizing, Borders & Shadows

- Sizing easily make an element as wide or as tall with our width and height utilities
- Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element
- Add or remove shadows to elements with box-shadow utilities.
- For sizes you most likely need to write custom CSS as there is not too much to work with here

### Breakpoints

- Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap

#### Default Breakpoints

| Extra Small       | <576px  |
| Small             | ≥576px  |
| Medium            | ≥768px  |
| Large             | ≥992px  |
| Extra Large       | ≥1200px |
| Extra Extra Large | ≥1400px |

### Buttons

- Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more

### Navbar

- Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin

### Dark Mode & Variables

- Bootstrap now supports color modes, or themes, as of v5.3.0. Explore our default light color mode and the new dark mode, or create your own using our styles as your template
- Use Bootstrap’s CSS custom properties for fast and forward-looking design and development

## Bootstrap Fundamentals - Part 2

### Bootstrap Grid & Columns

- Bootstrap grid system is a powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes
- Modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid system. Plus, see how to use column classes to manage widths of non-grid elements

### Flexbox Classes

- Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary

### Cards

- Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options. A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options

### List Groups & Badges

- List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within
- Badges are a small count and labeling component that scale to match the size of the immediate parent element by using relative font sizing and em units

### Forms & Input

- Bootstrap’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices

### Form Validation & Display

- Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript

### Alerts & Progress Bars

- Alerts Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages
- Custom progress bars featuring support for stacked bars, animated backgrounds, and text labels

### Tables

- Opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap

### Breadcrumbs & Pagination

- Breadcrumbs indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS
- Showing pagination to indicate a series of related content exists across multiple pages

### Other CSS Utilities

- Text truncation truncates long strings of text with an ellipsis
- Stretched link makes any HTML element or Bootstrap component clickable by “stretching” a nested link via CSS
- Visibility controls the visibility of elements, without modifying their display, with visibility utilities
- Toggle floats on any element, across any breakpoint, using our responsive float utilities. (Aren't used much any more because of flexbox)

## Dynamic JavaScript Components

### Dropdowns

- Dropdowns toggles contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin

### Accordions & Collapse

- Vertically collapsing accordions in combination with Collapse JavaScript plugin
- Collapse toggle the visibility of content across your project with a few classes and JavaScript plugins

### Carousel

- A slideshow component for cycling through elements—images or slides of text—like a carousel

### Toast Notification

- Push notifications to your visitors with a toast, a lightweight and easily customizable alert message

### Spinners

- Spinners indicate the loading state of a component or page with Bootstrap, built entirely with HTML, CSS, and no JavaScript

### Modals

- Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content

### Popovers & Tooltips

- Add Bootstrap popovers, like those found in iOS, to any element on your site
- Add custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-bs-attributes for local title storage

### Darkmode Toggle

## Extra Section about standard data attributes

- Bootstrap's specific data attributes, which are used to initialize and configure Bootstrap's JavaScript plugins

`data-` **Attributes for Data Storage:**  
`data-id`: Used to store an identifier associated with an element.  
`data-name`: Used to store a name or label for an element.  
`data-value`: Used to store a value associated with an element.

`data-` **Attributes for Interaction:**  
`data-toggle`: Used to control the behavior of toggling components like modals, tooltips, and dropdowns.  
`data-target`: Used to specify the target element for toggling actions.  
`data-dismiss`: Used to dismiss a component (e.g., close a modal) via a specific element.

`data-` **Attributes for Custom Styling:**  
`data-custom-class`: Used to store a custom CSS class that can be applied using JavaScript.  
`data-bg-color`: Used to define a custom background color for an element.

`data-` **Attributes for Configuration:**  
`data-options`: Used to store JSON-encoded options for a component.  
`data-config`: Used to store configuration settings for an element.

`data-` **Attributes for State Tracking:**  
`data-active`: Used to indicate the active state of an element.  
`data-disabled`: Used to indicate that an element is disabled.  
`data-selected`: Used to indicate that an element is selected.

`data-` **Attributes for Miscellaneous Purposes:**  
`data-tooltip`: Used to provide tooltip text for an element.  
`data-label`: Used to define a label for an element.  
`data-info`: Used to store additional information about an element.

These are the standard data attributes in html. bootstrap basically just extends them with `data-bs` followed by a bootstrap extension like `-theme` or `-content` etc.

## Mini-Project Challenges

### Intro & Mini-Project Starter

- Creating an empty bootstrap starter

### Pricing Cards

- Using Bootstrap Icons: [https://icons.getbootstrap.com/](https://icons.getbootstrap.com/)
- Using poppins font from Google Fonts: [https://fonts.google.com/](https://fonts.google.com/)

### Ratings Component

- Using Font Awesome Icons: [https://fontawesome.com//](https://fontawesome.com/) Fetched CDN from [https://cdnjs.com/](https://cdnjs.com/)

### User List

## Custom Sass Workflow & Starter Template

### What Is Sass

- Sass is a CSS Pre-Processor that adds extra features to CSS
  - Sass files usually have a `.scss` extension
  - Sass files need to be compiled to regular CSS
  - We can edit Bootstrap Sass variables and then compile our own version of `bootstrap.css`

- Here are some of the main features that Sass offers.
  - Variables
  - Nesting
  - Mixins
  - Imports
  - Inheritance (@extend)
  - Operators
  - Conditionals
  - Modularity & Reusability

- There are many ways to compile .sass/.scss files to CSS
  - Task managers (eg. Gulp & Grunt)
  - Sass packages / command line tools (eg. sass, node-sass)
  - Desktop applications (eg. Koala)
  - IDE & editor extensions (eg. Live Sass Compiler)
  - Build tools (eg. Webpack, Parcel)

### Install & Setup Sass

- What is NPM
NPM (Node Package Manager) is a tool to install packages via the command line

- Over 1.5 Million packages at [npmjs.org](npmjs.org)
- Install Node.js to use NPM - [nodejs.org](nodejs.org)
- Packages/dependencies are listed in your `package.json` file
- You can install packages with:

  ```shell
  npm install PACKAGENAME
  ```

#### Create the simple starter

- CD to repo root folder
- Create project folder : ```md bs5-simple-starter```
- CD to folder : ```cd bs5-simple-starter```
- Create package.json : ```npm init -y```
- Install Sass (locally in this environment) : ```npm install sass```
- Create `.gitignore` file in repository root folder if not exists : ```ni ../.gitignore -type file```
- Create sass folder : ```md scss```
- Create `styles.scss` file : ```ni scss/styles.scss -type file```
- Create js folder : ```md js```
- Create js script file : ```ni js/script.js -type file```
- Add `sass:build` in `scripts` section of `package.json`
- Run the new script: ```npm run sass:build```
- Create root `index.html` file : ```ni index.html -type file```
- Add `sass:watch` in `scripts` section of `package.json`
- Run the new script to constantly watch for changes and build new css: ```npm run sass:watch```

### Install, Setup & Customize Bootstrap

- Install bootstrap (locally in this environment) : ```npm i bootstrap```
- Create `bootstrap.scss` file : ```ni scss/bootstrap.scss -type file```
- Copy javascript file from node_modules : ``` cp .\node_modules\bootstrap\dist\js\bootstrap.bundle.min.js .\js\. ```
- To get rid of the error in console for Chrome development tools [ctrl-shift-i]  
`DevTools failed to load source map: Could not load content for bootstrap.bundle.min.js.map`
  - Click on the Cogwheel in the upper right corner of chrome.
  - Make sure that "Preferences" is selected under "Settings" in the left sidebar.
  - In the "Sources" section, uncheck the "Enable JavaScript source maps" checkbox to disable it.

### Install & Setup Font Awesome

- Install free version of Font Awesome (locally in this environment) : ```npm i @fortawesome/fontawesome-free```
- Create `fontawesome.scss` file : ```ni scss/fontawesome.scss -type file```
- Create webfonts folder : ```md webfonts```
- Copy webfonts from fontawesome into webfonts folder : ``` cp .\node_modules\@fortawesome\fontawesome-free\webfonts\* .\webfonts\. ```

### Starter Template Download

- Download from: [https://github.com/bradtraversy/bs5-simple-starter](https://github.com/bradtraversy/bs5-simple-starter)
- Install dependencies with: **npm install**
- Watch the sass files with: **npm run: sass:watch**
- Open project html file with Live Server

## Website 1 - Ebook Website

### Ebook Project Intro

- Responsive, navigation bar, custom primary color, background effect using svg, font awesome icons, modal, input, contact form, map, Formspree, deployment

### Ebook Project Setup

#### Ebook website changes from bs5-simple-starter

- Used bs5-simple-starter
- Added favicon
- Added open-sans font from google fonts
- Added font family variable in bootstrap.scss
- Changed sample text in html

#### Steps to start developing ebook website

- CD to folder : ```cd ebook-website```
- Install dependencies ```npm i```
- Run the sass:watch script to constantly watch for changes and build new css: ```npm run sass:watch```
- Override colors in bootstrap.scss

### Navigation & Sass Variables

### Header/Hero Section

### Icon Section

### Navbar Scroll Effect

### Details Sections With Modals

### Testimonials, Download Section & Footer

### Contact Page

### Deploy To Vercel

A frontend hosting service [https://vercel.com/](https://vercel.com/)

- Integrated with Github/Gitlab/Bitbucket so that it will automatically publish changes when you push to main (or a dedicated) branch
- Log in to Vercel using your repository credentials
- Select Plan Hobby/Pro
- Create/Add new project
- Import your Git Repository
- If using sass, go to Build and Output Settings to make it create your CSS
  - Override Build Command with
    - `npm run sass:build`
  - Override Output Directory to `root` and not `public`
    - `/`
- Press deploy
- The app will then be available at [https://ebook-website.vercel.app](https://ebook-website.vercel.app) or your custom domain
- Changes pushed to the github will then be updated at the vercel app

### Formspree For Contact Forms

A form submission hosting service [https://formspree.io/](https://formspree.io/). All submissions will also be emailed to you.

- Has free plans up to 50 monthly submissions, and paid plans
- Create an account
- Create a form with an email to forward the submissions to
- Then you will get an enpoint url to add to your form:action
- Remember that each field needs an unique name attribute

## Website 2 - Corso Training Website

### Corso Training Project Intro

- Responsive, navigation bar, background image pattern with custom css for overlay and carousel, sliders, cards

### Corso Training Project Setup

#### Steps to start developing Corso website

- CD to folder : ```cd corso-website```
- Install dependencies ```npm i```
- Run the sass:watch script to constantly watch for changes and build new css: ```npm run sass:watch```

#### Corso website changes from bs5-simple-starter

- Used bs5-simple-starter
- Added images
- Added Montserrat font from google fonts in html
- Added font family variable in bootstrap.scss
- Changed sample text in html
- Override colors in bootstrap.scss
- Add spacing in bootstrap.scss
- Add some other variables in bootstrap.scss

### Nav & Header

### Image Carousel

### Register Area, Nav Scroll & Details

### Points & Summary Sections

### Invitations & Takeaways

### Subscribe & Footer

## Website 3 - Portfolio Website

### Portfolio Project Intro

- Responsive, full viewport, custom javascript, font awsome brand icons, progress bars, Third party script lightbox2 open with scroll, deployment

### Portfolio Project Setup

#### Steps to start developing Portfolio website

- CD to folder : ```cd portfolio-website```
- Install dependencies ```npm i```
- Run the sass:watch script to constantly watch for changes and build new css: ```npm run sass:watch```
- Start live server and open in browser

#### Portfolio website changes from bs5-simple-starter

- Used bs5-simple-starter
- Added lightbox js and css
- Added Poppins and Lora fonts from google fonts in html
- Added font family variable in bootstrap.scss
- Added images
- Changed sample text in html
- Override colors, buttons, navbar and spacing in bootstrap.scss
- Change the container breakpoints in bootstrap.scss
- The Lightbox2 script is included here, but it can also be installed with npm:  
  ```npm install lightbox2 --save```
- Link to Lightbox2 project site:  
  [https://lokeshdhakar.com/projects/lightbox2/](https://lokeshdhakar.com/projects/lightbox2/)

### Header With Overlay

- Includes z-index trick to overlay background image and not foreground text

### Typing effect JavaScript

### About & Skills Sections

### Projects & Lightbox

### StyleShout & Services

- Includes z-index trick to overlay background image and not foreground text

### Stats & Forms

### Deploy to Netlify

A frontend hosting service [https://www.netlify.com/](https://www.netlify.com/)  
Includes a very simple form service for forms submissions

- Integrated with Github/Gitlab/Bitbucket/Azure DevOps so that it will automatically publish changes when you push to main (or a dedicated) branch
- Log in to Netlify using your repository credentials
- Click Add new site and import your Git Repository
  - Select your branch: `main`
  - Set base directory: `/`
  - Set build command to build sass: `npm run sass:build`
- Press deploy site
- The app will then be available at [https://portfolio-website-[dockerid].netlify.app](https://portfolio-website-[dockerid].netlify.app) or your custom domain
- Changes pushed to the github will then be updated at the netlify app

- Enable form detection by pressing button in Forms section  
- Has free plans up to 100 monthly submissions, and paid plans

## Website 4 - Yavin Office Design

### Yavin Office Design Project Intro

- Responsive, navigation bar, positioned background images, custom javascript, inner page, cards, icon area, carousel slider

### Yavin Office Design Project Setup

#### Steps to start developing Yavin Office Design

- CD to folder : ```cd yavin-website```
- Install dependencies ```npm i```
- Run the sass:watch script to constantly watch for changes and build new css: ```npm run sass:watch```
- Start live server and open in browser

#### Yavin Office Design changes from bs5-simple-starter

- Used bs5-simple-starter
- Changed sample text in html
- Added Open-Sans fonts from google fonts in html
- Added images
- Added font family variable in bootstrap.scss
- Override colors, navbar, spacing, buttons and imputs in bootstrap.scss

### Navigation & Header

### Stats & JavaScript Increment

### Intro, Details & Services

### Middle Sections

### Projects & Testimonials

### Contact Form & Footer

### Back To Top Button

### Inner Article Page

## Website 5 - Vera Software Solutions

### Vera Software Solutions Project Intro

- Responsive, navigation bar, third party javascript, custom css for absolute background images, image cards with badges, video section with animated button, video modal, image card modals, subscribe form

### Vera Software Solutions Project Setup

#### Steps to start developing Vera Software Solutions

- CD to folder : ```cd vera-website```
- Install dependencies ```npm i```
- Run the sass:watch script to constantly watch for changes and build new css: ```npm run sass:watch```
- Start live server and open in browser

#### Vera Software Solutions changes from bs5-simple-starter

- Used bs5-simple-starter
- Changed sample text in html
- Added Poppins font from google fonts in html
- Added the replacement.min.js script
- Added images
- Added font family variable in bootstrap.scss
- Override colors, spacing, navbar, buttons and inputs in bootstrap.scss

### Header & Rotating Text Script

### Partners & Form

### Nav Scroll & Solutions

### Details & Expertise

### Video Section & Animated Button

### Video Modal

### Pricing & Project Sections
