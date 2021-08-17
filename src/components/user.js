import PR from "./profileList";
function User({ match, Pr }) {
  const ID = match.params.ID;

  const user = PR.find((el) => el.id == ID);
  return (
    <div className='user'>
      <img src='https://www.nicepng.com/png/detail/125-1253785_my-name-is-istabraq-almusally-hi-bubble-png.png' />
    <h1>  this is the profile of {user.name} </h1>
    </div>
  );
}
export default User;
