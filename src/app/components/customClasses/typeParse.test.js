jest.mock('../jsons/vars', () => ({
  infoCud: {},
}));

import * as typeParse from './typeParse';

describe('typeParse legal and due form rules', () => {
  test('uses 29 business days for the first legal and due form interval', () => {
    expect(typeParse.getFirstLegalAndDueDays()).toBe(29);
  });
});