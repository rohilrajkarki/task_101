const List = ({ listItem, itemId }: { listItem: string; itemId: number }) => {
  const stringId = itemId.toString();

  return (
    <div>
      <input type="checkbox" id={stringId} />
      <label htmlFor={stringId}> {listItem}</label>
    </div>
  );
};

export default List;
