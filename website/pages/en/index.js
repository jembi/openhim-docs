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
      <Block background="none" layout="twoColumn">
        {[
          {
            content: 
              '<p>The OpenHIM allows you to <b>secure and view requests to your web service APIs</b>. It acts as a reverse proxy to your upstream services and while doing so enables visibility into your service-oriented architecture (SOA) by logging each request and by providing metrics about requests hitting your services. It also provides a central entry point into your SOA and allows you to secure access through mutual TLS or basic-auth.</p>' +
              '<p>The OpenHIM is easy to install and can be easily configured to meet your needs through the administration console. You can also <b>extend the OpenHIM to transform or orchestrate requests through the mediator framework.</b></p>' + 
              '<p>Plus, the OpenHIM is <b>open-source</b>! It is published under the <a href="https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2)">MPL-2.0</a> and is currently developed and maintained by <a href="http://www.jembi.org/">Jembi Health Systems</a>. It was initially developed in collaboration with <a href="http://www.ukzn.ac.za/">UKZN</a>. Browse the OpenHIM features below or get started right away. <a href="http://openhim.readthedocs.org/en/latest/getting-started.html#getting-started"><i class="fa fa-arrow-circle-right"></i></a><p>',
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
            image: `${baseUrl}img/plug-solid.png`,
            imageAlign: 'left',
            title: 'Mediators',
          },
        ]}
      </Block>
    );

    const ReverseProxy = () => (
      <Block background="none">
        {[
          {
            content:
              '<p>You can easily configure the OpenHIM to proxy web services to multiple upstream hosts based on a URL pattern. It also supports multicasting requests to multiple different routes.</p>',
            image: `${baseUrl}img/OpenHIM-reverse-proxy.png`,
            imageAlign: 'right',
            title: 'Acts as a reverse proxy for web services',
          },
        ]}
      </Block>
    );

    const GainVisibility = () => (
      <Block background="light">
        {[
          {
            content:
              '<p>The administration console allows you to view requests as they travel through the system as well as view metrics such as transaction load and error rates.</p>',
            image: `${baseUrl}img/console.gif`,
            imageAlign: 'left',
            title: 'Gain visibility into your SOA',
          },
        ]}
      </Block>
    );

    const ExtendViaMediators = () => (
      <Block background="none">
        {[
          {
            content:
              '<p>The OpenHIM allows you to build your own micro-services called mediators that plug into the OpenHIM to extend its functionality. These mediators can be used to transform or orchestrate requests or more. They also report details of what processing has been done back to the OpenHIM using the mediator framework.</p>' +
              '<p><p class="lead justify">View our <a href="mediators.html">mediator library</a> to see mediator have already been built.</p></p>',
            image: `${baseUrl}img/mediators.png`,
            imageAlign: 'right',
            title: 'Extend the OpenHIM\'s request processing via mediators',
          },
        ]}
      </Block>
    );

    const SecureAccess = () => (
      <Block background="light">
        {[
          {
            content:
              '<p>The OpenHIM provides a secure interface to upstream hosts with certificate management and self signed certificate generation along with advanced access control mechanisms based on client and server certificates.</p>',
            image: `${baseUrl}img/certs.png`,
            imageAlign: 'left',
            title: 'Secure access to your web services',
          },
        ]}
      </Block>
    );

    const ATNARepo = () => (
      <Block background="none">
        {[
          {
            content:
              '<p>If you need it, full support for IHE’s ATNA profile is provided. Both node authentication and audit trails are supported. The OpenHIM also provides a full ATNA audit repository implementation and advanced audit viewer.</p>',
            image: `${baseUrl}img/audit.png`,
            imageAlign: 'right',
            title: 'ATNA: audit repository and node authentication',
          },
        ]}
      </Block>
    );

    const Alerting = () => (
      <Block background="light">
        {[
          {
            content:
              '<p>User alerts can be configured for when requests fail or a particular failure rate is exceeded. Users can be notified via email or sms.</p>',
            image: `${baseUrl}img/alerts.png`,
            imageAlign: 'left',
            title: 'Alerting, for when things go wrong',
          },
        ]}
      </Block>
    );

    const Scalable = () => (
      <Block background="none">
        {[
          {
            content:
              '<p>The OpenHIM is scalable to handle large transaction loads. It supports same server and multi-server clusters and uses MongoDB as a database which is also massively scalable.</p>',
            image: `${baseUrl}img/cluster.png`,
            imageAlign: 'right',
            title: 'Massively scalable',
          },
        ]}
      </Block>
    );

    const RerunTransactions = () => (
      <Block background="light">
        {[
          {
            content:
            '<p>If failures occur the OpenHIM can re-run requests to your services if your client systems are not able to. It allows you to review and bulk re-run requests or re-run individual requests.</p>',
            image: `${baseUrl}img/rerun.png`,
            imageAlign: 'left',
            title: 'Re-run failed transactions',
          },
        ]}
      </Block>
    );

    const MinimalOverhead = () => (
      <Block background="none">
        {[
          {
            content:
              '<p>The OpenHIM used the latest technologies such as Node.js and MongoDB to ensure that it doesn’t introduce any significant overhead to your requests.</p>',
            image: `${baseUrl}img/node-mongo.png`,
            imageAlign: 'right',
            title: 'Minimal transaction overhead',
          },
        ]}
      </Block>
    );

    const GetInvolved = () => (
      <Block background="light">
        {[
          {
            content:
              '<p>If you want to get involved in the development of the OpenHIM then find us on <a href="https://github.com/jembi/openhim-core-js">github</a>. There you may submit issues if have any features request or find any bugs. You may also submit pull requests for changes that you\'d like to see and the maintainers will review them.</p>' +
              '<p>The OpenHIM is used in the OpenHIE project as a reference implementation of an <b>interoperability layer</b>. Join the <a href="https://wiki.ohie.org/display/SUB/Interoperability+Layer+Community">interoperability community</a> or the <a href="https://ohie.org/#involved">OpenHIE initiative</a> to participate.</p>',
            imageAlign: 'left',
            title: 'Get involved',
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <About />
          <Mediators />
          <ReverseProxy />
          <GainVisibility />
          <ExtendViaMediators />
          <SecureAccess />
          <ATNARepo />
          <Alerting />
          <Scalable />
          <RerunTransactions />
          <MinimalOverhead />
          <GetInvolved />
          
        </div>
      </div>
    );
  }
}

module.exports = Index;
