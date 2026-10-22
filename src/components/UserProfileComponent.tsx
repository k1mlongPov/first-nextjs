export const UserProfileComponent = () => {
  const name: string = "Smilling Ahh";
  const image: string =
    "https://i.pinimg.com/1200x/a2/14/3b/a2143b1c45593137cb58bff43a9ac04b.jpg";
  const position: string = "Smilling and Happy Ahh";

  const age: number = 67;
  return (
    <section>
      <img src={image} alt="profile" />
      <h1>Name : {name}</h1>
      <p>Age : {age} Years old.</p>
      <h4>Position: {position} </h4>
    </section>
  );
};
