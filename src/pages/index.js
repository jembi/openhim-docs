/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'

const features = [
  {
    title: <>About</>,
    imageUrl: '/img/jembi-heal.png',
    imagePlacement: 'left',
    description: (
      <div>
        <p>
          The OpenHIM allows you to{' '}
          <b>secure and view requests to your web service APIs</b>. It acts as a
          reverse proxy to your upstream services and while doing so enables
          visibility into your service-oriented architecture (SOA) by logging
          each request and by providing metrics about requests hitting your
          services. It also provides a central entry point into your SOA and
          allows you to secure access through mutual TLS or basic-auth.
        </p>
        <p>
          The OpenHIM is easy to install and can be easily configured to meet
          your needs through the administration console. You can also{' '}
          <b>
            extend the OpenHIM to transform or orchestrate requests through the
            mediator framework.
          </b>
        </p>
        <p>
          Plus, the OpenHIM is <b>open-source</b>! It is published under the{' '}
          <a href='https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2)'>
            MPL-2.0
          </a>{' '}
          and is currently developed and maintained by{' '}
          <a href='http://www.jembi.org/'>Jembi Health Systems</a>. It was
          initially developed in collaboration with{' '}
          <a href='http://www.ukzn.ac.za/'>UKZN</a>. Browse the OpenHIM features
          below or{' '}
          <a href='docs/getting-started/prerequisites'>
          get started right away.
          </a>
        </p>
      </div>
    )
  },
  {
    title: <>Mediators</>,
    imageUrl: '/img/plug-solid.png',
    imagePlacement: 'right',
    description: (
      <div>
        <p>
          The OpenHIM enables you to extend its functionality so that
          implementation specific processing may occur. The OpenHIM has first
          class support for mediators through its mediator framework. This
          framework enables mediators to communicate with the OpenHIM-core to
          register themselves, log the processing that they do and even fetch
          user defined config.
        </p>
        <p>
          Check out the <a href='mediator-library'>mediator library</a> to view
          mediators that have already been built. To learn more about creating
          your own mediators, see our{' '}
          <a href='docs/introduction/welcome'>documentation</a>.
        </p>
      </div>
    )
  },
  {
    title: <>Acts as a reverse proxy for web services</>,
    imageUrl: '/img/OpenHIM-reverse-proxy.png',
    imagePlacement: 'left',
    description: (
      <div>
        <p>
          You can easily configure the OpenHIM to proxy web services to multiple
          upstream hosts based on a URL pattern. It also supports multicasting
          requests to multiple different routes.
        </p>
      </div>
    )
  },
  {
    title: <>Gain visibility into your SOA</>,
    imageUrl: '/img/console.gif',
    imagePlacement: 'right',
    description: (
      <div>
        <p>
          The administration console allows you to view requests as they travel
          through the system as well as view metrics such as transaction load
          and error rates.
        </p>
      </div>
    )
  },
  {
    title: <>Extend the OpenHIM's request processing via mediators</>,
    imageUrl: '/img/mediators.png',
    imagePlacement: 'left',
    description: (
      <div>
        <p>
          The OpenHIM allows you to build your own micro-services called
          mediators that plug into the OpenHIM to extend its functionality.
          These mediators can be used to transform or orchestrate requests or
          more. They also report details of what processing has been done back
          to the OpenHIM using the mediator framework.
        </p>
        <p className='lead justify'>
          View our <a href='mediator-library'>mediator library</a> to see
          mediator have already been built.
        </p>
      </div>
    )
  },
  {
    title: <>Secure access to your web services</>,
    imageUrl: '/img/certs.png',
    imagePlacement: 'right',
    description: (
      <div>
        <p>
          The OpenHIM provides a secure interface to upstream hosts with
          certificate management and self signed certificate generation along
          with advanced access control mechanisms based on client and server
          certificates.
        </p>
      </div>
    )
  },
  {
    title: <>ATNA: audit repository and node authentication</>,
    imageUrl: '/img/audit.png',
    imagePlacement: 'left',
    description: (
      <div>
        <p>
          If you need it, full support for IHE’s ATNA profile is provided. Both
          node authentication and audit trails are supported. The OpenHIM also
          provides a full ATNA audit repository implementation and advanced
          audit viewer.
        </p>
      </div>
    )
  },
  {
    title: <>Alerting, for when things go wrong</>,
    imageUrl: '/img/alerts.png',
    imagePlacement: 'right',
    description: (
      <div>
        <p>
          User alerts can be configured for when requests fail or a particular
          failure rate is exceeded. Users can be notified via email or sms.
        </p>
      </div>
    )
  },
  {
    title: <>Massively scalable</>,
    imageUrl: '/img/cluster.png',
    imagePlacement: 'left',
    description: (
      <div>
        <p>
          The OpenHIM is scalable to handle large transaction loads. It supports
          same server and multi-server clusters and uses MongoDB as a database
          which is also massively scalable.
        </p>
      </div>
    )
  },
  {
    title: <>Re-run failed transactions</>,
    imageUrl: '/img/rerun.png',
    imagePlacement: 'right',
    description: (
      <div>
        <p>
          If failures occur the OpenHIM can re-run requests to your services if
          your client systems are not able to. It allows you to review and bulk
          re-run requests or re-run individual requests.
        </p>
      </div>
    )
  },
  {
    title: <>Minimal transaction overhead</>,
    imageUrl: '/img/node-mongo.png',
    imagePlacement: 'left',
    description: (
      <div>
        <p>
          The OpenHIM used the latest technologies such as Node.js and MongoDB
          to ensure that it doesn’t introduce any significant overhead to your
          requests.
        </p>
      </div>
    )
  }
]

function Feature({ imageUrl, title, imagePlacement, description }) {
  const imgUrl = useBaseUrl(imageUrl)

  if (imagePlacement === 'left') {
    return (
      <div className='row padding-vert feature even_item'>
        <div className='col center'>
          <img className='padding-horizontal' src={imgUrl} alt={title} />
        </div>
        <div className='col col--offset-1'>
          <h2 className='subtitle'>{title}</h2>
          <div>{description}</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='row padding-vert feature even_item'>
        <div className='col'>
          <h2 className='subtitle'>{title}</h2>
          <div>{description}</div>
        </div>
        <div className='col col--offset-1 center'>
          <img className='padding-horizontal' src={imgUrl} alt={title} />
        </div>
      </div>
    )
  }
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={siteConfig.title}
      description='Console for administrating the OpenHIM Core'
      keywords={['OpenHIM', 'Console']}
    >
      <header className='hero center page'>
        <div className='container'>
          <img
            className='logo_header'
            src='/img/openhim-logo-green.svg'
            alt='Project Logo'
          />
          <p className='hero__subtitle subtitle'>{siteConfig.tagline}</p>
          <div className='container'>
            <p>
              The <strong>Open Health Information Mediator</strong> (OpenHIM) is
              a middleware component designed to ease interoperability between
              disparate information systems. It provides secure communications
              and data governance as well as support for routing, orchestrating
              and translating requests as they flow between systems.
            </p>
            <p>Connecting health systems simply, securely and safely.</p>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <div className='home page'>
            {features.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        )}
      </main>
    </Layout>
  )
}

export default Home
