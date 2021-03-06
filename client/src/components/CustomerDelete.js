import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CustomerDelete extends Component {

    constructor (props){
        super(props);
        this.state = {
            open : false
        }
    }

    handleClickOpen = () => {
        this.setState({
            open:true
        });
    }

    handleClose = () => {
        this.setState({
            open : false
        });
    }

    deletedCustomer(id){
        const url = '/api/customers/' + id;
        fetch(url,{
            method : 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>삭제</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>삭제경고</DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            정말 삭제 하시겠습니까?                            
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => this.deletedCustomer(this.props.id)}>Del</Button> 
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>Close</Button>                          
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default CustomerDelete;