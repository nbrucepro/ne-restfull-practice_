import React, { useState } from 'react';

function ModalDialog({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }
  const [formData, setFormData] = useState({
    chassisNumber: '',
    company: '',
    price: '',
    plateNumber: '',
    model: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="fixed  inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-400 p-8 shadow-lg rounded-lg w-100">
        {/* {children} */}

    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="chassisNumber" className="block mb-2 text-lg text-gray-700">
          Chassis Number
        </label>
        <input
          type="text"
          id="chassisNumber"
          name="chassisNumber"
          value={formData.chassisNumber}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="company" className="block mb-2 text-lg text-gray-700">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block mb-2 text-lg text-gray-700">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="plateNumber" className="block mb-2 text-lg text-gray-700">
          Plate Number
        </label>
        <input
          type="text"
          id="plateNumber"
          name="plateNumber"
          value={formData.plateNumber}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="model" className="block mb-2 text-lg text-gray-700">
          Model
        </label>
        <input
          type="text"
          id="model"
          name="model"
          value={formData.model}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 border rounded-md bg-blue-500 text-white text-lg font-medium hover:bg-blue-700"
        >
        Submit
        </button>
        </form>       
        <button
          className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ModalDialog;
