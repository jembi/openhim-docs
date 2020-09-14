/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const versions = require('./versions.json');

module.exports = {
  title: 'OpenHIM',
  tagline: 'Simplifying Interoperability',
  url: 'https://jembi.github.io',
  baseUrl: '/',
  favicon: 'img/openhim_badge.png',
  organizationName: 'jembi', // Usually your GitHub org/user name.
  projectName: 'openhim-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    algolia: {
      apiKey: 'f2ab382210f2739e1e7d61a2367cd742',
      indexName: 'openhim',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    navbar: {
      // title: 'OpenHIM',
      logo: {
        alt: 'OpenHIM',
        src: 'img/openhim-logo-green.svg',
      },
      links: [
        {
          to: 'versions',
          label: `${versions[0]}`,
          position: 'left',
          style: {
            whiteSpace: 'nowrap',
            padding: '0.25rem 0.5rem 0.2rem 0.25rem',
            fontSize: 'calc(0.9 * var(--ifm-font-size-base))',
            textDecoration: 'underline',
          },
        },
        {to: 'docs/introduction/about', label: 'Docs', position: 'left'},
        {to: 'docs/api/introduction/welcome', label: 'API', position: 'left'},
        {to: 'mediator-library', label: 'Mediator Library', position: 'left'},
        {to: 'help', label: 'Help', position: 'left'},
        {
          href: 'https://github.com/jembi/openhim-core-js',
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
              to: 'docs/introduction/about',
            },
            {
              label: 'API',
              to: 'docs/api/introduction/welcome',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'OpenHIE',
              href: 'https://wiki.ohie.org/display/SUB/Interoperability+Layer+Community',
            },
            {
              label: 'YouTube Tutorials',
              href: 'https://www.youtube.com/channel/UCz3UpAGDJbKG7KkorgMGfEA',
            }
          ],
        },
        {
          title: 'Playgrounds',
          items: [
            {
              label: 'OpenHIM 6.0-latest Sandbox',
              href: 'https://sandbox.openhim.org',
            }
          ],
        },
      ],
      logo: {
        alt: 'Jembi health Systems Logo',
        src: 'img/jembi-logo.png',
        href: 'https://jembi.org',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Jembi Health Systems NPC`,
    },
    googleAnalytics: {
      trackingID: 'UA-60988221-1',
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl'),
    }
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
  plugins: ['docusaurus-image-loader', '@docusaurus/plugin-google-analytics']
};
