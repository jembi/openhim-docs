import React, { Component } from 'react'
import axios from 'axios'
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

class ExternalContentSyntaxHighlighter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      spinner: true
    }
  }

  componentWillMount() {
    axios
      .get(this.props.url)
      .then(response => {
        if (response.data) {
          this.setState({
            data: response.data,
            spinner: false
          })
        } else{
          this.setState({
            data: null,
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
          <div id="loading" />
        </div>
      )
    } else {
      return (
        <Highlight {...defaultProps} theme={theme} code={this.state.data} language={`${this.props.language}`}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )
    }
  }
}

export default ExternalContentSyntaxHighlighter
