import { reducer, initialState } from './layout.reducer';
import { NavigatedToBox, NavigateToBox } from "../actions/layout.actions";

describe('Layout Reducer', () => {
  describe('an Layout action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });

    it('should return the navigation to box state', () => {
      const action = new NavigateToBox();
      const result = reducer(initialState, action);
      expect(result.navigatingToBox).toBe(true);
    });

    it('should return the navigation to box ended state', () => {
      const action = new NavigatedToBox();
      const result = reducer(initialState, action);
      expect(result.navigatingToBox).toBe(false);
    });

  });
});
