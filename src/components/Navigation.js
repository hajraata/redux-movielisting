import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/navigation.css";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <div className="navigation-container">
      <ul className="navigation-list">
        <li className="navigation-item" onClick={() => navigate("/")}>
          Home
        </li>
        <li className="navigation-item" onClick={() => navigate("/favorites")}>
          Favorites
        </li>
      </ul>
    </div>
  );
}
