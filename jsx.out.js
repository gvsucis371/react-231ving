
let states = ['Alabama', 'Alaska', 'Arizona', 'California', 'Colorado', 'Georgia', 'Florida', 'Michigan', 'Minnesota', '...', '(you get the point :)'];

const moreStates = React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    null,
    'Here are some more states:'
  ),
  React.createElement(
    'ul',
    null,
    states.map(state => React.createElement(
      'li',
      null,
      state
    ))
  )
);

// This is the new React18 way of rendering the content
const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(moreStates);

// This is the old way.
// ReactDOM.render(moreStates, document.getElementById('main'));

