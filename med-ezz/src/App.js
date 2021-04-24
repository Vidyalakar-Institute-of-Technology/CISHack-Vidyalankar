import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Login from "./components/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Login />
    </BrowserRouter>
  );
}

export default App;
