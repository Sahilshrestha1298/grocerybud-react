import Items from "./components/Items";
import { groceryItems } from "./data/groceryitems";
import "./App.css";

const App = () => {
  return (
    <section className="section-center">
      <Items items={groceryitems} />
    </section>
  );
};

export default App;
