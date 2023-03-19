import { configureAxe } from 'cypress-axe'

configureAxe({
  rules: {
    // Your Axe configuration goes here
  },
  // Additional Axe options go here
})
import { configure } from '@testing-library/cypress';
import 'cypress-axe';

configure({ testIdAttribute: 'data-cy' });