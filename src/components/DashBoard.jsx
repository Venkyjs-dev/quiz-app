import React from "react";
import "../css/DashBoard.css";
import { quizes } from "../utils/data";

const QuizCard = ({ name, impressions, created }) => {
  return (
    <div className="quiz-card">
      <h3>{name}</h3>
      <p>{impressions}</p>
      <p>{created}</p>
    </div>
  );
};

export const DashBoard = () => {
  return (
    <section className="dashboard-container">
      <div className="top-section">
        <div className="card">
          <h2>12 quiz created</h2>
        </div>
        <div className="card">
          <h2>110 quistions created</h2>
        </div>
        <div className="card">
          <h2>14.1K Impressions</h2>
        </div>
      </div>
      <div className="bottom-section">
        <h2>Trending Quizs</h2>
        <div className="quiz-cards-container">
          {quizes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              name={quiz.name}
              impressions={quiz.impression}
              created={quiz.created}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
