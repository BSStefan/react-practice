// @flow

export const LOADER_ACTIONS = {
  TURN_ON_LOADER: '@@loader/TURN_ON_LOADER',
  TURN_OFF_LOADER: '@@loader/TURN_OFF_LOADER',
}

export type LoaderState = {
  byAction: { [string]: boolean }
}

export type TurnOnLoader = {
  type: '@@loader/TURN_ON_LOADER',
  payload: string
}

export type TurnOffLoader = {
  type: '@@loader/TURN_OFF_LOADER',
  payload: string
}

export type LoaderActions = TurnOnLoader | TurnOffLoader