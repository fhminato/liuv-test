import React from 'react';
import {useSelector} from 'react-redux';
import {getSelectedRepo} from '../../store/ducks/repo';
import {
  Container,
  InfoContainer,
  Text,
  Avatar,
  DescContainer,
  FooterContainer,
  HeaderContainer,
  Button,
} from './style';
import WaveHeader from '../../components/WaveHeader';

export default function RepoDetails({navigation}) {
  const repo = useSelector((state) => getSelectedRepo(state));
  return (
    <>
      <WaveHeader title={'Detalhes'} />
      <Container>
        <HeaderContainer>
          <Avatar source={{uri: repo.owner.avatar_url}} />

          <InfoContainer>
            <Text>{repo.owner.login}</Text>
            <Text>{repo.name}</Text>
            <Text>{repo.language}</Text>
          </InfoContainer>
        </HeaderContainer>

        <DescContainer>
          <Text>{repo.description}</Text>
        </DescContainer>

        <FooterContainer>
          <Button>
            <Text color={'#fff'}>{repo.private ? 'Privado' : 'Publico'}</Text>
          </Button>
          <Button>
            <Text color={'#fff'}>{'Watchers: ' + repo.watchers}</Text>
          </Button>
          <Button>
            <Text color={'#fff'}>{'Forks: ' + repo.forks}</Text>
          </Button>
        </FooterContainer>
      </Container>
    </>
  );
}
