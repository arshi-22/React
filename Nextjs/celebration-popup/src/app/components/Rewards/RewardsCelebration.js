import Image from "next/image";
import "./RewardCelebration.css";
import reward_separation1 from "../../../../public/reward_separation1.svg";
import reward_separation2 from "../../../../public/reward_separation2.svg";

export default function RewardsCelebration({ rewards, setShowPopup }) {
  return (
    <div className="popup-BG">
      <div className="popup">
        <button className="close-button"> X</button>
        <h2 className="heading">Congratulations!</h2>
        <p className="success-message">Command completed Successfully!</p>
        <p className="message">
          You have successfully completed a command! Here are your well-earned
          rewards. Keep exploring the Command Center roe even more exciting
          mission and bigger rewards!
        </p>
        <p className="gained-rewards">You have gained:</p>
        <div className="reward-heading">
          <Image
            src={reward_separation1}
            alt="reward_separation1"
            className="img"
          />
          <span>Rewards</span>
          <Image
            src={reward_separation2}
            alt="reward_separation2"
            className="img"
          />
        </div>
        <div className="rewards">
          {rewards.map((reward, index) => (
            <div key={index} className="reward" >
              <img src={reward.icon} alt={reward.name} />
              <p>{reward.amount}</p>
            </div>
          ))}
        </div>
        <button className="claim-rewards">Claim Rewards</button>
      </div>
    </div>
  );
}
