/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

// function HomeSplash() {
//   const { siteConfig, language = '' } = useDocusaurusContext()
//   const { baseUrl, docsUrl } = siteConfig
//   const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
//   const langPart = `${language ? `${language}/` : ''}`
//   const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

//   const SplashContainer = props => (
//     <div className="homeContainer">
//       <a href="https://github.com/jembi/openhim-core-js">
//         <img
//           className="fork-link"
//           src="https://camo.githubusercontent.com/121cd7cbdc3e4855075ea8b558508b91ac463ac2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f677265656e5f3030373230302e706e67"
//           alt="Fork me on GitHub"
//           data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_green_007200.png"
//         />
//       </a>
//       <div className="homeSplashFade">
//         <div className="wrapper homeWrapper">{props.children}</div>
//       </div>
//     </div>
//   )

//   const ProjectTitle = () => (
//     <div className="projectTitle">
//       <h3>{siteConfig.tagline}</h3>
//       <hr className="intro-divider"></hr>
//     </div>
//   )

//   const PromoSection = props => (
//     <div className="section promoSection">
//       <div className="promoRow">
//         <div className="pluginRowBlock">{props.children}</div>
//       </div>
//     </div>
//   )

//   const Button = props => (
//     <div className="pluginWrapper buttonWrapper">
//       <a className="button" href={props.href} target={props.target}>
//         {props.children}
//       </a>
//     </div>
//   )

//   return (
//     <SplashContainer>
//       <img src={`${baseUrl}img/openhim-logo-green.svg`} alt="Project Logo" />
//       <div className="inner">
//         <ProjectTitle siteConfig={siteConfig} />
//         <PromoSection>
//           <Button href={docUrl('TODO')}>Get Started</Button>
//           <Button href={docUrl('introduction/welcome')}>Documentation</Button>
//           <Button href={docUrl('../mediator-library')}>Mediator Library</Button>
//           <Button href={'https://github.com/jembi/openhim-core-js'}>
//             Github
//           </Button>
//           <Button href={docUrl('introduction/roadmap')}>Roadmap</Button>
//         </PromoSection>
//         <div className="lead">
//           <p>
//             The <strong>Open Health Information Mediator</strong> (OpenHIM) is a
//             middleware component designed to ease interoperability between
//             disparate information systems. It provides secure communications and
//             data governance as well as support for routing, orchestrating and
//             translating requests as they flow between systems.
//           </p>
//           <p>Connecting health systems simply, securely and safely.</p>
//         </div>
//       </div>
//     </SplashContainer>
//   )
// }

const sections = [
  {
    content: (
      <div>
        <p>The OpenHIM allows you to <b>secure and view requests to your web service APIs</b>. It acts as a reverse proxy to your upstream services and while doing so enables visibility into your service-oriented architecture (SOA) by logging each request and by providing metrics about requests hitting your services. It also provides a central entry point into your SOA and allows you to secure access through mutual TLS or basic-auth.</p>
        <p>The OpenHIM is easy to install and can be easily configured to meet your needs through the administration console. You can also <b>extend the OpenHIM to transform or orchestrate requests through the mediator framework.</b></p>
        <p>Plus, the OpenHIM is <b>open-source</b>! It is published under the <a href="https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2)">MPL-2.0</a> and is currently developed and maintained by <a href="http://www.jembi.org/">Jembi Health Systems</a>. It was initially developed in collaboration with <a href="http://www.ukzn.ac.za/">UKZN</a>. Browse the OpenHIM features below or get started right away. <a href="http://openhim.readthedocs.org/en/latest/getting-started.html#getting-started"><i class="fa fa-arrow-circle-right"></i></a></p>
      </div>
    ),
    image: `img/jembi-heal.png`,
    imageAlign: 'right',
    title: 'About',
    background: "none",
    layout: "twoColumn"
  }
]

