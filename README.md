# (WIP) httrack command generator

I wrote this late at night to make life a bit easier. It needs more work to make it suitable to other cases than mine.

Overall what this does is: generate a bunch of ready to be used httrack commands, according to the sites you placed on the "sites" object. By default it will only download files needed to render the page (html, js, fonts, maps) and traverse at max only to the subdomains of the site domain.

# Motivation

I'm trying to use httrack to download a bunch of doc files but httrack filters have annoying syntax and I'm lazy

## (WIP) Usage

the code is pretty self explanatory, but I'll revisit this later

overall, you place sites on the `sites` object and it will generate a big command for each site placed in there (on its own line), allowing the files set in the `defaultAllowed` array 

output looks something like this (without the extra blank line breaks):
```bash
httrack https://developer.mozilla.org/en-US/docs/Web/JavaScript -O ~/documentation-files/mozilla.org "+*.mozilla.org/**/*.html" "+*.mozilla.org/**/*.css" "+*.mozilla.org/**/*.js" "+*.mozilla.org/**/*.map.js" "+*.mozilla.org/**/*.map.css" "+*.mozilla.org/**/*.woff" "+*.mozilla.org/**/*.woff2"

httrack https://doc.rust-lang.org/book/ -O ~/documentation-files/rust-book "+*.rust-lang.org/**/*.html" "+*.rust-lang.org/**/*.css" "+*.rust-lang.org/**/*.js" "+*.rust-lang.org/**/*.map.js" "+*.rust-lang.org/**/*.map.css" "+*.rust-lang.org/**/*.woff" "+*.rust-lang.org/**/*.woff2"

httrack https://doc.rust-lang.org/stable/reference/ -O ~/documentation-files/rust-reference "+*.rust-lang.org/**/*.html" "+*.rust-lang.org/**/*.css" "+*.rust-lang.org/**/*.js" "+*.rust-lang.org/**/*.map.js" "+*.rust-lang.org/**/*.map.css" "+*.rust-lang.org/**/*.woff" "+*.rust-lang.org/**/*.woff2"

...
```

## How I use it

for now I'm using it with:
```bash
node index.js | xargs -P 10 -I _ sh -c _ & disown
```

this will start 10 parallel calls at a time, running the commands that were generated from the script, line by line

this could probably work better, but I'm tired and will revisit this later

## To-do:

- make it look to a external file so it can be generic
- add options for tweaking the settings
- make sure the correct filters are being used (it looks like they are, but triple check would be useful to not waste resources downloading rubbish)
- tidy everything up
