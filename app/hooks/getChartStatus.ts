export const getChartStatus = ({
  isUpdating,
  hasData,
}: {
  isUpdating: boolean;
  hasData: boolean;
}) => {
  switch (true) {
    case isUpdating:
      return 'updating'; // 갱신 중
    case !hasData && !isUpdating:
      return 'noData'; // 차트 아웃 상태
    case !hasData:
      return 'noData'; // 차트 아웃 상태
    case hasData && isUpdating:
      return 'hasData'; // 갱신 중, 데이터 있음
    default:
      return 'hasData'; // 데이터 있음, 갱신 중 아님
  }
};
