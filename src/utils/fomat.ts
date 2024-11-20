export const formatDateToLongMonth = (originalDate: string): string => {
  const date = new Date(originalDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("pt-BR", options);
};

export const formatLocaleDate = (
  originalDate: string,
  locale?: string,
  options?: Intl.DateTimeFormatOptions
) => {
  const date = new Date(originalDate);
  return date.toLocaleDateString(locale ?? "pt-BR", options);
};

export const getFullYear = (originalDate: string) => {
  const date = new Date(originalDate);

  return date.getFullYear();
};

export const formatTimeToHM = (minutes: number) => {
  if (isNaN(minutes) || minutes < 0) {
    return "Invalid input";
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hourString = hours > 0 ? `${hours}h` : "";
  const minuteString = remainingMinutes > 0 ? `${remainingMinutes}m` : "";

  return `${hourString} ${minuteString}`.trim();
};

export const getLanguageName = new Intl.DisplayNames(["pt-BR"], {
  type: "language",
});

export const USDollar = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  notation: "compact",
  currency: "USD",
});

export const movieStatusMap: { [key: string]: string } = {
  Rumored: "Rumor",
  Planned: "Planejado",
  "In Production": "Em Produção",
  "Post Production": "Pós-Produção",
  Released: "Lançado",
  Canceled: "Cancelado",
  Archived: "Arquivado",
};
