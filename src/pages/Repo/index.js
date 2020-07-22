import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  getRepos,
  selectRepoAction,
  onLoadRepos,
  clearReposActions,
} from '../../store/ducks/repo';
import {Container} from './style';
import SearchBox from '../../components/SearchBox';
import RepoList from '../../components/RepoList';
import WaveHeader from '../../components/WaveHeader';

export default function Repo({navigation}) {
  const dispatch = useDispatch();
  const repos = useSelector((state) => getRepos(state));

  useEffect(() => {
    dispatch(clearReposActions());
  }, []);

  const showDetails = (item) => {
    dispatch(selectRepoAction(item));
    navigation.navigate('Detalhes');
  };

  return (
    <>
      <WaveHeader title={'Repositórios'} />
      <Container>
        <SearchBox onClick={(username) => dispatch(onLoadRepos(username))} />

        <RepoList data={repos} onClick={(item) => showDetails(item)} />
      </Container>
    </>
  );
}
