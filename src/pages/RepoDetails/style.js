import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

export const HeaderContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const InfoContainer = styled.View`
  display: flex;
  align-items: flex-start;
  padding: 10px;
`;

export const DescContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
`;

export const Text = styled.Text`
  color: ${(props) => (props.color ? props.color : '#000')};
  text-transform: uppercase;
  font-family: 'Antipasto Pro Demibold';
  text-align: center;
  font-size: 15px;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 5px;
`;

export const FooterContainer = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #5000ca;
  justify-content: center;
  align-items: center;
  height: 20px;
  border-radius: 100px;
  padding: 12px;
  margin: 5px;
`;
