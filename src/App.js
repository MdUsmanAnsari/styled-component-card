import styled from "styled-components";
import { useState } from "react";

import Card from "./Card";

const AppStyle = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  gap: 1rem;
`;

const CardStyle = styled.div`
  width: 18rem;
  padding: 2rem;
  background-color: #3498db;
  border-radius: 2px;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    transform: translateY(-4px) scale(1.01);
  }

  background-color: ${(props) => (props.bg ? " #3498db" : "#34495e")};
`;

const App = () => {
  const data = [
    {
      title: "Card1",
    },
    {
      title: "Card2",
    },
  ];

  const [selcted, setSelected] = useState(false);

  const changeBgHandler = (idx) => {
    setSelected(idx);
  };

  return (
    <AppStyle>
      {data.map((item, index) => (
        <Card
          title={item.title}
          style={CardStyle}
          changeBgHandler={() => changeBgHandler(index)}
          ischange={selcted === index}
          key={index}
        />
      ))}
    </AppStyle>
  );
};

export default App;
