const getFormatedDate = (currDate, type = "full") => {
  const _date = new Date(currDate);
  const isAm = _date.getHours() < 13 ? "오전" : "오후";
  const hours =
    _date.getHours() % 12 < 10
      ? "0" + (_date.getHours() % 12)
      : _date.getHours() % 12;
  const minutes =
    _date.getMinutes() < 10 ? "0" + _date.getMinutes() : _date.getMinutes();
  const year = _date.getFullYear();
  const month = _date.getMonth() + 1;
  const date = _date.getDate();

  return type === "short"
    ? `${isAm} ${hours}:${minutes}`
    : `${year}년 ${month}월 ${date}일, ${isAm} ${hours}:${minutes}`;
};

export { getFormatedDate };

// getTime()을 받아서 `오후 : 11:04 ` 의 형식으로 formating
