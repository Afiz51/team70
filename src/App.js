import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import IndentityVerification from "./pages/identityVerification/IndentityVerification";
import YourDetails from "./pages/yourDetails/YourDetails";
import CreateWallet from "./pages/createWallet/CreateWallet";
import EWalletSuccess from "./pages/eWalletSuccess/EWalletSuccess";
import EwalletRegisteration from "./pages/eWalletRegisteration/EwalletRegisteration";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Hmo from "./pages/folder/Hmo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route
            path="/identity-verification"
            element={<IndentityVerification />}
          />
          <Route path="/your-details" element={<YourDetails />} />
          <Route path="/create-ewallet" element={<CreateWallet />} />
          <Route path="/wallet-created" element={<EWalletSuccess />} />
          <Route
            path="/wallet-registeration"
            element={<EwalletRegisteration />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hmo" element={<Hmo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
