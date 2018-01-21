import React, {Component} from 'react';
import './Header.css'
import '../../../ERlogo.png'

export default class Header extends Component {

    render () {
        return (
            <div className="Header">
                
                    <div className="logo">
                        <a href="http://joblark.employeereferrals.com">EmployeeReferrals.com</a>
                    </div>
                    <div className="random">
                        <a>RANDOM CANDIDATE GENERTOR</a>
                    </div>  
            </div>
        )
    }
}