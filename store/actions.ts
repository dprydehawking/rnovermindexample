import {Action} from 'overmind';

export const toggleLoading: Action<boolean, void> = (
  {state, effects},
  loading,
) => {
  state.loading = loading;
  effects.userApi.hello();
};
