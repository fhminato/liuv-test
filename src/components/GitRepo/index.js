import React from 'react';
import {Container, FirstInfo, Info, Button, ButtonText} from './style';

export default function GitRepo(props) {
  return (
    <Container>
      <FirstInfo>
        <Info>{props.item.name}</Info>
        <Info>{props.item.language}</Info>
      </FirstInfo>
      <Button onPress={() => props.onClick(props.item)}>
        <ButtonText>Detalhes</ButtonText>
      </Button>
    </Container>
  );
}
