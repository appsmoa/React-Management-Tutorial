import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';
/*
class Customer extends Component {
    render(){
        return (
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} alt="profile" height="64px"/> </TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.birthday}</TableCell>
                    <TableCell>{this.props.gender}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
                    <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id} /></TableCell>
                </TableRow>
        );
    }
}
*/
function Customer(props) {
    return (
            <TableRow>
                <TableCell>{props.id}</TableCell>
                <TableCell><img src={props.image} alt="profile" height="64px"/> </TableCell>
                <TableCell>{props.name}</TableCell>
                <TableCell>{props.birthday}</TableCell>
                <TableCell>{props.gender}</TableCell>
                <TableCell>{props.job}</TableCell>
                <TableCell><CustomerDelete stateRefresh={props.stateRefresh} id={props.id} /></TableCell>
            </TableRow>
    );
}

function CustomerProfile(props) {
    return (
        <div>
            <img src={props.image} alt="profile" />
            <h2>{props.name}({props.id})</h2>
        </div>
    );
}

function CustomerInfo(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
    );
}

export default Customer;