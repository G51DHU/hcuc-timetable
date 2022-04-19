import ReactDOM from "react-dom";
import AddSoftware from "./pages/add-software";

function Index(){
  return(
    <>
      <h1>Welcome to React Vite Micro App!</h1>
      <p>Hard to get more minimal than this React app.</p>
      <AddSoftware />
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));

