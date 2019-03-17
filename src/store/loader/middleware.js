// @flow
import { turnOnLoader, turnOffLoader } from './actions';
import type { Middleware, Dispatch } from 'redux';
import type { LoaderActions } from './types';

export const setLoaderValue: Middleware<any, any, any> = ({ dispatch }: { dispatch: Dispatch<LoaderActions> }) =>
  (next: any) =>
    (action: any) => {
      if (action.type.includes('REQUEST')) {
        dispatch(turnOnLoader(action.type))
      } else if (action.type.includes('SUCCESS') || action.type.includes('FAILURE'))
        dispatch(turnOffLoader(action.type))

      return next(action)
    }