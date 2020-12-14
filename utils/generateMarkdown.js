// function to generate markdown for README
function generateMarkdown(title, description, tableOfContents, installation, usage, lisense, contributing, tests, name, email) {
  return `# ${title}

  ## Table of Contents
  [Installation](#description)
  
  ## Description
  ${description}

  ## Installation
  
  
  ## Usage
  
  
  ## License
  
  
  ## Contributing
  
  
  ## Tests
  
  
  ## Questions
`;
}

module.exports = {generateMarkdown};
