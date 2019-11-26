import React, { Component } from 'react'
import axios from 'axios'
import Layout from '@theme/Layout';
import { styles } from 'ansi-colors';
import Link from '@docusaurus/Link';
import classnames from 'classnames';


function MediatorDetails(props) {
  return (
    <div className="card card_box_shadow mediator_card_padding">
      <div className="card__header">
        <h2>
          <a href={'https://github.com/' + props.data.full_name}>
            {props.data.name}
          </a>
        </h2>
      </div>
      <div className="card__body">
        {props.data.description && (
          <p>{props.data.description}</p>
        )}
        <p>
          {props.data.stargazers_count} &#127775; - Written in{' '}
          <b>{props.data.language}</b>
          {' '}- Developed by{' '}
          <a href={props.data.owner.html_url}>
            <b>
              {props.data.owner.login}
            </b>
          </a>
        </p>
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
        'https://api.github.com/search/repositories?q=%22openhim-mediator%22&sort=stars&order=desc'
      )
      .then(response => {
        if (response.data.items && response.data.items.length > 0) {
          this.setState({
            data: response.data.items,
            spinner: false
          })
        }
      })
      .catch(function(err) {
        console.error(err.toString())
      })
  }

  render() {
    if (this.state.spinner) {
      return (
        <div className="spinnerContainer">
          <div id="loading"/>
        </div>
        )
    } else {
      var nodes = this.state.data.map(function(item) {
        return <MediatorDetails key={item.id} data={item} />
      })
      return <div>{nodes}</div>
    }
  }
}

function MediatorLibrary() {
  return (
    <Layout>
      <header className={classnames('hero center', styles.heroBanner)}>
        <div className="container">
          <img className="logo_header" src="img/openhim-logo-green.svg" alt="Project Logo" />
          <p className="hero__subtitle subtitle">Mediator Library</p>
          <p className="summary">
            This is like the app store for the OpenHIM. Here you will find a
            number of mediators that are designed to extend the OpenHIM's
            functionality for a specific purpose. Browse the mediators below to
            see if any suit your needs. If not, then it is easy to create your
            own.
          </p>
          <p className="summary">
            To get your own mediator published here all you need to do is follow
            the github repository naming convention. Any public repository
            beginning with "openhim-mediator" will be displayed here.
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames("button button--outline button--lg")}
              href="/openhim-docs/docs/introduction/about"
            >
              Create a new mediator »
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container center mediator_page_max_width">
          <MediatorListContainer />
        </div>
      </main>
    </Layout>
  )
}

export default MediatorLibrary