/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Layout from '@theme/Layout'
import { styles } from 'ansi-colors'
import classnames from 'classnames'
import GitHubButton from 'react-github-btn'

function Help() {
  const supportLinks = [
    {
      title: 'Log Bugs and request features!',
      content: (
        <div>
          <p>
            We appreciate your feedback!
          </p>
          <div className="button_row">
            <div className="button_padding">
              <GitHubButton
                href="https://github.com/jembi/openhim-core-js/issues"
                data-color-scheme="no-preference: dark; light: light; dark: dark;"
                data-size="large"
                aria-label="Issue jembi/openhim-core-js on GitHub"
              >
                Log OpenHIM Core Issue
              </GitHubButton>
            </div>
            <div className="button_padding">
              <GitHubButton
                href="https://github.com/jembi/openhim-console/issues"
                data-color-scheme="no-preference: dark; light: light; dark: dark;"
                data-size="large"
                aria-label="Issue jembi/openhim-console on GitHub"
              >
                Log OpenHIM Console Issue
              </GitHubButton>
            </div>
          </div>
        </div>
      )
    },
    {
      content: (
        <div>
          <p>
            Check out our{' '}
            <a href="https://www.youtube.com/channel/UCz3UpAGDJbKG7KkorgMGfEA">
              OpenHIM YouTube channel
            </a>{' '}
            (and subscribe)
          </p>
        </div>
      ),
      title: 'Watch our OpenHIM tutorials'
    },
    {
      content: (
        <p>
          Learn more using the{' '}
          <a href={useBaseUrl('introduction/about')}>
            documentation on this site
          </a>
          .
        </p>
      ),
      title: 'Browse OpenHIM Docs'
    },
    {
      content: (
        <div>
          <p>Ask questions about the documentation and project.</p>
          <p>
            OpenHIM Implementers Mailing list:
            <br />
            <a href="mailto:openhim-implementers@googlegroups.com">Join</a>
            <br />
            <a href="mailto:openhim-implementers+subscribe@googlegroups.com">
              Subscribe
            </a>
          </p>
          <p>
            Join the Open Health Information Exchange (OpenHIE)
            <a href="https://wiki.ohie.org/display/SUB/Interoperability+Layer+Community">
              {' '}
              Interoperability Layer (IOL) community
            </a>
          </p>
        </div>
      ),
      title: 'Join the community'
    },
    {
      title: 'Stay up to date',
      content: (
        <div>
          <p>&#127775; and watch our Github repositories to keep up with the latest releases.</p>
          <div className="button_row">
            <div className="button_padding">
              <GitHubButton
                href="https://github.com/jembi/openhim-core-js/subscription"
                data-color-scheme="no-preference: dark; light: light; dark: dark;"
                data-size="large"
                data-show-count="true"
                aria-label="Star jembi/openhim-core-js on GitHub"
              >
                Watch OpenHIM Core
              </GitHubButton>
            </div>
            <div className="button_padding">
              <GitHubButton
                href="https://github.com/jembi/openhim-console/subscription"
                data-color-scheme="no-preference: dark; light: light; dark: dark;"
                data-size="large"
                data-show-count="true"
                aria-label="Star jembi/openhim-console on GitHub"
              >
                Watch openHIM Console
              </GitHubButton>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <Layout>
      <header
        className={classnames('hero hero--primary center', styles.heroBanner)}
      >
        <div className="container">
          <h1 className="hero__title">Need help?</h1>
          <p className="hero__subtitle">
            This project is maintained by a dedicated group of people.
          </p>
        </div>
      </header>
      <main>
        <div className="container padding-vert center">
          {supportLinks.map(({ title, content }) => (
            <div className="container">
              <h2 className="subtitle">{title}</h2>
              <div>{content}</div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Help
