import { setLoaderValue } from './middleware';
import { turnOnLoader, turnOffLoader } from './actions';

describe('Loader middleware', () => {

  let next
  let store

  beforeEach(() => {
    next = jest.fn();
    store = { dispatch: jest.fn() };
  })

  it('should call next with given action', () => {
    const action = { type: 'TEST' };
    setLoaderValue(store)(next)(action)
    expect(next).toHaveBeenCalledWith(action)
    expect(next).toHaveBeenCalledTimes(1)
  })

  it('should call dispatch with turnOnLoader action', () => {
    const action = { type: 'FETCH_REQUEST' };
    setLoaderValue(store)(next)(action)
    expect(store.dispatch).toHaveBeenCalledWith(turnOnLoader(action.type))
  })

  it('should call dispatch with turnOffLoader action', () => {
    const action = { type: 'FETCH_SUCCESS' };
    setLoaderValue(store)(next)(action)
    expect(store.dispatch).toHaveBeenCalledWith(turnOffLoader(action.type))
  })

  it('should call dispatch with turnOffLoader action', () => {
    const action = { type: 'FETCH_FAILURE' };
    setLoaderValue(store)(next)(action)
    expect(store.dispatch).toHaveBeenCalledWith(turnOffLoader(action.type))
  })
})

