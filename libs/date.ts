export function parseDateString(dateStr: string) {
  const date = new Date(dateStr);

  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${month}. ${day}.`;

  return {
    year,
    formattedDate,
  };
}
