import Header from "./Pages/Header/Header";
import PostContainer from "./Pages/Posts/PostContainer";
import TodoContainer from "./Pages/Todos/TodoContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/Todo" component={TodoContainer} />
      <Route path="/List" component={PostContainer} />
    </Router>
  );
};

export default App;
