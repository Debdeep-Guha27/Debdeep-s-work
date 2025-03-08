import React, { useState } from "react";
import "../Css/ChooseUs.css";
import userFriendly from "../assets/user-friendly.jpg";
import performance from "../assets/performance.jpg";
import statisticChart from "../assets/statistics.jpg";
import proportion from "../assets/proportion.jpg";
const cardData = [
  { title: "User Friendly", img: userFriendly },
  { title: "Performance", img: performance },
  { title: "Statistic Chart", img: statisticChart },
  { title: "Proportion", img: proportion }
];
const faqData = [
  {
    question: "The expense windows adapted sir. Wrong widen drawn.",
    answer: "Yes, the expense was adapted based on the circumstances and requirements.",
  },
  {
    question: "Six curiosity day assurance bed necessary?",
    answer: "Curiosity and assurance go hand in hand for a successful day.",
  },
  {
    question: "Produce say the ten moments parties?",
    answer: "Yes, the ten moments of interaction bring value to the discussion.",
  },
  {
    question: "Simple innate summer fat appear basket his desire joy?",
    answer: "Summer joys often bring new experiences and opportunities.",
  },
  {
    question: "Outward clothes promise at gravity do excited?",
    answer: "Outward appearances may sometimes reflect inner excitement.",
  }
];

const ChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="chooseus">
      <h2 className="heading">Why People Choose Us?</h2>
      <div className="cards">
      {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={card.title} className="card-image" />
            <h3>{card.title}</h3>
            <p>
              Winning a hackathon requires a mix of smart execution, teamwork, and
              presentation skills. Start by picking the right idea quickly—one that
              aligns with the hackathon theme, is simple yet impactful, and feasible
              within the given time.
            </p>
          </div>
        ))}
      </div>

      <h2 className="faq-heading">Frequently Asked Questions?</h2>
      <div className="faq-section">
        <div className="faqs">
          {faqData.map((item, index) => (
            <div className="faq" key={index} onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                <p>{item.question}</p>
                <span>{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>

        <div className="ask-section">
          <p>Want to Ask anything apart from these?</p>
          <img src={require("../assets/ask-section.jpg")} alt="Ask Icon" className="ask-image" />
          <input type="text" placeholder="Enter Here" />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

