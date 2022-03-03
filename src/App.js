import './App.css';
import Customer from './components/Customer.js'

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
function App() {
  return (
    <div>
      {
        customers.map( c => {
          return (
            <Customer key = {c.id} id = {c.id} image = {c.image} name = {c.name} birthday =  {c.birthday} gender =  {c.gender} job =  {c.job} />
          )
        })
      }
      
    </div>
  );
}

export default App;
