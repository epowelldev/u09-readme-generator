// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  [Description](#Description)  
  [Installation](#Installation)  
  [Usage](#Usage)  
  [License](#License)  
  [Contributing](#Contributing)  
  [Tests](#Tests)  
  [Questions](#Questions)  
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
    
  ## Usage
  ${data.usage}
    
  ## License
  ${data.license}
    
  ## Contributing
  ${data.contributing}
    
  ## Tests
  ${data.tests}
    
  ## Questions
  Direct your additional questions about this project to:
  [GitHub](https://github.com/${data.github}/) or send me an [email](mailto:${data.email})
`}

module.exports = generateMarkdown;
