// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const licenseBadge = `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-yellow.svg)`;
  return licenseBadge;
}

// Function that returns the license link
function renderLicenseLink(license) {
  const licenseNotices = {
    'MIT': 'This application is covered under the [MIT License](https://opensource.org/licenses/MIT).',
    'Apache 2.0': 'This application is covered under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).',
    'GNU GPLv3': 'This application is covered under the [GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html).',
    'BSD 3-Clause': 'This application is covered under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).',
    'Creative Commons': 'This application is covered under the [Creative Commons License](https://creativecommons.org/licenses/).'
  };

  return licenseNotices[license] || '';
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if (license === 'No License') { return '' };
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  return `${licenseBadge}  \n  ${licenseLink}`;
}

// Function to generate markdown for README
function generateMarkdown(section) {
  const markdownLevels = {
    '1': '#',
    '2': '##',
    '3': '###'
  };

  return markdownLevels[section] || '';
}
module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
