const DateBox = ({ workData }: { workData: WorkData }) => {
  const { date, time, post, loc, status } = workData;
  return (
    <div className="dateBox">
      <div>{date}</div>
      <div>
        <div>{time}</div>
        <div>
          {post}-{time}
        </div>
        <div>{loc}</div>
        <div></div>
      </div>
      <div>{status} </div>
    </div>
  );
};

export default DateBox;
