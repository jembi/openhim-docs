const React = require('react');

const MediatorListContainer = () => (
  <div class="container">
    A list of Mediators...
  </div>
);

function MediatorLibrary(props) {
  return (
      <div class="homeContainer">
        <div class="hero shadow--lw">
          <div class="container">
            <h1 class="hero__title">OpenHIM Mediator Library</h1>
            <p class="hero__subtitle">This is like the app store for the OpenHIM. Here you will find a number of mediators that are designed to extend the OpenHIM's functionality for a specific purpose. Browse the mediators below to see if any suit your needs. If not, then it is easy to create your own.</p>
            <p class="hero__subtitle">To get your own mediator published here all you need to do is follow the github repository naming convention. Any public repository beginning with "openhim-mediator" will be displayed here.</p>
            <div>
              <a class="button button--secondary button--outline button--lg" href="/openhim-docs/docs/introduction/about">
                Create a new mediator »
              </a>
            </div>
          </div>
        </div>
        <MediatorListContainer />
      </div>
  );
}

module.exports = MediatorLibrary;
