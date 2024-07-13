import "./style.css";
import reactIcon from "../../assets/react.png";

const Card = () => {
  const topics = [
    {
      title: "React",
      description: "React is an opensource javascript library",
      icon: reactIcon,
      alt: "react",
    },
    {
      title: "React",
      description: "React is an opensource javascript library",
      icon: reactIcon,
      alt: "react",
    },
    {
      title: "React",
      description: "React is an opensource javascript library",
      icon: reactIcon,
      alt: "react",
    },
    {
      title: "React",
      description: "React is an opensource javascript library",
      icon: reactIcon,
      alt: "react",
    },
  ];

  return (
    <>
      {topics.map((topic) => (
        <div className="card">
          <img src={topic.icon} className="cardImage" alt={topic.alt} />
          <h2>{topic.title}</h2>
          <p>{topic.description}</p>
        </div>
      ))}
    </>
  );
};
export default Card;
