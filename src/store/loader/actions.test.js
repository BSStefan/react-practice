import { LOADER_ACTIONS } from "./types";
import { turnOnLoader, turnOffLoader } from './actions';

const action = 'FETCH_MOVIES'

it('should return object with turn on type and aproprieate action without _REQUEST part', () => {
  const expected = {
    type: LOADER_ACTIONS.TURN_ON_LOADER,
    payload: action
  }
  expect(turnOnLoader(`${action}_REQUEST`)).toEqual(expected)
})

it('should return object with turn on type and aproprieate action without', () => {
  const expected = {
    type: LOADER_ACTIONS.TURN_ON_LOADER,
    payload: action
  }
  expect(turnOnLoader(action)).toEqual(expected)
})

it('should return object with turn off type and aproprieate action without _SUCCESS part', () => {
  const expected = {
    type: LOADER_ACTIONS.TURN_OFF_LOADER,
    payload: action
  }
  expect(turnOffLoader(`${action}_SUCCESS`)).toEqual(expected)
})

it('should return object with turn off type and aproprieate action without _FAILIRE part', () => {
  const expected = {
    type: LOADER_ACTIONS.TURN_OFF_LOADER,
    payload: action
  }
  expect(turnOffLoader(`${action}_FAILIRE`)).toEqual(expected)
})

it('should return object with turn off type and aproprieate action without', () => {
  const expected = {
    type: LOADER_ACTIONS.TURN_OFF_LOADER,
    payload: action
  }
  expect(turnOffLoader(action)).toEqual(expected)
})
