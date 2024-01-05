import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://dmzn2b8hkpq8b.cloudfront.net/images/products/515x515/S660231_4.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://www.uniprint.ph/wp-content/uploads/2021/07/Tracing-Paper.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>

      <div className="main">
        <button className="button-style" onClick={() => play("scissors")}>
          가위
        </button>
        <button className="button-style" onClick={() => play("rock")}>
          바위
        </button>
        <button className="button-style" onClick={() => play("paper")}>
          보
        </button>
      </div>
    </div>
  );
}

export default App;
