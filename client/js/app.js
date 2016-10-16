const React = require('react')
const ReactDOM = require('react-dom')
const GraphiQL = require('graphiql')
const fetch = require('isomorphic-fetch')

require('graphiql/graphiql.css')
require('../css/app.css')

function graphQLFetcher (graphQLParams) {
  return fetch(window.location.origin + '/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json())
}

const App = class App extends React.Component {
  render () {
    return (
      <div>
        <div id="top-bar">
          graphiql.io -- GraphQL Sandbox
          <input placeholder="http://localhost:3000/graphql" />
        </div>
        <GraphiQL fetcher={graphQLFetcher} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.body)
