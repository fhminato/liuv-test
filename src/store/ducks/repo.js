import {createSelector} from 'reselect';
import api from '../../services/api';

export const Types = {
  LOAD_REPOS: 'LOAD REPOS',
  LOAD_REPOS_COMPLETED: 'LOAD REPOS COMPLETED',
  LOAD_REPOS_STARRED: 'LOAD REPOS STARRED',
  LOAD_REPOS_ERROR: 'LOAD REPOS ERROR',
  SELECT_REPO: 'SELECT REPO',
  CLEAR_REPOS: 'CLEAR REPOS',
};

const INITIAL_STATE = {
  repos: [],
  selectedRepo: null,
  loading: false,
  error: null,
};

const repoSelector = (state) => state.repo;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD_REPOS:
      return {
        ...state,
        loading: true,
      };
    case Types.LOAD_REPOS_COMPLETED:
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };
    case Types.LOAD_REPOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case Types.SELECT_REPO:
      return {
        ...state,
        selectedRepo: action.payload,
      };

    case Types.CLEAR_REPOS:
      return {
        ...state,
        selectedRepo: null,
        repos: [],
      };
    default:
      return state;
  }
};

export const loadReposActions = (data) => {
  return {
    type: Types.LOAD_REPOS,
  };
};

export const clearReposActions = () => {
  return {
    type: Types.CLEAR_REPOS,
  };
};

export const loadReposCompletedAction = (repos) => ({
  type: Types.LOAD_REPOS_COMPLETED,
  payload: repos,
});

export const selectRepoAction = (repo) => ({
  type: Types.SELECT_REPO,
  payload: repo,
});

export const loadReposErrorAction = (error) => ({
  type: Types.LOAD_REPOS_ERROR,
  payload: error,
});

export const onLoadRepos = (username) => {
  return (dispatch) => {
    api
      .get(`/${username}/repos`)
      .then((response) => {
        dispatch(loadReposCompletedAction(response.data));
      })
      .catch((error) => {
        dispatch(loadReposErrorAction(error));
      });
  };
};

export const onLoadReposStarred = (username) => {
  return (dispatch) => {
    api
      .get(`/${username}/starred`)
      .then((response) => {
        dispatch(loadReposCompletedAction(response.data));
      })
      .catch((error) => {
        dispatch(loadReposErrorAction(error));
      });
  };
};

export const getRepos = createSelector([repoSelector], (repo) => repo.repos);
export const getSelectedRepo = createSelector(
  [repoSelector],
  (repo) => repo.selectedRepo,
);

export default reducer;
