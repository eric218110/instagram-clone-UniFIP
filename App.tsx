import React from "react";
import { SafeAreaView } from "react-native";
import Feed from "./src/screens/feeds";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <SafeAreaView>
        <Feed />
      </SafeAreaView>
    </React.Fragment>
  );
};

export default App;