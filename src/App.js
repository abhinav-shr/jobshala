import './App.css';
import Banner from './MyComponents/Banner';
import PostaJob from './MyComponents/PostaJob';
import Jobs from './MyComponents/Jobs';
import firebase from './Firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './MyComponents/Header';


function App() {

  const db = firebase.firestore();
  db.settings({
      timestampsInSnapshots: true
    });

 
  

  return (
    <div>
      <Router>
        <Header />

        {/* <Banner /> */}
        <Switch>
          <Route exact path='/forRecruiter'>
            <PostaJob db={db} />
          </Route>
          <Route exact path='/'>
            <Jobs db={db} />
          </Route>
        </Switch>
        
      
      </Router>
    </div>
    
  );
}

export default App;
