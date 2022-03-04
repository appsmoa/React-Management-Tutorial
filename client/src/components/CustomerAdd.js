import React, { Component, useState } from 'react';
import {post} from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    hidden : {
        display:'none'
    }
})

class CustomerAdd extends Component {

    constructor (props){
        super(props);
        this.state = {
            file : null,
            userName : '',
            birthday : '',
            gender : '',
            job : '',
            fileName : '',
            userNameError : '',
            open : false
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
        if (!this.state.userName){
            this.setState({
                userNameError : 'err'
            })
          return;
        } else {
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
                fileName : '',
                userNameError : '',
                open : false
            })
        }

    }

    handleFileChange = (e) =>{
        this.setState({
            file : e.target.files[0],
            fileName : e.target.value
        })
    }

    handleValueChange = (e) => {
        if (e.target.name=='userName'){
            this.setState({
                userNameError : ''
            })
        }
        let nextState = {};
        nextState[e.target.name] = e.target.value
        this.setState(nextState)
    }

    handleClickOpen = () => {
        this.setState({
            open:true
        });
    }

    handleClose = () => {
        this.setState({
            file : null,
            userName : '',
            birthday : '',
            gender : '',
            job : '',
            fileName : '',
            userNameError : '',
            open : false
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    Customer Add
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Customer Add</DialogTitle>
                        <DialogContent>
                            <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                            <label htmlFor="raised-button-file">
                                <Button variant="contained" color="primary" component="span" name="file">
                                    {this.state.fileName === "" ? "프로필 이미지 선택" : this.state.fileName}
                                </Button>
                            </label>
                            <br/>
                            <TextField label="name" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                            {this.state.userNameError && <span style={{color : 'red',fontSize:'0.8em'}}> Name은 필수 항목입니다.<br/></span>}
                            <TextField label="birthday" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
                            <TextField label="gender" type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                            <TextField label="job" type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>Add</Button> 
                            <Button variant="outlined" color="primary" onClick={this.handleClose}>Close</Button>                          
                        </DialogActions>
                </Dialog>
            </div>
            // <form onSubmit={this.handleFormSubmit}>
            //     <h1>고객추가</h1>
            //     Image : <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br/>
            //     name : <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/>
            //     {this.state.userNameError && <span style={{color : 'red',fontSize:'0.8em'}}> Name은 필수 항목입니다.</span>}
            //     <br/>
            //     birthday : <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
            //     gender : <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
            //     job : <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/>
            //     <button type="submit">추가하기</button>
            // </form>
        );
    }
}

export default withStyles(styles)(CustomerAdd);