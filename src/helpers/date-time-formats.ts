// import dayjs from "dayjs";

// export const dateTimeFormat = (value: string) => {
//   const formattedDate = dayjs(value);
//   const timeFormat = formattedDate.format("A");
//   const formattedTime = formattedDate.format("hh:mm");

//   return `${formattedDate.format("DD/MM/YYYY")} ${formattedTime} ${timeFormat}`;
// };


// Update the dateTimeFormat function to handle Date objects
export function dateTimeFormat(date: string | Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // hour12: true,
     // Use 12-hour clock format
  };

  // Check if the input is a string or a Date object
  const formattedDate = typeof date === "string" ? new Date(date) : date;

  // Use Intl.DateTimeFormat to format the date
  return new Intl.DateTimeFormat("en-US", options).format(formattedDate);
}

