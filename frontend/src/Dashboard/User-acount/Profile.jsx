import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';
import uploadImageToCloudinary from '../../../utils/uploadCloudinary';
import { authContext } from '../../context/Authcontext';

const Profile = () => {
  const { user, token, dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: null,
    gender: '',
    role: 'patient',
    bloodType: '',
    age: '',
  });

  const [previewSrc, setPreviewSrc] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [updatingProfile, setUpdatingProfile] = useState(false);

  // Load user data on component mount
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        password: '',
        photo: user.photo || null,
        gender: user.gender || '',
        role: user.role || 'patient',
        bloodType: user.bloodType || '',
        age: user.age || '',
      });
      setPreviewSrc(user.photo || null);
    }
  }, [user]);

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageUploading(true);
      try {
        const data = await uploadImageToCloudinary(file);
        setFormData((prev) => ({ ...prev, photo: data.url }));
        setPreviewSrc(data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setImageUploading(false);
      }
    }
  };

  // Handle form submission
  const submitHandler = async (event) => {
    event.preventDefault();
    setUpdatingProfile(true);

    
    
    try {
      const res = await fetch(`${BASE_URL}/api/v1/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const responseData = await res.json();
      if (!res.ok) {
        throw new Error(responseData.message);
      }

      // Update user context
      dispatch({ type: 'UPDATE_USER', payload: responseData.updatedUser });

      navigate('/users/profile/me');
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setUpdatingProfile(false);
    }
  };

  return (
    <div className="mt-5 rounded-ful">
      <form onSubmit={submitHandler} className="md:p-4 md:bg-slate-300 rounded-md">
        <div className="mb-5 md:mt-3">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            required
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] rounded-md"
          />
        </div>

        <div className="mb-5">
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={formData.email}
            required
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] rounded-md"
          />
        </div>

        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            required
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] rounded-md"
          />
        </div>

        <div className="mb-5">
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={formData.age}
            required
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] rounded-md"
          />
        </div>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Blood Type"
            name="bloodType"
            value={formData.bloodType}
            required
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] rounded-md"
          />
        </div>

        <div className="flex md:flex-row flex-col md:justify-between items-center">
          {/* Profile Picture Preview */}
          {previewSrc && (
            <figure className="w-[50px] h-[50px] rounded-full border-2 border-solid border-sky-600 flex items-center justify-center">
              <img className="w-[50px] h-[50px] rounded-full" src={previewSrc} alt="Profile" />
            </figure>
          )}

          {/* File Upload */}
          <div className="relative w-[120px] h-[40px] mt-3 md:mt-0">
            <input
              type="file"
              name="photo"
              id="customfile"
              onChange={handleFileInputChange}
              accept=".jpg, .png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customfile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.7rem] py-1 text-[15px] bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg cursor-pointer"
            >
              {imageUploading ? "Uploading..." : "Upload Picture"}
            </label>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between mt-5">
          <label className="text-slate-900 font-bold text-[16px] leading-7">
            Gender
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              className="text-gray-600 ml-2 rounded-md font-semibold text-[15px] px-4 py-3 focus:outline-none"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
        </div>

        {/* Submit Button with Loader */}
        <div className="flex justify-center md:mt-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white text-[20px] md:w-[400px] py-2 px-32 rounded-[10px] font-[600] flex items-center justify-center"
            disabled={updatingProfile}
          >
            {updatingProfile ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Updating...
              </>
            ) : (
              "Update"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
