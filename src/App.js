import './App.css';
import User from './components/User';
import {useSelector} from 'react-redux'

const App=()=> {

  const person = useSelector(state => state.user.users)
  
  return (
    <div className="App">

      {person && <div>
        <img src={person.picture.large} alt={person.name.first}/>
        <h1>{person.name.first} {person.name.last}</h1>
        <h2>Age:{person.dob.age}</h2>
        <h3>{person.email}</h3>

      </div>}
      <User/>
    </div>
  );
}

export default App;
