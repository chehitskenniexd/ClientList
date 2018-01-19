'use strict'

// This will be the entry point for the application rendering

import React from 'react';
import ReactDOM from 'react-dom';
import ReduxStore from './Redux/ReduxStore';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import MainPageContainer from './Containers/MainPageContainer';

export const bHistory = browserHistory;

ReactDOM.render(
    <Provider store={ReduxStore}>
        <div className="container flexbox-container">
            <Router history={browserHistory}>
                <Route path="/" component={MainPageContainer}>
                    {/* <IndexRoute component={SearchContainer} />
                    <Route path=":channelName" 
                    component={ChannelContainer} 
                    /> */}
                </Route>
            </Router>
        </div>
    </Provider>,
    document.getElementById('app')
);
