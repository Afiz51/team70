import React from "react";
import "./creareWalllet.css";
import profile from "./images/profile.png";
import retry from "./images/retry.png";

const CreateWallet = () => {
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
        <p className="createAccountText">Create Account</p>
        <p className="createAccountRetry">Retry</p>
        <img className="profileImg" src={profile} alt="" />
        <img className="retryImg" src={retry} alt="" />
        <button className="accountButton"></button>
        <button className="accountButton"></button>
      </div>
      <input className="create-wallet-button" type="submit" value="Close" />
    </div>
  );
};

export default CreateWallet;
