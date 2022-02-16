# (WIP) httrack command generator

I wrote this late at night to make life a bit easier. It needs more work to make it suitable to other cases than mine.

Overall what this does is: generate a bunch of ready to be used httrack commands, according to the sites you placed on the "sites" object. By default it will only download files needed to render the page (html, js, fonts, maps) and look traverse at max only to the subdomains of the site domain.

# Motivation

httrack filters have annoying syntax and I'm lazy

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
- tidy everything up
