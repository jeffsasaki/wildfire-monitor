import { convertToCSV } from './downloadCSV';

describe('convertToCSV', () => {
  it('returns an empty string for an empty array', () => {
    expect(convertToCSV([])).toBe('');
  });

  it('converts an array of objects to CSV format', () => {
    const wildfireData = [
      { FIRE_NUMBER: '1', FIRE_STATUS: 'Out', FIRE_CAUSE: 'Lightning', GEOGRAPHIC_DESCRIPTION: 'Vancouver'},
      { FIRE_NUMBER: '2', FIRE_STATUS: 'Under Control', FIRE_CAUSE: 'Person', GEOGRAPHIC_DESCRIPTION: 'Burnaby'}
    ];
    const expectedCSV = 'FIRE_NUMBER,FIRE_STATUS,FIRE_CAUSE,GEOGRAPHIC_DESCRIPTION\n1,Out,Lightning,Vancouver\n2,Under Control,Person,Burnaby';
    expect(convertToCSV(wildfireData)).toBe(expectedCSV);
  });
});
