import React from 'react';
import './AdminDashboard.css'; // Import your custom CSS file
import { FaList, FaQuestion, FaPoll } from 'react-icons/fa'; // Import icons from react-icons

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <nav className="sidebar">
      <div className="company-name">Assessment Portal</div>
      <h6>Admin Dashboard</h6>
      <hr />
      <ul className="nav-list">
      <li>
            <a href="#">
              <FaList className="icon" />
              Category
            </a>
          </li>
          <li>
            <a href="#">
              <FaQuestion className="icon" />
              Quiz
            </a>
          </li>
          <li>
            <a href="#">
              <FaPoll className="icon" />
              Results
            </a>
          </li>
        </ul>
      </nav>
      <div className="content">
      <div className="card-container">
      <div className="card">
            <div className="card-icon">
              <FaList className="card-icon-inner" />
            </div>
            <h3>Category</h3>
            <p>Content related to categories.</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <FaQuestion className="card-icon-inner" />
            </div>
            <h3>Quiz</h3>
            <p>Content related to quizzes.</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <FaPoll className="card-icon-inner" />
            </div>
            <h3>Results</h3>
            <p>Content related to results.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
