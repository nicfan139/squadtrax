import moment from 'moment';

export const getDateISO = (date:string = '') => {
  if (date) {
    return moment(date).format('YYYY-MM-DD');
  }
  return moment().format('YYYY-MM-DD');
}