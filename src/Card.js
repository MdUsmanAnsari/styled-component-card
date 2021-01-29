import styled, { css } from "styled-components";

const Heading = styled.h1`
  font-size: 2em;
  color: #fff;
`;

const P = styled.p`
  font-size: 1.1em;
  color: #fff;
`;

const Card = (props) => {
  const CardStyle = props.style;

  return (
    <CardStyle bg={props.ischange} onClick={props.changeBgHandler}>
      <Heading>{props.title}</Heading>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla
        officia sequi delectus, quibusdam minima quaerat culpa excepturi
        voluptas adipisci voluptatum temporibus et debitis suscipit aliquam quae
        consectetur ex labore.
      </P>
    </CardStyle>
  );
};

export default Card;
