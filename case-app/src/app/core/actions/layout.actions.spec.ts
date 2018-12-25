import {NavigatedToBox, NavigateToBox, NotNavigatedToBox} from './layout.actions';

describe('Layout Actions', () => {
  it('should create an NavigateToBox instance', () => {
    expect(new NavigateToBox()).toBeTruthy();
  });

  it('should create an NavigatedToBox instance', () => {
    expect(new NavigatedToBox()).toBeTruthy();
  });

  it('should create an NotNavigatedToBox instance', () => {
    expect(new NotNavigatedToBox({ error: '' })).toBeTruthy();
  });
});
