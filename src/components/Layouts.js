/**
 * Created by zhangdongming on 2017/2/26.
 */
import React,{Component} from 'react';
import Nav from './Nav';
export default class Layouts extends Component{
    render(){
        return(<div>
            <Nav />
            {this.props.children}
        </div>)
    }

}
