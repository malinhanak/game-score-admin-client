import moment from 'moment';

export const getExpirationDate = () => {
  const current = new Date();
  const expires = moment(current).add(8, 'h').format();
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

// eslint-disable-next-line
export const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const compareScores = (a, b) => {
  const team = a.scoreTotal;
  const opponent = b.scoreTotal;

  if (team === opponent) {
    return team < opponent ? -1 : team > opponent ? 1 : 0;
  }

  return opponent - team;
};
