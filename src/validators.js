export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
  value.trim() !== '' ? undefined : 'Cannot be empty';
export const isTrimmed = value =>
  value.trim() === value ? undefined : 'Cannot start or end with whitespace';
export const length = length => value => {
  if (length.min && value.length < length.min) {
    return `Must be at least ${length.min} characters long`;
  }
  if (length.max && value.length > length.max) {
    return `Must be at most ${length.max} characters long`;
  }
};
export const matches = field => (value, allValues) =>
  field in allValues && value.trim() === allValues[field].trim()
    ? undefined
    : 'Does not match';

export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
export const minValue1 = minValue(1);
export const minValue0 = minValue(0);
export const minValue4 = minValue(4);

export const maxValue = max => value =>
  value && value > max ? `Must be less than ${max}` : undefined;

export const maxValue5 = maxValue(5);
export const maxValue6 = maxValue(6);
