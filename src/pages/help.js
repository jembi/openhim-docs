/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import { styles } from 'ansi-colors'
import classnames from 'classnames'
import GitHubButton from 'react-github-btn'

const videoData = [
  {
    title: 'OpenHIM Setup Tutorial (Development Environment)',
    src: 'https://www.youtube.com/embed/F0bTS3qJlG0',
    description: `The Open Health Information Mediator(OpenHIM) is a middleware
    component designed to allow data transfer between diverse information
    systems by routing, orchestrating and translating requests as they
    flow between systems.`
  },
  {
    title: 'OpenHIM Mediator Code Along Tutorial',
    src: 'https://www.youtube.com/embed/s-l60WMiZw8',
    description: `Create a Scaffold OpenHIM Mediator and Register it with your local
    OpenHIM instance.`
  }
]

function Tutorials() {
  return (
    <div>
      <h2 className="tutorial_title subtitle">Setup Tutorials</h2>
      <div className="help_section_container">
        {videoData.map(({ title, description, src }) => (
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

function BrowseDocs() {
  return (
    <div>
      <h2 className="tutorial_title subtitle">Browse the OpenHIM docs</h2>
      <div className="help_section_container">
        <div className="help_page_card card_box_shadow">
          <div className="help_card_content">
            <h3>For your convenience, all documentation is located here</h3>
            <p>
              For user and implementor guides please see the sections labelled{' '}
              <b>Docs</b>.
              <br />
              For developer guides please see the section labelled <b>API</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const bugsAndFeaturesContent = [
  {
    title: 'OpenHIM Core',
    description:
      'The OpenHIM core component is responsible for providing a single entry-point into a system. It is provides, transaction logging, client authentication, ATNA logging, and transaction rerun functionality. Therefore, bug reports and feature requests relating to core functionality can be made in this GitHub repo.',
    button: (
      <GitHubButton
        href="https://github.com/jembi/openhim-core-js/issues"
        data-color-scheme="no-preference: dark; light: light; dark: dark;"
        data-size="large"
        aria-label="Issue jembi/openhim-core-js on GitHub"
      >
        Issue
      </GitHubButton>
    )
  },
  {
    title: 'OpenHIM Console',
    description:
      'A webApp that provides a management console for the OpenHIM. Therefore, visual bug reports and feature requests for the OpenHIM can be made in this GitHub repo.',
    button: (
      <GitHubButton
        href="https://github.com/jembi/openhim-console/issues"
        data-color-scheme="no-preference: dark; light: light; dark: dark;"
        data-size="large"
        aria-label="Issue jembi/openhim-console on GitHub"
      >
        Issue
      </GitHubButton>
    )
  }
]

const starAndWatch = [
  {
    title: 'OpenHIM Core',
    description:
      'Star and watch our core repository to keep up with the latest features and security updates.',
    button: (
      <GitHubButton
        href="https://github.com/jembi/openhim-core-js/subscription"
        data-color-scheme="no-preference: dark; light: light; dark: dark;"
        data-size="large"
        data-show-count="true"
        aria-label="Star jembi/openhim-core-js on GitHub"
      >
        Watch
      </GitHubButton>
    )
  },
  {
    title: 'OpenHIM Console',
    description:
      'Star and watch our console repository to keep up with the latest releases.',
    button: (
      <GitHubButton
        href="https://github.com/jembi/openhim-console/subscription"
        data-color-scheme="no-preference: dark; light: light; dark: dark;"
        data-size="large"
        data-show-count="true"
        aria-label="Star jembi/openhim-console on GitHub"
      >
        Watch
      </GitHubButton>
    )
  }
]

function GithubSection({ heading, data }) {
  return (
    <div>
      <h2 className="tutorial_title subtitle">{heading}</h2>
      <div className="help_section_container">
        {data.map(({ title, description, button }) => (
          <div className="help_page_card card_box_shadow">
            <div className="help_card_content">
              <h3>{title}</h3>
              <p>{description}</p>
              {button}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const communityContent = [
  {
    title: 'OpenHIM Implementors',
    description:
      'Below is a link to join the OpenHIM implementers google group',
    link: (
      <Link href="mailto:openhim-implementers@googlegroups.com">
        openhim-implementers@googlegroups.com
      </Link>
    )
  },
  {
    title: 'OpenHIE Interoperability',
    description:
      'The OpenHIM is a reference technology within the systems architecture defined by the Open Health Information Exchange. Join the interoperability sub-community to help guide the future of the OpenHIM.',
    link: (
      <Link
        href="https://wiki.ohie.org/display/SUB/Interoperability+Layer+Community"
        className="button button--outline button--lg"
      >
        OHIE
      </Link>
    )
  }
]

function Community() {
  return (
    <div>
      <h2 className="tutorial_title subtitle">Join the Community</h2>
      <div className="help_section_container">
        {communityContent.map(({ title, description, link }) => (
          <div className="help_page_card card_box_shadow">
            <div className="help_card_content">
              <h3>{title}</h3>
              <p>{description}</p>
              {link}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Help() {
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
        <BrowseDocs />
        <GithubSection
          heading="Report a Bug or Request a Feature"
          data={bugsAndFeaturesContent}
        />
        <Community />
        <GithubSection heading="Stay up to date" data={starAndWatch} />
      </main>
    </Layout>
  )
}

export default Help
