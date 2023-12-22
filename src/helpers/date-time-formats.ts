import dayjs from "dayjs";

export const dateTimeFormat = (value: string) => {
  const formattedDate = dayjs(value);
  const timeFormat = formattedDate.format("A");
  const formattedTime = formattedDate.format("hh:mm");

  return `${formattedDate.format("DD/MM/YYYY")} ${formattedTime} ${timeFormat}`;
};
