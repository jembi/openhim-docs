import React, { Component } from 'react'

class GetCurrentVersion extends Component {
  constructor(props) {
    super(props)

    const regex = /[\d].[\d].x/ // search for value between "/docs/" and the following "/" to get the version
    let extractedVersion = window.location.href.match(regex)

    let actualVersion = 'master'
    if (extractedVersion) {
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
