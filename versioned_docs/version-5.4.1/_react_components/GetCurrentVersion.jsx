import React, { Component } from 'react'

let _window;
if (typeof window !== "undefined") {
  _window = window
} else if (typeof global !== "undefined") {
  _window = global
} else if (typeof self !== "undefined"){
  _window = self
} else {
  _window = {
    location: {}
  }
}

class GetCurrentVersion extends Component {
  constructor(props) {
    super(props)

    const regex = /[\d].[\d].x/ // search for value between "/docs/" and the following "/" to get the version
    let extractedVersion = null
    if (_window && _window.location) {
      extractedVersion = _window.location.href.match(regex)
    }

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
