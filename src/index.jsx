import ReactDOM from "react-dom";
import AddSoftware from "./pages/add-software";

function Index(){
  return(
    <>
      <AddSoftware />
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));

