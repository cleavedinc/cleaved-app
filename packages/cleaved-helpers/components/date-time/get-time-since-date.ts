import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);

export const getTimeSinceDate = (date: any): string | [string, (number | undefined)?] => {
  const timeAgo = new TimeAgo("en-US");
  const dateParsed = new Date(date);
  const timezoneOffsetInMilliseconds = dateParsed.getTimezoneOffset() * 60 * 1000;

  return timeAgo.format(new Date(+dateParsed - timezoneOffsetInMilliseconds), "twitter-minute-now");
};
