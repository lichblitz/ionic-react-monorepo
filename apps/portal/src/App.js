import { useCallback } from "react";
import { Button, Label } from "@everis/ui";

console.log(Button);
const App = () => {
  const handleOnClick = useCallback((event) => {
    alert(event.target);
  });
  return (
    <div className="App">
      <Label text="Hi!" />
      <Button color="primary" onClick={handleOnClick}>
        Hola
      </Button>
    </div>
  );
};

export default App;
