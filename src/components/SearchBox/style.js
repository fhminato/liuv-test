import styled from 'styled-components/native';

export const SearchContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const InputContainer = styled.View`
  display: flex;
  width: 80%;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin: 15px 0px 0px 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-family: 'Antipasto Pro Demibold';
`;

export const Text = styled.Text`
  color: #000;
  text-transform: uppercase;
  font-family: 'Antipasto Pro';
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  font-family: 'Antipasto Pro';
  font-size: 15px;
`;
