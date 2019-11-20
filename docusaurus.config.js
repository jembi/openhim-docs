/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'OpenHIM',
  tagline: 'Simplifying Interoperability',
  url: 'https://jembi.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'jembi', // Usually your GitHub org/user name.
  projectName: 'openhim-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: 'OpenHIM',
      logo: {
        alt: 'OpenHIM',
        src: 'img/openhim-logo-green.svg',
      },
      links: [
        {to: 'docs/introduction/about', label: 'Docs', position: 'left'},
        {to: 'docs/api/introduction/welcome', label: 'API', position: 'left'},
        {to: 'mediator-library', label: 'Mediator Library', position: 'left'},

        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
        href: 'https://opensource.facebook.com/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
