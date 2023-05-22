function App() {
  //two tag so parenthesis is required
  return (
    <div>
      <h1>Hello World</h1>
      <Onetag />
      <Multitag />
    </div>
  );
}
function Onetag() {
  return <h1>Hello React.....!!!!</h1>; //one line html so parenthesis is optional
}

function Multitag() {
  //multilie html so parenthesis is required
  return (
    <h1>
      React lets you build user interfaces out of individual pieces called
      components. Create your own React components like Thumbnail, LikeButton,
      and Video. Then combine them into entire screens, pages, and apps.
    </h1>
  );
}

export default App;
