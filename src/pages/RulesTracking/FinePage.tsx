const FinePage = () => {
  return (
    <div className="w-full max-h-svw max-w-2xl p-6 rounded-2xl shadow-xl border border-gray-200">
      <div className=" flex justify-between">
        <div>User Name</div>
        <div>TOtal fines</div>
      </div>
      <div className="p-3 border border-gray-300 rounded-md shadow-sm max-w-">
        Latest fines detials
      </div>
      <div>
        <div> button +5</div>
        <div> button -5</div>
      </div>
      <div>Custom</div>
      <div>Upcomming Task for fine</div>
    </div>
  );
};

export default FinePage;
