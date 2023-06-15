import "./index.css";

const TodoItem = ({ data, emoji }) => {
  const onHandleClick = () => alert(data.completed);
  const userImgPlaceHolder =
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

  return (
    <div className="TodoItem" onClick={onHandleClick}>
      <input type="checkbox" name="check" id="check" checked={data.completed} />
      <p style={{ textDecoration: data.completed && "line-through" }}>
        {data.title}
        {emoji}
      </p>
      <img src={data?.userImg || userImgPlaceHolder} alt={data.title} />
      <p className="TodoItem__username">{data?.userName || "User"}</p>
    </div>
  );
};

export default TodoItem;
