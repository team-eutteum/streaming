export const getChartStatus = ({
  isUpdating,
  isLoading,
  isError,
  hasData,
}: {
  isUpdating: boolean;
  isLoading: boolean;
  isError: boolean;
  hasData: boolean;
}) => {
  switch (true) {
    case isUpdating:
      return 'updating';
    case isLoading:
      return 'loading';
    case isError:
      return 'error';
    case !hasData:
      return 'noData';
    default:
      return 'hasData';
  }
};
