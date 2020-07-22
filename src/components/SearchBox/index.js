import React, {useState} from 'react';
import {Button, InputContainer, Input, Text, SearchContainer} from './style';
import {Image} from 'react-native';
import SearchIcon from '../../../assets/images/search-icon.png';

export default function SearchBox(props) {
  const [username, setUsername] = useState('');

  return (
    <SearchContainer>
      <InputContainer>
        <Text>Usuario</Text>
        <Input
          value={username}
          onChangeText={(username) => setUsername(username)}
        />
      </InputContainer>
      <Button onPress={() => props.onClick(username)}>
        <Image source={SearchIcon} style={{height: 30, width: 30}}></Image>
      </Button>
    </SearchContainer>
  );
}
