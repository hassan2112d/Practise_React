import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the entered values
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    // Save the entered values in local storage
    const userData = { name, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Display the modal with the entered values
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Close the modal, reset the form values, and hide the modal
    setIsModalOpen(false);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Sign Up
        </button>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Entered Values</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
