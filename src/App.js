import React, { Component } from 'react';

import Board from './containers/board';
import Control from './containers/control';
import Setting from './containers/setting';
import Counter from './containers/counter';

class App extends Component {
  render() {
    return (
        <div className="text-center">
          <h3 className='title-wrapper'>Game of Life <small>(React with Redux)</small></h3>
          <a
				href="https://twitter.com/koojam_pk"
				className="twitter-follow-button"
				data-show-count="false">
				Follow @koojam_pk
			</a>
          <Control />
          <Counter />
          <Board />
          <Setting />
      </div>
    );
  }
}

export default App;
