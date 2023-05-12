import { sv } from 'date-fns/locale';
import { formatDistance, format, intervalToDuration, parse } from 'date-fns';

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export const formatSsn = (ssn: string): string => {
  if (!ssn) {
    return '';
  }
  const matches = ssn.match(/.{1,8}/g);
  if (matches) {
    return matches.join('-');
  }
  return '';
};

export const niceTimeAgo = (date: string | number | Date): string =>
  formatDistance(new Date(date), new Date(), { addSuffix: true, locale: sv });

export const monthsToYears = (months: number): number =>
  Math.floor(months / 12);

export const formatDate = (date: string | number | Date): string =>
  format(new Date(date), 'yyyy-MM-dd');

export const formatDateAsHoursMinutes = (
  date: string | number | Date
): string => format(new Date(date), 'HH:mm');

export const formatParsedDate = (date: string): string =>
  format(parse(date, 'yyyyMMdd', new Date()), 'yyyy-MM-dd');

export const formatDateTime = (date: string | number | Date): string =>
  format(new Date(date), 'yyyy-MM-dd "kl" HH:mm');

export const ssnToAge = (ssn: string) => {
  if (!ssn) {
    return '';
  }

  const ssnDate = parse(ssn.substring(0, 8), 'yyyyMMdd', new Date());

  const interval = intervalToDuration({
    start: ssnDate,
    end: new Date(),
  });

  return interval.years ?? 0;
};

export const ssnToBirthDay = (ssn: string): Date | void => {
  try {
    ssn = ssn.replace(/[^0-9]/g, '');
    return new Date(
      parseInt(ssn.substring(0, 4)),
      parseInt(ssn.substring(4, 2)),
      parseInt(ssn.substring(6, 2)),
      0,
      0,
      0
    );
  } catch (e) {
    console.error(`Could not convert invalid SSN ${ssn} to a valid date`, e);
  }
};

export const formatNumber = (num: number): string => {
  const options = {
    style: 'decimal',
    minimumFractionDigits: 0,
  };

  return new Intl.NumberFormat('sv-se', options).format(num);
};

export const formatInterest = (num: number): string => {
  const options = {
    style: 'decimal',
    maximumFractionDigits: 2,
  };

  return new Intl.NumberFormat('sv-se', options).format(num);
};

export const userFullName = (user: {
  firstName: string;
  lastName: string;
}): string => {
  return `${user.firstName} ${user.lastName}`;
};

export const ssnToGender = (ssn: string): Gender | undefined => {
  try {
    const genderMarker = ssn.charAt(ssn.length - 2);
    return parseInt(genderMarker) % 2 ? Gender.MALE : Gender.FEMALE;
  } catch (e) {
    console.error(`Could not convert invalid SSN ${ssn} to a valid gender`, e);
  }
};
