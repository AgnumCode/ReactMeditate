import React, { useState } from "react";
import "./css/HomeInfoCards.css";

const HomeInfoCards = () => {
  const [collapse, setCollapse] = useState({
    collapseMeditate: true,
    collapseHow: true,
    collapseBenefits: true,
  });

  const handleCollapse = (cardName) => {
    switch (String(cardName).toUpperCase()) {
      case "COLLAPSEMEDITATE":
        setCollapse({
          collapseMeditate: !collapse.collapseMeditate,
          collapseHow: true,
          collapseBenefits: true,
        });
        break;
      case "COLLAPSEHOW":
        setCollapse({
          collapseMeditate: true,
          collapseHow: !collapse.collapseHow,
          collapseBenefits: true,
        });
        break;
      case "COLLAPSEBENEFITS":
        setCollapse({
          collapseMeditate: true,
          collapseHow: true,
          collapseBenefits: !collapse.collapseBenefits,
        });
        break;
      default:
        console.error(
          "Error in detecting the correct info card to collapse or expand. Check HomeInfoCards.js."
        );
        break;
    }
  };

  return (
    <>
      <div className="card text-white lightDarkBg mb-3 homeShadow">
        <div
          onClick={() => handleCollapse("collapseMeditate")}
          className="card-header bg-success"
        >
           <span className="plus">What is meditation?</span>
        </div>
        <div
          className={
            "card-body" + (collapse.collapseMeditate ? " customCollapse" : "")
          }
        >
          <h4 className="card-title">Short history on meditation</h4>
          <p className="card-text">
            Meditation (as its known in the English word) originates from the
            word in Latin "Meditatum" translated literally "to ponder".
            Meditation has been part of human history for thousands of years.
            Its earliest history is recorded in ancient Indian, Chinese and
            Japanese depictions. There are also many religious topics that
            infuse its history such as with Buddhism, Confucianism.
          </p>
        </div>
      </div>
      <div className="card text-white lightDarkBg mb-3 homeShadow">
        <div
          onClick={() => handleCollapse("collapseHow")}
          className="card-header bg-primary"
        >
            <span className="plus"> How can I start?</span>
          
        </div>
        <div
          className={
            "card-body " + (collapse.collapseHow ? " customCollapse" : "")
          }
        >
          <h4 className="card-title">First steps</h4>
          <p className="card-text">
            1) Take a seat Find a place to sit that feels calm and quiet to you.
            <br />
            <br />
            2) Set a time limit If you’re just beginning, it can help to choose
            a short time, such as five or 10 minutes.
            <br />
            <br />
            3) Notice your body You can sit in a chair with your feet on the
            floor, you can sit loosely cross-legged, you can kneel—all are fine.
            Just make sure you are stable and in a position you can stay in for
            a while.
            <br />
            <br />
            4) Feel your breath Follow the sensation of your breath as it goes
            in and as it goes out.
            <br />
            <br />
            5) Notice when your mind has wandered Inevitably, your attention
            will leave the breath and wander to other places. When you get
            around to noticing that your mind has wandered—in a few seconds, a
            minute, five minutes—simply return your attention to the breath.
            <br />
            <br />
            6) Be kind to your wandering mind Don’t judge yourself or obsess
            over the content of the thoughts you find yourself lost in. Just
            come back.
            <br />
            <br />
            7) Close with kindness When you’re ready, gently lift your gaze (if
            your eyes are closed, open them). Take a moment and notice any
            sounds in the environment. Notice how your body feels right now.
            Notice your thoughts and emotions.
          </p>
        </div>
      </div>
      <div className="card text-white lightDarkBg mb-3 homeShadow">
        <div
          onClick={() => handleCollapse("collapseBenefits")}
          className="card-header bg-info"
        >
          <span className="plus"> What are the benefits?</span>
        </div>
        <div
          className={
            "card-body " + (collapse.collapseBenefits ? " customCollapse" : "")
          }
        >
          <h4 className="card-title">Benefits</h4>
          <p className="card-text">
            Meditation has multiple benefits providing mental wellness and
            control over negative emotions.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeInfoCards;
