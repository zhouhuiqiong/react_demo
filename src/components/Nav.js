/**
 * Created by zhangdongming on 2017/2/25.
 */
import React,{Component} from 'react';
import {Link} from 'react-router';

export default class Nav extends Component{
    render(){
        return(<div>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/computer">computer</Link></li>
                <li><Link to="/phone">phone</Link></li>
            </ul>
        </div>)
    }

}
