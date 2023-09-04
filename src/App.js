import AthNavigator from "./AthNavigator";
import { MainProvider } from "./MainContext";
import Test from "./screens/Test";

function App() {
  return (
    <div className="App">
      <MainProvider>
        <AthNavigator />
      </MainProvider>
    </div>
  );
}

export default App;
