const React = require('react')
const ReactDOM = require('react-dom')
const GraphiQL = require('graphiql')
const fetch = require('isomorphic-fetch')

require('graphiql/graphiql.css')
require('../css/app.css')

const App = class App extends React.Component {
  getFetcher (url) {
    return graphQLParams => {
      return fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(graphQLParams)
      }).then(response => response.json())
    }
  }

  onUrlChange (event) {
    this.setState({ url: event.target.value })
  }

  render () {
    const url = this.state.url
    return (
      <GraphiQL fetcher={this.getFetcher(url)}>
        <GraphiQL.Toolbar>
          <input id="url-input" onChange={this.onUrlChange.bind(this)} value={url} />
        </GraphiQL.Toolbar>
        <GraphiQL.Footer>
        </GraphiQL.Footer>
      </GraphiQL>
    )
  }

  renderToolbar () {

  }

  constructor (props) {
    super(props)

    this.state = {
      url: 'http://localhost:3000/graphql'
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app-root'))
