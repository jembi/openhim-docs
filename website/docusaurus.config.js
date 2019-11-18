/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://v2.docusaurus.io/docs/docusaurus.config.js/ for all the possible
// site configuration options.

const siteConfig = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ],
  themeConfig: {
    headerIcon: 'img/openhim-logo-green.svg',
    headerLinks: [
      {doc: 'introduction/welcome', label: 'Docs'},
      {doc: 'api/introduction/welcome', label: 'API'},
      {page: 'help', label: 'Help'},
      {blog: false}
    ],
    footer: {
      logo: {
        alt: 'OpenHIM Logo',
        src: 'img/favicon.ico',
        href: 'http://openhim.org/'
      },
      copyright: `Copyright © ${new Date().getFullYear()} Jembi Health Systems NPC`
    },
      // Details for the Search functionality
    algolia: {
      apiKey: 'my-api-key',
      indexName: 'my-index-name',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    image: 'img/undraw_online.svg',
    sideBarCollapsible: true
  },
  title: 'OpenHIM', // Title for your website.
  tagline: 'A website for testing',
  url: 'https://openhim.org', // Your website URL
  baseUrl: '/openhim-docs/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'openhim-docs',
  organizationName: 'jembi',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  /* path to images for header/footer */
  favicon: 'img/favicon.ico',

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
