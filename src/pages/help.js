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

const videoData = [{
  title: 'OpenHIM Setup Tutorial (Development Environment)',
  src: 'https://www.youtube.com/embed/F0bTS3qJlG0',
  description:
    `The Open Health Information Mediator(OpenHIM) is a middleware
    component designed to allow data transfer between diverse information
    systems by routing, orchestrating and translating requests as they
    flow between systems.`
  ,
}, {
  title: 'OpenHIM Mediator Code Along Tutorial',
  src: 'https://www.youtube.com/embed/s-l60WMiZw8',
  description:
    `Create a Scaffold OpenHIM Mediator and Register it with your local
    OpenHIM instance.`
  ,
}]

function Tutorials() {
  return (
    <div>
      <h2 className="tutorial_title subtitle">Setup Tutorials</h2>
      <div className="mediator_box_container">
        {videoData.map(({title, description, src}) => (
          <div className="help_page_card card_box_shadow">

            <div className="video_wrapper">
              <iframe
                src={src}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                className="video_frame"
              />
            </div>

            <div className="help_card_content">
              <h3>{title}</h3>
               <p>{description}</p>
            </div>
          </div>
        ))}
    </div>
  </div>
  )
}

function Help() {
  const supportLinks = [
    {
      title: 'Log Bugs and request features!',
      content: (
        <div>
          <p>We appreciate your feedback!</p>
        </div>
      ),
      links: (
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
      )
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
          <p>
            &#127775; and watch our Github repositories to keep up with the latest releases.
          </p>
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
                Watch OpenHIM Console
              </GitHubButton>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <Layout>
      <header className={classnames('hero center', styles.heroBanner)}>
        <div className="container">
          <img
            className="logo_header"
            src="img/openhim-logo-green.svg"
            alt="Project Logo"
          />
          <p className="hero__subtitle subtitle">What do you need?</p>
        </div>
      </header>
      <main>
        <Tutorials />
        <div className="container padding center">
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
