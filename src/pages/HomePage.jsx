import React, { useState } from "react";
import "../css/HomePageLayout.css";
import { DashBoard } from "../components/DashBoard";
import { CreateQuiz } from "../components/CreateQuiz";
import { Analytics } from "../components/Analytics";

const HomePage = () => {
  const [btnToggle, setButtonTogle] = useState(0);

  const handleDashboard = () => {
    setButtonTogle(0);
  };
  const handleAnalytics = () => {
    setButtonTogle(1);
  };
  const handleCrateQuiz = () => {
    setButtonTogle(2);
  };
  return (
    <main className="main-container">
      <section className="sidebar">
        <h1>QUIZZIE</h1>

        <div className="btn-conatiner">
          <button
            className={btnToggle === 0 ? "button-enable" : "button-disabled"}
            onClick={handleDashboard}>
            Dashboard
          </button>
          <button
            className={btnToggle === 1 ? "button-enable" : "button-disabled"}
            onClick={handleAnalytics}>
            Analytics
          </button>
          <button
            className={btnToggle === 2 ? "button-enable" : "button-disabled"}
            onClick={handleCrateQuiz}>
            Create Quiz
          </button>
        </div>
      </section>
      <section className="content">
        {btnToggle === 0 ? <DashBoard /> : null}
        {btnToggle === 1 ? <Analytics /> : null}
        {btnToggle === 2 ? <CreateQuiz /> : null}
      </section>
    </main>
  );
};

export default HomePage;
