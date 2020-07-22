import React, {useState} from 'react';
import GitRepo from './../GitRepo';
import {FlatList} from 'react-native';

export default function RepoList(props) {
  return (
    <FlatList
      style={{width: '100%'}}
      data={props.data}
      renderItem={({item}) => (
        <GitRepo item={item} onClick={(item) => props.onClick(item)} />
      )}
      keyExtractor={(item, index) => `${index}`}></FlatList>
  );
}
