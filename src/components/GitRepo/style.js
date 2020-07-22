import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border: 1px solid #777;
  border-radius: 5px;
  justify-content: space-between;
  background: #fff;
  margin: 10px;
`;

export const FirstInfo = styled.View`
  display: flex;
`;

export const Button = styled.TouchableOpacity`
  background-color: #5000ca;
  justify-content: center;
  align-items: center;
  height: 25px;
  border-radius: 100px;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-family: 'Antipasto Pro';
  font-size: 11px;
`;

export const Info = styled.Text`
  text-transform: uppercase;
  font-family: 'Antipasto Pro';
`;
