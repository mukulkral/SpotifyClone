import "./App.css";
import Content from "./Components/Body/Content";
import Header from "./Components/Header";
import Context from "./Components/Store/Context";

function App() {
  return (
    <>
      <Context>
        <Header />
        <Content/>
      </Context>
    </>
  );
}
export default App;
