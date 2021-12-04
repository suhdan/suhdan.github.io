import { h } from "preact";
import { useState } from "preact/hooks";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
import Contact from "./components/Contact";

import "~/assets/base.css";
import "./style.css";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("nav");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeScreen = (screenName) => {
    setCurrentScreen(screenName);
    setIsModalOpen(screenName !== "nav");
  };

  return (
    <main>
      <Nav onClick={changeScreen} />

      <Modal visible={isModalOpen}>
        {currentScreen === "contact" && (
          <Contact onExit={() => changeScreen("nav")} />
        )}
      </Modal>

      <p class="copyright">&copy;dansuh</p>
    </main>
  );
};

export default App;
