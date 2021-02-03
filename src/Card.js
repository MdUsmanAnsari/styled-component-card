import styled from "styled-components";

const CardStyle = styled.div`
  width: 18rem;
  padding: 2rem;
  background-color: #3498db;
  border-radius: 2px;
  transition: all 0.2s;
  background-color: ${(props) =>
    props.bg ? "green" : "#3498db"};
`;

const Heading = styled.h1`
  font-size: 2em;
  color: #fff;
`;

const P = styled.p`
  font-size: 1.1em;
  color: #fff;
`;

const Card = ({ischange , changeBgHandler , title}) => {
  return (
    <CardStyle bg={ischange} onClick={changeBgHandler}>
      <Heading>{title}</Heading>
      <P>
          Click for see changes
      </P>
    </CardStyle>
  );
};

export default Card;
