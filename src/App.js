import "./App.css";
import Register from "./pages/Register/Register";
import IndentityVerification from "./pages/identityVerification/IndentityVerification";
import YourDetails from "./pages/yourDetails/YourDetails";
import CreateWallet from "./pages/createWallet/CreateWallet";
import EWalletSuccess from "./pages/eWalletSuccess/EWalletSuccess";
import EwalletRegisteration from "./pages/eWalletRegisteration/EwalletRegisteration";
import Dashboard from "./pages/dashboard/Dashboard";
import Scroller from "./components/Scroller/Scroller";

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <IndentityVerification /> */}
      {/* <YourDetails /> */}
      {/* <CreateWallet /> */}
      {/* <EWalletSuccess /> */}
      {/* <EwalletRegisteration /> */}
      <Dashboard />
      {/* <Scroller /> */}
      {/* <Scroller2 /> */}
    </div>
  );
}

export default App;
