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

const App = () => {
  const data = [
    {
      id: 1,
      title: "Card1",
    },
    {
      id: 2,
      title: "Card2",
    },
  ];

  const [selcted, setSelected] = useState(false);

  const changeBgHandler = (id) => {
    setSelected(id);
  };

  return (
    <AppStyle>
      {data.map((item , index) => (
        <Card
          title={item.title}
          changeBgHandler={() => changeBgHandler(item.id)}
          ischange={selcted === item.id}
          key={index}
        />
      ))}
    </AppStyle>
  );
};

export default App;
