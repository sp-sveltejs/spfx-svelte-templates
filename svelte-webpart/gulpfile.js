'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);


const sourcemaps = require('gulp-sourcemaps');

build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
      generatedConfiguration.module.rules.push([
        {
          test: /\.(html|svelte)$/,
          exclude: /node_modules/,
          use: {
            loader: 'svelte-loader',
            options: {
              preprocess: require('svelte-preprocess')({
                /* options */
            })
            },
          },
        },
        
      ]);
  
      return generatedConfiguration;
    }
  });


build.initialize(gulp);


/*

        {
          test: /\.m?js$/, use:
          {
            loader: "babel-loader",
            options:
            {
              exclude:  /node_modules/ ,
              /* Include modules requiring additional polyfills
              include: [ 'node_modules/[module_name]/**',  'node_modules/[module_name]/**' ],
              
             presets: [["@babel/preset-env",
             {
                 targets: 'IE 11',
                 useBuiltIns: 'usage',
                 corejs: 3
             }]],
             plugins: [
                 '@babel/plugin-syntax-dynamic-import',
                     [
                         '@babel/plugin-transform-runtime',
                         {
                             corejs: 3,
                           
                             
                         }
                     ]
                 ]
         }
       }
     },
*/
