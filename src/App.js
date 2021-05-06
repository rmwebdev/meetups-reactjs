import { Route, Switch } from 'react-router-dom';
import Layout from './componnents/Layout';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';


function App() {
  return (
    <Layout>
      <Switch>
      <Route exact path="/"><AllMeetups /></Route>
      <Route path="/favorites"><Favorites /></Route>
      <Route path="/new-meetup"><NewMeetup /></Route>
      </Switch>     
    </Layout>
  );
}

export default App;
