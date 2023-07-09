import ReactDOM from "react-dom";
import Header from "./Header";
import Meme from "./Meme";

export default function App() {
  return (
    <>
      <Header />
      <Meme />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
