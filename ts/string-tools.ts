export const capitalize_first_letter = (word: string): string => {
  return word[0].toUpperCase() + word.slice(1)
}

export const format_long_string = (str: string): string => {
  return str.length > 14 ? str.substring(0, 14) + "..." : str;
}

export const format_unix = (unix_timestamp: number, usa_format: boolean = false): { time_ago: string; date: string; } => {
  const date = new Date(unix_timestamp * 1000);
  const now = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formatted_day = day < 10 ? `0${day}` : day;
  const formatted_month = month < 10 ? `0${month}` : month;

  const diff_in_ms = now.getTime() - date.getTime();
  const diff_in_days = Math.floor(diff_in_ms / (1000 * 60 * 60 * 24));

  let time_ago = '';
  if (diff_in_days === 0) {
    time_ago = 'Today';
  } else if (diff_in_days === 1) {
    time_ago = 'Yesterday';
  } else {
    time_ago = `${diff_in_days.toLocaleString()} days ago`;
  }

  const data = {
    time_ago,
    date: usa_format ? `${formatted_month}/${formatted_day}/${year}` : `${formatted_day}/${formatted_month}/${year}`
  }

  return data;
}
