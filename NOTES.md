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
