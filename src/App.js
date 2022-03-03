import './App.css';
import Customer from './components/Customer.js'
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';

const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing(3),
    overflowX : "auto"
  },
  table : {
    minWidth : 1080
  }
})


const customers = [
  {
    'id' : 1,
    'image' : 'http://placeimg.com/64/64/tech/1', 
    'name' : 'wildbear1'  ,
    'birthday' : '1977/09/31'  ,
    'gender' : '41'  ,
    'job' : 'singer1'  ,
  },
  {
    'id' : 2,
    'image' : 'http://placeimg.com/64/64/tech/2', 
    'name' : 'wildbear2'  ,
    'birthday' : '1977/09/32'  ,
    'gender' : '42'  ,
    'job' : 'singer2'  ,
  },
  {
    'id' : 3,
    'image' : 'http://placeimg.com/64/64/tech/3', 
    'name' : 'wildbear3'  ,
    'birthday' : '1977/09/33'  ,
    'gender' : '43'  ,
    'job' : 'singer3'  ,
   },
   {
     'id' : 4,
     'image' : 'http://placeimg.com/64/64/tech/4', 
     'name' : 'wildbear4'  ,
     'birthday' : '1977/09/34'  ,
     'gender' : '44'  ,
     'job' : 'singer4'  ,
    }
]

class App extends Component{
    render(){

        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>No</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Birthday</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Job</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { customers.map( c => {
                    return (
                            <Customer 
                              key = {c.id} 
                              id = {c.id} 
                              image = {c.image} 
                              name = {c.name} 
                              birthday =  {c.birthday} 
                              gender =  {c.gender} 
                              job =  {c.job} 
                            />
                        )
                      })
                    }
                  </TableBody>
                </Table>
            </Paper>
        );
      }
    }
  

export default withStyles(styles)(App);
