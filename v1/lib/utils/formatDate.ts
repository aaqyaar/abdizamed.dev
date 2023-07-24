export const formatDate = (date: Date) => {
  const toDate = new Date(date);
  return `${toDate.getDate()}/${toDate.getMonth() + 1}/${toDate.getFullYear()}`;
};

// 14 days ago

export const calculateDate = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  // different in months
  const diff =
    end.getMonth() -
    start.getMonth() +
    12 * (end.getFullYear() - start.getFullYear());
  return `${diff} months`;
};
