type TUserInfo = {
  backgroundImage: string;
  userImage: string;
  userName: string;
  instaId: string;
  onFollow: () => void;
  isLoggined?: boolean;
};

const ProfileCard = (props: TUserInfo) => {
  return (
    <>
      <article className="card">
        <div>
          <img
            className="card-img"
            src={props.backgroundImage}
            alt="background-pic"
          />
        </div>
        <div className="profile">
          <img
            className="prof-img"
            src={props.isLoggined ? props.userImage : ""}
            alt="profile-pic"
          />
          <h3 className="alias">{props.userName}</h3>
          <p className="username">{props.instaId}</p>
          <button onClick={props.onFollow}>Follow</button>
        </div>
      </article>
    </>
  );
};

export default ProfileCard;
