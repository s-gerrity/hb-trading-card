"use strict";

function Homepage() {
  return (
    <div>
      <h2>Welcome to the site!</h2>
      <a href="/cards">Check out the cards</a>
      <br></br>
      <img src="/static/img/balloonicorn.jpg" />
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
