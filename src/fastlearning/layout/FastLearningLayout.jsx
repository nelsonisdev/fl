import { Sidebar } from "../components";

import "./layout.css";

export const FastLearningLayout = ({ children }) => {
  return (
    <>
      <Sidebar />

      <div 
        className="content animate__animated animate__fadeIn"
      >
        {children}
      </div>
    </>
  );
};
