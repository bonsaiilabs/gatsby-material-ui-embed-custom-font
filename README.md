### Gatsby + Material-UI + Custom Font
![Project Banner](https://imgur.com/download/dEvVWM5)

### What is the output of this project
![Project Output](https://imgur.com/download/dMVGtiW)


### How to run?
Get the code
```bash
git clone git@github.com:bonsaiilabs/gatsby-embed-custom-font.git
```

Install the dependencies
```sh
yarn
```

Develop locally
```sh
gatsby develop
```

Create Production Build
```sh
gatsby build
```

Deploy to [Surge](https://surge.sh)
```sh
surge public
```
**Note** You would need to create an account with `Surge`, but it is completely FREE to start with.

## What problem does this solve?
If you are planning to use `Gatsby` for your existing project, but have custom font files, you can use this repository to learn how to perform such migration.  
This problem is broken into 2 parts
In this project we have made use of [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) font from `Google Fonts` as custom font.

### Part 1
In the first part, we only show how to use the custom font files with Gatsby. You can do that by checking out the specific branch
```bash
git checkout -b embed_custom_font origin/embed_custom_font
``` 

### Part 2
This part builds on `Part1`, and demonstrates how you can use `Material-UI` with the custom font when using `Gatsby`. You can look at the specific branch by checking out the code.  
```bash
git checkout -b custom_font_material_ui origin/custom_font_material_ui
```
