"use client";
import { useState } from "react";
import XPCelebration from "./components/XPCelebration/XPCelebration";
import "./styles.css";
import RewardsCelebration from "./components/Rewards/RewardsCelebration";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const rewards = [
    { icon: "/xp_icon.svg", name: "XP", amount: 20 },
    { icon: "/rewards_2.svg", name: "Coins", amount: 250000000 },
  ];

  const handleRewards = () => {
    setShowPopup(true);
  };

  return (
    <div className="container">
      <div className="buttons">
        <button className="button">Continue</button>
        <button className="button">New Game</button>
        <button className="button">Exit</button>
        <button className="button rewards" onClick={handleRewards}>
          Rewards
        </button>
      </div>
      {showPopup && (
        <RewardsCelebration rewards={rewards} setShowPopup={setShowPopup} />
      )}
    </div>
  );
};

export default HomePage;
