/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const About = () => (
      <Block background="light" layout="twoColumn">
        {[
          {
            content: 
              '<p>The OpenHIM allows you to <b>secure and view requests to your web service APIs</b>. It acts as a reverse proxy to your upstream services and while doing so enables visibility into your service-oriented architecture (SOA) by logging each request and by providing metrics about requests hitting your services. It also provides a central entry point into your SOA and allows you to secure access through mutual TLS or basic-auth.</p>' +
              '<p>The OpenHIM is easy to install and can be easily configured to meet your needs through the administration console. You can also <b>extend the OpenHIM to transform or orchestrate requests through the mediator framework.</b></p>' + 
              'Plus, the OpenHIM is <b>open-source</b>! It is published under the <a href="https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2)">MPL-2.0</a> and is currently developed and maintained by <a href="http://www.jembi.org/">Jembi Health Systems</a>. It was initially developed in collaboration with <a href="http://www.ukzn.ac.za/">UKZN</a>. Browse the OpenHIM features below or get started right away. <a href="http://openhim.readthedocs.org/en/latest/getting-started.html#getting-started"><i class="fa fa-arrow-circle-right"></i></a>',
            image: `${baseUrl}img/jembi.png`,
            imageAlign: 'right',
            title: 'About',
          }
        ]}
      </Block>
    );

    const Mediators = () => (
      <Block background="light">
        {[
          {
            content:
              '<p>The OpenHIM enables you to extend its functionality so that implementation specific processing may occur. The OpenHIM has first class support for mediators through its mediator framework. This framework enables mediators to communicate with the OpenHIM-core to register themselves, log the processing that they do and even fetch user defined config.</p>' +
              '<p>Check out the <a href="mediators.html">mediator library</a> to view mediators that have already been built. To learn more about creating your own mediators, see our <a href="http://openhim.readthedocs.org/en/latest/dev-guide/mediators.html">documentation</a>.</p>',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'left',
            title: 'Mediators',
          },
        ]}
      </Block>
    );

    // const Features = () => (
    //   <Block layout="fourColumn">
    //     {[
    //       {
    //         content: 'This is the content of my feature',
    //         image: `${baseUrl}img/undraw_react.svg`,
    //         imageAlign: 'top',
    //         title: 'Feature One',
    //       },
    //       {
    //         content: 'The content of my second feature',
    //         image: `${baseUrl}img/undraw_operating_system.svg`,
    //         imageAlign: 'top',
    //         title: 'Feature Two',
    //       },
    //     ]}
    //   </Block>
    // );

    // const Showcase = () => {
    //   if ((siteConfig.users || []).length === 0) {
    //     return null;
    //   }

    //   const showcase = siteConfig.users
    //     .filter(user => user.pinned)
    //     .map(user => (
    //       <a href={user.infoLink} key={user.infoLink}>
    //         <img src={user.image} alt={user.caption} title={user.caption} />
    //       </a>
    //     ));

    //   const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

    //   return (
    //     <div className="productShowcaseSection paddingBottom">
    //       <h2>Who is Using This?</h2>
    //       <p>This project is used by all these people</p>
    //       <div className="logos">{showcase}</div>
    //       <div className="more-users">
    //         <a className="button" href={pageUrl('users.html')}>
    //           More {siteConfig.title} Users
    //         </a>
    //       </div>
    //     </div>
    //   );
    // };

    return (
      <div>
        {/* <HomeSplash siteConfig={siteConfig} language={language} /> */}
        <div className="mainContainer">
          {/* <Features />
          <FeatureCallout /> */}
          <About />
          <Mediators />
          {/* <TryOut />
          <Description />
          <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
