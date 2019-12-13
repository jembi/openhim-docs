import React, { Component } from 'react'

// import versions from '../../versions.json'

class GetCurrentVersion extends Component {
  constructor(props) {
    super(props)

    // console.log(versions)
    console.log(window.location.href)

    // const regex = /\/docs\/(.*?)\// // search for value between "/docs/" and the following "/" to get the version
    const regex = /[\d].[\d].x/ // search for value between "/docs/" and the following "/" to get the version
    let extractedVersion = window.location.href.match(regex)

    let actualVersion = 'master'
    if (extractedVersion) {
      console.log(extractedVersion)
      actualVersion = `v${extractedVersion[0].replace('x', '0')}`
    }

    this.state = {
      version: actualVersion
    }
  }

  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, { version: this.state.version })}
      </div>
    )
  }
}

export default GetCurrentVersion
