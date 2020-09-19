'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
     
        generatedConfiguration.module.rules.push(
            {
              test: /\.(html|svelte)$/,
              exclude: /node_modules/,
              use: {
                loader: 'svelte-loader',
                options: {
                  preprocess: require('svelte-preprocess')({
    
                }),
                },
              },
            },
            
            
          );
        
       
      return generatedConfiguration;
    }
  });


build.initialize(gulp);