function Index() {
  // const { config: siteConfig, language = '' } = this.props

  // const Mediators = () => (
  //   <Block background="light">
  //     {[
  //       {
  //         content:
  //           '<p>The OpenHIM enables you to extend its functionality so that implementation specific processing may occur. The OpenHIM has first class support for mediators through its mediator framework. This framework enables mediators to communicate with the OpenHIM-core to register themselves, log the processing that they do and even fetch user defined config.</p>' +
  //           '<p>Check out the <a href="mediator-library">mediator library</a> to view mediators that have already been built. To learn more about creating your own mediators, see our <a href="docs/introduction/welcome">documentation</a>.</p>',
  //         image: `${baseUrl}img/plug-solid.png`,
  //         imageAlign: 'left',
  //         title: 'Mediators'
  //       }
  //     ]}
  //   </Block>
  // )

  // const ReverseProxy = () => (
  //   <Block background="none">
  //     {[
  //       {
  //         content:
  //           '<p>You can easily configure the OpenHIM to proxy web services to multiple upstream hosts based on a URL pattern. It also supports multicasting requests to multiple different routes.</p>',
  //         image: `${baseUrl}img/OpenHIM-reverse-proxy.png`,
  //         imageAlign: 'right',
  //         title: 'Acts as a reverse proxy for web services'
  //       }
  //     ]}
  //   </Block>
  // )

  // const GainVisibility = () => (
  //   <Block background="light">
  //     {[
  //       {
  //         content:
  //           '<p>The administration console allows you to view requests as they travel through the system as well as view metrics such as transaction load and error rates.</p>',
  //         image: `${baseUrl}img/console.gif`,
  //         imageAlign: 'left',
  //         title: 'Gain visibility into your SOA'
  //       }
  //     ]}
  //   </Block>
  // )

  // const ExtendViaMediators = () => (
  //   <Block background="none">
  //     {[
  //       {
  //         content:
  //           '<p>The OpenHIM allows you to build your own micro-services called mediators that plug into the OpenHIM to extend its functionality. These mediators can be used to transform or orchestrate requests or more. They also report details of what processing has been done back to the OpenHIM using the mediator framework.</p>' +
  //           '<p><p class="lead justify">View our <a href="mediator-library">mediator library</a> to see mediator have already been built.</p></p>',
  //         image: `${baseUrl}img/mediators.png`,
  //         imageAlign: 'right',
  //         title: "Extend the OpenHIM's request processing via mediators"
  //       }
  //     ]}
  //   </Block>
  // )

  // const SecureAccess = () => (
  //   <Block background="light">
  //     {[
  //       {
  //         content:
  //           '<p>The OpenHIM provides a secure interface to upstream hosts with certificate management and self signed certificate generation along with advanced access control mechanisms based on client and server certificates.</p>',
  //         image: `${baseUrl}img/certs.png`,
  //         imageAlign: 'left',
  //         title: 'Secure access to your web services'
  //       }
  //     ]}
  //   </Block>
  // )

  // const ATNARepo = () => (
  //   <Block background="none">
  //     {[
  //       {
  //         content:
  //           '<p>If you need it, full support for IHE’s ATNA profile is provided. Both node authentication and audit trails are supported. The OpenHIM also provides a full ATNA audit repository implementation and advanced audit viewer.</p>',
  //         image: `${baseUrl}img/audit.png`,
  //         imageAlign: 'right',
  //         title: 'ATNA: audit repository and node authentication'
  //       }
  //     ]}
  //   </Block>
  // )

  // const Alerting = () => (
  //   <Block background="light">
  //     {[
  //       {
  //         content:
  //           '<p>User alerts can be configured for when requests fail or a particular failure rate is exceeded. Users can be notified via email or sms.</p>',
  //         image: `${baseUrl}img/alerts.png`,
  //         imageAlign: 'left',
  //         title: 'Alerting, for when things go wrong'
  //       }
  //     ]}
  //   </Block>
  // )

  // const Scalable = () => (
  //   <Block background="none">
  //     {[
  //       {
  //         content:
  //           '<p>The OpenHIM is scalable to handle large transaction loads. It supports same server and multi-server clusters and uses MongoDB as a database which is also massively scalable.</p>',
  //         image: `${baseUrl}img/cluster.png`,
  //         imageAlign: 'right',
  //         title: 'Massively scalable'
  //       }
  //     ]}
  //   </Block>
  // )

  // const RerunTransactions = () => (
  //   <Block background="light">
  //     {[
  //       {
  //         content:
  //           '<p>If failures occur the OpenHIM can re-run requests to your services if your client systems are not able to. It allows you to review and bulk re-run requests or re-run individual requests.</p>',
  //         image: `${baseUrl}img/rerun.png`,
  //         imageAlign: 'left',
  //         title: 'Re-run failed transactions'
  //       }
  //     ]}
  //   </Block>
  // )

  // const MinimalOverhead = () => (
  //   <Block background="none">
  //     {[
  //       {
  //         content:
  //           '<p>The OpenHIM used the latest technologies such as Node.js and MongoDB to ensure that it doesn’t introduce any significant overhead to your requests.</p>',
  //         image: `${baseUrl}img/node-mongo.png`,
  //         imageAlign: 'right',
  //         title: 'Minimal transaction overhead'
  //       }
  //     ]}
  //   </Block>
  // )

  // const GetInvolved = () => (
  //   <div className="getInvolvedContainer">
  //     <Block>
  //       {[
  //         {
  //           content:
  //             '<p>If you want to get involved in the development of the OpenHIM then find us on <a href="https://github.com/jembi/openhim-core-js">github</a>. There you may submit issues if have any features request or find any bugs. You may also submit pull requests for changes that you\'d like to see and the maintainers will review them.</p>' +
  //             '<p>The OpenHIM is used in the OpenHIE project as a reference implementation of an <b>interoperability layer</b>. Join the <a href="https://wiki.ohie.org/display/SUB/Interoperability+Layer+Community">interoperability community</a> or the <a href="https://ohie.org/#involved">OpenHIE initiative</a> to participate.</p>',
  //           imageAlign: 'left',
  //           title: 'Get involved'
  //         }
  //       ]}
  //     </Block>
  //   </div>
  // )
  const { siteConfig } = useDocusaurusContext()
  console.log('Context: ', siteConfig)
  const { baseUrl } = siteConfig
  console.log('BaseUrl: ', baseUrl)

  return (
    <div>
      {/* <HomeSplash siteConfig={siteConfig} language={language} /> */}
      <div className="mainContainer landing">
        <h1>OpenHIM</h1>
        {
          sections.map(section => (
            <div
              padding={['bottom', 'top']}
              id={section.id}
              background={section.background}
            >
              <div align="center" layout={section.layout}>
                {section.content}
              </div>
            </div>
          ))
        }
        {/* <Mediators />
        <ReverseProxy />
        <GainVisibility />
        <ExtendViaMediators />
        <SecureAccess />
        <ATNARepo />
        <Alerting />
        <Scalable />
        <RerunTransactions />
        <MinimalOverhead />
        <GetInvolved /> */}
      </div>
    </div>
  )
}

export default Index
