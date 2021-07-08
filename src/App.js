import './App.css';
import Banner from './MyComponents/Banner';
import PostaJob from './MyComponents/PostaJob';
import Jobs from './MyComponents/Jobs';
import firebase from './Firebase';


function App() {

  const db = firebase.firestore();
  db.settings({
      timestampsInSnapshots: true
    });

 
  

  return (
    <div className="App">
      <Banner />
      <PostaJob db={db} />
      <Jobs db={db} />
    </div>
  );
}

export default App;
