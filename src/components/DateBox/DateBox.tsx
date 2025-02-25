const DateBox = ({ workData }: { workData: WorkData }) => {
  const { date, time, post, loc, status } = workData;
  return (
    <div className="dateBox">
      <button onClick={() => console.log("clicked", date)}>
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
      </button>
    </div>
  );
};

export default DateBox;
