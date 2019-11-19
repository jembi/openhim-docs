import React, { Component } from 'react'
import axios from 'axios'

function MediatorDetails(props) {
  return (
    <div class="card">
      <div class="card__header">
        <h2><a href={"https://github.com/" + props.data.full_name}>{props.data.name}</a></h2>
      </div>
      <div class="card__body">
        <p className="lead">{props.data.description}</p>
        <p className="lead">{props.data.stargazers_count} &#127775; - Written in <b>{props.data.language}</b></p>
        <a class="button button--secondary" href={"https://github.com/" + props.data.full_name + "/releases"}>Download</a>
      </div>
      <hr/>
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
    axios.get("https://api.github.com/search/repositories?q=%22openhim-mediator%22&sort=stars&order=desc")
    .then(
      (response) => {
        if (response.data.items && response.data.items.length > 0) {
          this.setState({
            data: response.data.items,
            spinner: false
          })
        }
      }
    )
    .catch(
      function(err) {
        console.error(err.toString());
      }
    )
  }

  render() {
    if (this.state.spinner) {
      return (
        <div id="loading"></div>
      );
    } else {
      var nodes = this.state.data.map(function (item) {
        return <MediatorDetails key={item.id} data={item} />
      });
      return (
        <div>
          {nodes}
        </div>
      );
    }
  }
}

function MediatorLibrary() {
  return (
      <div className="homeContainer">
        <div className="container">
          <div>
            <h1 className="hero__title">OpenHIM Mediator Library</h1>
            <p className="hero__subtitle">This is like the app store for the OpenHIM. Here you will find a number of mediators that are designed to extend the OpenHIM's functionality for a specific purpose. Browse the mediators below to see if any suit your needs. If not, then it is easy to create your own.</p>
            <p className="hero__subtitle">To get your own mediator published here all you need to do is follow the github repository naming convention. Any public repository beginning with "openhim-mediator" will be displayed here.</p>
            <div>
              <a className="button button--secondary button--outline button--lg" href="/openhim-docs/docs/introduction/about">
                Create a new mediator »
              </a>
            </div>
          </div>
          <hr/>
          <MediatorListContainer/>
        </div>
      </div>
  );
}

export default MediatorLibrary;
