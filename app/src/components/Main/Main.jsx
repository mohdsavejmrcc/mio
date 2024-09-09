import React, { useState } from "react";
import "./Main.css"; // Custom CSS styles
import historyData from './historyData.json'

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pinnedEvents, setPinnedEvents] = useState([]);
  const [history, setHistory] = useState(historyData);
  const [activeSidebarTab, setActiveSidebarTab] = useState("history");
  const [searchInput, setSearchInput] = useState("");
  const [dropdownMenu, setDropdownMenu] = useState(null); // To track which menu is open

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePinEvent = (month, event) => {
    setPinnedEvents((prev) => [...prev, { month, event }]);
    setDropdownMenu(null); // Close menu after action
  };

  const handleDeleteEvent = (month, event) => {
    setHistory((prev) => ({
      ...prev,
      [month]: prev[month].filter((e) => e !== event),
    }));
    setDropdownMenu(null); // Close menu after action
  };

  const handleRemovePinned = (month, event) => {
    setPinnedEvents((prev) =>
      prev.filter((e) => e.month !== month || e.event !== event)
    );
  };

  const handleTabChange = (tab) => {
    setActiveSidebarTab(tab);
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSendClick = () => {
    if (searchInput.trim()) {
      const currentMonth = new Date().toLocaleString("default", {
        month: "long",
      });
      setHistory((prev) => ({
        ...prev,
        [currentMonth]: [...(prev[currentMonth] || []), searchInput],
      }));
      setSearchInput("");
    }
  };

  const handleDropdownClick = (month, event) => {
    setDropdownMenu({ month, event });
  };

  const handleDropdownAction = (action) => {
    if (action === "pin") {
      handlePinEvent(dropdownMenu.month, dropdownMenu.event);
    } else if (action === "delete") {
      handleDeleteEvent(dropdownMenu.month, dropdownMenu.event);
    }
    setDropdownMenu(null); // Close menu after action
  };

  return (
    <div className="container">
      <nav className="navbar">
        <img
          src="assets/mrcc-logo-without-tagline-larg-1.jpg"
          alt="Logo"
          className="logo"
        />
        <div className="nav-links">
          <div className="history-icon" onClick={toggleSidebar}>
            📜
          </div>
          <div className="user-icon">G</div>
        </div>
      </nav>

      <div className={`content ${isSidebarOpen ? "with-sidebar" : ""}`}>
        {isSidebarOpen && (
          <div className="sidebar">
            <div className="sidebar-tabs">
              <button
                className={`sidebar-tab ${
                  activeSidebarTab === "history" ? "active" : ""
                }`}
                onClick={() => handleTabChange("history")}
              >
                History
              </button>
              <span className="tab-divider">/</span>
              <button
                className={`sidebar-tab ${
                  activeSidebarTab === "pinned" ? "active" : ""
                }`}
                onClick={() => handleTabChange("pinned")}
              >
                Pinned
              </button>
            </div>

            {activeSidebarTab === "history" && (
              <div className="sidebar-section">
                <h2>History</h2>
                <div className="history-content">
                  {Object.keys(history).map((month) => (
                    <div key={month} className="history-month">
                      <h3>{month}</h3>
                      <ul>
                        {history[month].map((event, index) => (
                          <li key={index} className="history-item">
                            {event}
                            <button
                              className="btn more-btn"
                              onClick={() => handleDropdownClick(month, event)}
                            >
                              ...
                            </button>
                            {dropdownMenu &&
                              dropdownMenu.month === month &&
                              dropdownMenu.event === event && (
                                <div className="dropdown-menu">
                                  <button
                                    className="dropdown-item"
                                    onClick={() => handleDropdownAction("pin")}
                                  >
                                    Pin
                                  </button>
                                  <button
                                    className="dropdown-item"
                                    onClick={() =>
                                      handleDropdownAction("delete")
                                    }
                                  >
                                    Delete
                                  </button>
                                </div>
                              )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSidebarTab === "pinned" && (
              <div className="sidebar-section">
                <h2>Pinned</h2>
                <div className="pinned-content">
                  {pinnedEvents.length === 0 ? (
                    <p>No pinned events</p>
                  ) : (
                    pinnedEvents.map((item, index) => (
                      <div key={index} className="pinned-item">
                        {item.event}
                        <button
                          className="btn more-btn"
                          onClick={() =>
                            handleDropdownClick(item.month, item.event)
                          }
                        >
                          ...
                        </button>
                        {dropdownMenu &&
                          dropdownMenu.month === item.month &&
                          dropdownMenu.event === item.event && (
                            <div className="dropdown-menu">
                              <button
                                className="dropdown-item"
                                onClick={() =>
                                  handleRemovePinned(item.month, item.event)
                                }
                              >
                                Remove Pinned
                              </button>
                            </div>
                          )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="main-content">
          <div className="robot-image">
            <img src="assets/group-3895.png" alt="Robot" />
          </div>
          <div className="button-group">
            <button className="button gamification">
              Gamification in Learning
            </button>
            <button className="button assessment">Assessment Strategies</button>
            <button className="button create-module">
              Create Learning Module
            </button>
            <button className="button start-learning">Start My Learning</button>
            <button className="button critical-thinking">
              Critical Thinking
            </button>
            <button className="button self-directed">
              Self-Directed Learning
            </button>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search anything about Learning"
              value={searchInput}
              onChange={handleInputChange}
            />
            <button className="btn send-btn" onClick={handleSendClick}>
              Send
            </button>
          </div>
        </div>
      </div>

      {/* {!isSidebarOpen && (
        <div className="history-button" onClick={toggleSidebar}>
          History
        </div>
      )} */}
    </div>
  );
};

export default Main;
