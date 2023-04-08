export const timeForToday = (value: string | number | Date) => {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60,
  );

  if (betweenTime < 0) {
    return '';
  }

  if (betweenTime < 1) {
    return '방금전';
  }
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  return `${timeValue.getMonth()}월 ${timeValue.getDay()}일 ${timeValue.getHours()}:${timeValue.getMinutes()}`;
};
