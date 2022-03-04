import React, { Component } from 'react';
import {post} from 'axios';

class CustomerAdd extends Component {
    constructor (props){
        super(props);
        this.state = {
            file : null,
            userName : '',
            birthday : '',
            gender : '',
            job : '',
            fileName : ''
        }
    }

    addCustomer = () =>{
        const url = '/api/customers';
        const formData  = new FormData();
        formData.append('image',this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            headers:{
                'content-tyupe' : 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.addCustomer()
            .then((response) =>{
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file : null,
            userName : '',
            birthday : '',
            gender : '',
            job : '',
            fileName : ''
        })
    }

    handleFileChange = (e) =>{
        this.setState({
            file : e.target.files[0],
            fileName : e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value
        this.setState(nextState)
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객추가</h1>
                Image : <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br/>
                name : <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                birthday : <input type="text" name="birthday" value={this.state.usbirthdayerName} onChange={this.handleValueChange}/><br/>
                gender : <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                job : <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/>
                <button type="submit">추가하기</button>
            </form>
        );
    }
}

export default CustomerAdd;