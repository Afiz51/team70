import React from "react";
import { useNavigate } from "react-router-dom";
import "./creareWalllet.css";
import cancel from "./images/cancel-img.png";
import retry from "./images/retry.png";

const CreateWallet = () => {
  const navigate = useNavigate();
  return (
    <div className="createWalletMainBoard">
      <div className="errorDiv">
        <div className="errorBackground">
          <div className="errorInner">
            <i class="fa-solid fa-x"></i>
          </div>
        </div>
      </div>
      <p className="errorText">
        Seems you do not have an eNaira wallet. Please click on “Create Account”
        to open an eNaira wallet.
      </p>
      <div className="createAccountDiv">
        <p className="createAccountText">Exit</p>
        <p className="createAccountRetry">Retry</p>
        <img className="profileImg" src={cancel} alt="" />
        <img className="retryImg" src={retry} alt="" />
        <button
          className="accountButton"
          onClick={() => navigate("/")}
        ></button>
        <button className="accountButton"></button>
      </div>
      <input
        className="create-wallet-button"
        type="submit"
        value="Create Account"
        onClick={() => navigate("/wallet-registeration")}
      />
    </div>
  );
};

export default CreateWallet;
