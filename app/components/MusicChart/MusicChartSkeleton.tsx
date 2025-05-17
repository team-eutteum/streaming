function MusicChartSkeleton() {
  return (
    <tr className="chart-list skeleton">
      <td className="chart-box">
        <p className="img-wrap" />
        <p className="tit f-bd4" />
        <div className="divide">
          <div className="chart f-bd3 -b" />
          <span className="chart-change f-bd4" />
        </div>
      </td>
    </tr>
  );
}

export default MusicChartSkeleton;
