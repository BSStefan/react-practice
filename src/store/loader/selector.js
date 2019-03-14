// @flow
import type { LoaderState } from './types';

export const isLoading = (state: LoaderState, actions: string[], defaultValue: boolean = true): boolean => {
  const formattedActions = actions.map(action => action.replace('_REQUEST', ''));
  let isLoadingValue
  formattedActions.forEach(action => {
    if (state.byAction[action]) {
      isLoadingValue = true
    } else if (state.byAction[action] === false) {
      isLoadingValue = isLoadingValue || false
    }
  })
  return isLoadingValue === undefined ? defaultValue : isLoadingValue;
}