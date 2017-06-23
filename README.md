# SVG-ICON-BUNDLER

This simple script that builds multiple `.svg` icons into a 1 single file.
 

## INSTALLATION

```
npm install
```

## Run

To bundle your icons put them **inside `./svg-input`** directory.

Then run:

```
npm start
```

#### Output

Output file is inside `./svg-output` directory.


## Customization

You can change the output file name, by renaming 
a variable `outputFileName` in a file `gulpfile.js`.
 
For example, lets change the output name to `my-custom-output-name.svg`:

```js
//gulpfile.js

/*-------------OUTPUT FILE NAME------------*/
const outputFileName = "my-custom-output-name.svg";
/*-----------------------------------------*/
```

