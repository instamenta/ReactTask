import { create } from 'react-test-renderer';

test('renders the app component', () => {
  const component = create(<App />);
  expect(component.toJSON()).toMatchSnapshot();
});