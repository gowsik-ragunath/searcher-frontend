import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/layout/Navbar';
import FoodShow from './components/food/Show';
import Recipe from './components/recipe/Recipe';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Recipe} />
          <Route exact path="/foods/:id" component={FoodShow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
