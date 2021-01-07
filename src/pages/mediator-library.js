import React, { Component } from 'react'
import axios from 'axios'
import Layout from '@theme/Layout'
import { styles } from 'ansi-colors'
import Link from '@docusaurus/Link'
import classnames from 'classnames'

function MediatorDetails(props) {
  return (
    <div className="card card_box_shadow margin-2em-y">
      <div className="card__header card_header_color">
        <h2 className="subtitle">
          {props.data.name}
        </h2>
      </div>
      <div className="card__body">
        {props.data.description && <p>{props.data.description}</p>}
        <p className="auxillary_info">
          {props.data.stargazers_count} &#127775; - Written in{' '}
          <b>{props.data.language}</b> - Developed by{' '}
          <a href={props.data.owner.html_url}>
            <b>{props.data.owner.login}</b>
          </a>
        </p>
        <Link
          className={classnames('button button--outline')}
          href={'https://github.com/' + props.data.full_name}
        >
          View mediator on Github
        </Link>
      </div>
    </div>
  )
}

function CreateYourOwn() {
  return (
    <div className="card card_box_shadow margin-2em-y">
      <div className="card__header card_header_color">
        <h2 className="subtitle">Don't See what you need?</h2>
      </div>
      <div className="card__body">
        <Link
          className={classnames('button button--outline')}
          href="/openhim-docs/docs/introduction/about"
        >
          Create Your Own &gt;&gt;
        </Link>
      </div>
    </div>
  )
}

class MediatorListContainer extends Component {
  constructor() {
    super()

    const state = {
      data: [],
      spinner: true
    }

    this.state = state
  }

  componentWillMount() {
    axios
      .get(
        'https://api.github.com/search/repositories?q=openhim-mediator%20in:name&sort=stars&order=desc'
      )
      .then(response => {
        if (response.data.items && response.data.items.length > 0) {
          this.setState({
            data: response.data.items,
            spinner: false
          })
        }
      })
      .catch((err) => {
        console.error(err.toString())
        this.setState({
          data: null,
          spinner: false
        })
      })
  }

  render() {
    if (this.state.spinner) {
      return (
        <div className="spinnerContainer">
          <div id="loading" />
        </div>
      )
    } else {
      var nodes = this.state.data.map(function(item) {
        return <MediatorDetails key={item.id} data={item} />
      })
      return (
        <div>
          {nodes}
          <CreateYourOwn />
        </div>
      )
    }
  }
}

function MediatorLibrary() {
  return (
    <Layout
      title="OpenHIM mediator library"
      description="OpenHIM mediator library"
      keywords={["OpenHIM", "Mediator Library"]}
    >
      <header className={classnames('hero center page', styles.heroBanner)}>
        <div className="container">
          <img
            className="logo_header"
            src="/img/openhim-logo-green.svg"
            alt="Project Logo"
          />
          <p className="hero__subtitle subtitle">Mediator Library</p>
          <p>
            This is the 'App Store' for purpose-specific mediators that extend
            the OpenHIM. Take a look and see if any match what you need. If not,
            then we'll show you how to create your own.
          </p>
          <p>
            Follow the naming convention and your public repo will be displayed
            here automatically. Just start your repo name with
            "openhim-mediator".
          </p>
          <div className={styles.buttons}>
            <Link href="/docs/introduction/about">
              Create a new mediator »
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container center page mediator_page_max_width">
          <MediatorListContainer />
        </div>
      </main>
    </Layout>
  )
}

export default MediatorLibrary
