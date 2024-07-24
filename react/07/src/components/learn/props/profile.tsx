import ProfileCard from "../../ProfileCard";

const App = () => {
  const isLoggined = true;
  return (
    <>
      <ProfileCard
        backgroundImage={
          "https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        userImage={
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        userName="Jonnas Ramos"
        instaId="@sallytheramos"
        onFollow={() => alert("followed!")}
        isLoggined={isLoggined}
      />
    </>
  );
};
export default App;
