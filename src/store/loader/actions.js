// @flow
import { LOADER_ACTIONS } from "./types";
import type { TurnOnLoader, TurnOffLoader } from './types';

export const turnOnLoader = (action: string): TurnOnLoader => ({
  type: LOADER_ACTIONS.TURN_ON_LOADER,
  payload: action.replace('_REQUEST', '')
});

export const turnOffLoader = (action: string): TurnOffLoader => ({
  type: LOADER_ACTIONS.TURN_OFF_LOADER,
  payload: action.replace('_SUCCESS', '').replace('_FAILIRE', '')
});