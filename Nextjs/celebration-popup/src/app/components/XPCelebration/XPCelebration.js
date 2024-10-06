"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./XPCelebration.css";
import level_up from "../../../../public/level_up.svg";
import { shoot } from "../utils";

export default function XPCelebration({ closeAllModals }) {
  const [xpPercent, setXpPercent] = useState(0);

  useEffect(() => {
    setTimeout(() => closeAllModals(false), 5000);
    setTimeout(() => {
      setXpPercent(69);
    }, 1000);
    setTimeout(shoot, 1100);
  }, []);

  return (
    <div className="popup-wrapper">
      <div className="popup-content">
        <h1 className="level-up">LEVEL UP</h1>
        <div className="badge-wrapper">
          <motion.div
            initial={{ scale: 5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image src={level_up} alt="Badge" className="badge" />
          </motion.div>
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [0.5, 1], opacity: 1 }}
            transition={{
              duration: 1,
              times: [0, 0.5, 1],
              delay: 1,
              ease: "easeInOut",
            }}
          >
            <Image src={level_up} alt="Badge" className="badge" />
          </motion.div>
        </div>
        <h2 className="corporal">Corporal</h2>
        <div className="xpBar-wrap">
          <div className="xpBar-range">
            <span className="xp-value"> 34,500</span>
            <span>50,000</span>
          </div>
          <div className="xp-bar">
            <motion.div
              className="xp-fill"
              initial={{ width: "0%" }}
              animate={{ width: `${xpPercent}%` }}
              transition={{ duration: 2 }}
            />
          </div>
        </div>

        <motion.button className="claim-button" whileTap={{ scale: 0.95 }}>
          Claim NFT Badge
        </motion.button>
        <p className="popup-text leveled-up">
          {"You've leveled up and earned a new badge!"}
        </p>
        <p className="claim-badge">
          Claim your <span className="NFT-badge">NFT badge</span> now, or
          retrieve it later from your Inventory.
        </p>
        <p className="popup-text small-text">
          {`To claim your new badge, you'll need to transfer your previous badge
          from your wallet for it to be burned in exchange for the new one. If
          there's insufficient gas in your wallet, the transaction will be
          canceled. You can always visit your Inventory and claim your badge at
          any time.`}
        </p>
      </div>
    </div>
  );
}
