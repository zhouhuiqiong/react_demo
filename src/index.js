/**
 * Created by zhangdongming on 2017/1/8.
 */
import React,{Component,Children} from 'react';
import ReactDOM,{render} from 'react-dom';
import {Router,Link,Route,IndexRoute,browserHistory} from 'react-router';

import Home from './components/Home';
import Computer from './components/Computer';
import Layouts from './components/Layouts';
import Phone from './components/Phone';

class App extends Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path='/' component={Layouts}>
                        <IndexRoute component={Home} />
                        <Route path='computer' component={Computer} />
                        <Route path='phone' component={Phone} />
                    </Route>
                </Router>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));
