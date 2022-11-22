export const formatDate = (date: Date) => {
  const toDate = new Date(date);
  return `${toDate.getDate()}/${toDate.getMonth() + 1}/${toDate.getFullYear()}`;
};
// 14 days ago
