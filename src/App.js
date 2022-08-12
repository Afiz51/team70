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
import ViewHmo from "./pages/viewHmo/NiewHmo";
import Hospitals from "./pages/Hopsitals/Hospitals";
import BookAVisit from "./pages/bookAVisit/BookAVisit";
import CallOrChatWithDoctor from "./pages/callOrChatWithDoctor/CallOrChatWithDoctor";
import HealthTips from "./pages/healthTips/HealthTips";
import SpeakWithDoctor from "./pages/speakWithDoctor/SpeakWithDoctor";
import OurServices from "./pages/ourServices/OurServices";

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
          <Route path="/book-a-visit" element={<BookAVisit />} />
          <Route path="/view-hmo" element={<ViewHmo />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/call-or-chat" element={<CallOrChatWithDoctor />} />
          <Route path="/speak-with-doctor" element={<SpeakWithDoctor />} />
          <Route path="/health-tips" element={<HealthTips />} />
          <Route path="/our-services" element={<OurServices />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
