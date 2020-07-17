# fernando-duarte.github.io

## To Run Locally

1. Clone or download repository to your local desired directory

2. Make sure to have the latest version of npm and Node.js, or yarn, installed

- npm installation: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- yarn installation: https://classic.yarnpkg.com/en/docs/install/#mac-stable

3. Make sure to have the latest version of Gatsby installed

Gatsby installation: https://www.gatsbyjs.org/docs/quick-start/#use-the-gatsby-cli

4. Open your CLI/Terminal and go to the directory in which your cloned/downloaded repo is contained:

- Run the command `cd DIRECTORY_PATH`, e.g. `cd Downloads/fernandoduarte.github.io-source`
- Run the command `npx gatsby develop` or `yarn gatsby develop`

5. Enter the port URL provided in your CLI/terminal into your preferred browser


## Making Edits
### To add a new paper

#### For Working Papers and Publications: go to index.js
#### For Social Media: go to socialMedia.js

Add a new paper underneath the `<ul>` tag (found near the top of the respective section) like so:
```
<Paper 
  href="external_link_to_paper"
  title="Paper Title"
  citations="coauthors and/or date of publication"></Paper>
```

For social media, also add `publisher=""`:
```
<Paper 
  href="external_link_to_paper"
  title="Paper Title"
  citations="coauthors and/or date of publication"
  publisher="publication"></Paper>
```

### To add an abstract

Add:
```
<Abstract>
  Insert text here
</Abstract>
```

### To add an additional external link:

```
<a href="external_link" target="_blank" rel="noopener noreferrer">Link text</a>
```

- Subsequent links should have a `<br></br>` tag before `<a></a>` link tag for layout consistency

### To add a link to a file: 

- Add the file to src/files

#### For pdfs:

- Import the file near the top of the code file underneath the label `// Asset declarations`:
```
import name_for_file from "../files/name_of_file.pdf";
```

- Add the code for the file:
```
<a href={name_for_file} target="_blank" rel="noopener noreferrer">Text</a>
```

#### For Excel sheets:

Add in code:

(Add `<br></br>` first to make a new line)
```
<a href="../files/name_of_file.xlsx" download="name_of_file.xlsx">Text</a>
```

## To Deploy
This is to update the live site with any new updates or changes.

1. Make sure all changes have been committed and pushed to the `source` branch.
2. Open your CLI/Terminal and go to the directory in which this repo is contained:

- Run the command `cd DIRECTORY_PATH`, e.g. `cd Downloads/fernandoduarte.github.io-master`
- Run the command `npm run deploy` or `yarn run deploy`
