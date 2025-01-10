export function timeFormatter({
  seconds,
  type,
}: {
  seconds: number;
  type?: string;
}): string {
  const formattedMinutes = Math.floor(seconds / 60);
  const formattedSeconds = seconds % 60;

  if (type === "timer") {
    return `${formattedMinutes} : ${
      formattedSeconds < 10 ? `0${formattedSeconds}` : `${formattedSeconds}`
    }`;
  } else return String(formattedMinutes);
}
