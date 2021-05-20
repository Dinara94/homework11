import { Provider } from "react-redux";
import Todos from "./modules/components/todos/Todos";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import store from "./store/store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
        <Route path="/list" component={Todos} />
          <Route path="*">
          <Redirect to="/list" />
      </Route>
      </Switch>
    </Provider>
    </Router>
  );
}

export default App;
