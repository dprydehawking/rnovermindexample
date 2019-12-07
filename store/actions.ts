import {Action} from 'overmind';

export const toggleLoading: Action<boolean, void> = ({state}, loading) => {
  state.loading = loading;
};
