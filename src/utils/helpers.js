import moment from 'moment';

export const getExpirationDate = () => {
  const current = new Date();
  const expires = moment(current).add(1, 'h').format();
  return new Date(expires);
};

export const year = moment(new Date()).format('YYYY');

export const createSlug = (name) => {
  return name
    ? name
        .trim()
        .replace(/[äåáà]/gim, 'a')
        .replace(/[ööôóò]/gim, 'o')
        .replace(/[èé]/gim, 'e')
        .replace(/\s/g, '-')
        .toLowerCase()
    : null;
};
