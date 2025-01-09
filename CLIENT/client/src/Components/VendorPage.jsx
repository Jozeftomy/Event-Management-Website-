import React, { useState } from "react";
import './VendorPage.css';
const VendorPage = () => {
  // States to store input values
  const [name, setName] = useState(""); // Vendor's name
  const [photo, setPhoto] = useState(null); // Vendor's photo file
  const [selectedCategories, setSelectedCategories] = useState([]); // Selected categories
  const [services, setServices] = useState([{ name: "", price: "" }]); // List of services

  // Function to handle changes in the services fields
  const handleServiceChange = (index, field, value) => {
    // Copy the current services array
    const updatedServices = [...services];
    // Update the specific field (name or price) of the service at the given index
    updatedServices[index][field] = value;
    setServices(updatedServices); // Update the state
  };

  // Function to add a new service field
  const handleAddService = () => {
    setServices([...services, { name: "", price: "" }]); // Add an empty service object
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    // Combine all the input values into an object
    const vendorData = {
      name,
      photo,
      selectedCategories,
      services,
    };
    console.log("Vendor Data Submitted:", vendorData); // Log the data to the console
    alert("Vendor registration submitted! Check the console for details."); // Show a success message
  };

  return (
    <div className="vendor-page">
      <h1>Vendor Registration</h1>
      <form onSubmit={handleSubmit} className="vendor-form">
        {/* Vendor Name */}
        <div className="form-group">
          <label>Vendor Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state
            required
          />
        </div>

        {/* Vendor Photo */}
        <div className="form-group">
          <label>Vendor Photo:</label>
          <input
            type="file"
            accept="image/*" // Restrict to image files only
            onChange={(e) => setPhoto(e.target.files[0])} // Update photo state
            required
          />
        </div>

        {/* Categories Selection */}
        <div className="form-group">
          <label>Categories:</label>
          <div className="categories">
            {/* Render checkboxes for each category */}
            {["Food", "Decoration", "Photography", "Rental Cars"].map(
              (category, index) => (
                <div key={index} className="checkbox-group">
                  <input
                    type="checkbox"
                    id={category}
                    value={category}
                    onChange={(e) => {
                      // Add or remove category from selectedCategories
                      if (e.target.checked) {
                        setSelectedCategories([...selectedCategories, category]);
                      } else {
                        setSelectedCategories(
                          selectedCategories.filter((c) => c !== category)
                        );
                      }
                    }}
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              )
            )}
          </div>
        </div>

        {/* Services Section */}
        <div className="form-group">
          <label>Services:</label>
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <input
                type="text"
                placeholder="Service Name"
                value={service.name}
                onChange={(e) =>
                  handleServiceChange(index, "name", e.target.value) // Update service name
                }
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={service.price}
                onChange={(e) =>
                  handleServiceChange(index, "price", e.target.value) // Update service price
                }
                required
              />
            </div>
          ))}
          {/* Button to add more services */}
          <button
            type="button"
            onClick={handleAddService}
            style={{ marginTop: "10px" }}
          >
            Add More Services
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ marginTop: "20px" }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default VendorPage;
