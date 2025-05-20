import Sample from "./Sample"
function App() {
  const myName="Shafiqa"
  const myAge=20
  const myHobby="coding"


  return (
    <>
      <h1>Hello world</h1>
      <p>Hi there.How are you all</p>
      <Sample myName={myName} myAge={myAge} myHobby={myHobby}/>
    </>
  )
}

export default App
