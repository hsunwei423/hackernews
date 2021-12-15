import drawerReducer, { openDrawer, closeDrawer } from './drawer';

test('should handle open drawer', () => {
  const prevState = {
    isVisible: false
  };
  expect(drawerReducer(prevState, openDrawer())).toEqual({
    isVisible: true
  });
});

test('should handle close drawer', () => {
  const prevState = {
    isVisible: true
  };
  expect(drawerReducer(prevState, closeDrawer())).toEqual({
    isVisible: false
  });
});
