"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Input from "@/components/atoms/Input";
import Select from "@/components/atoms/Select";
import ImageUpload from "@/components/atoms/ImageUpload";

export default function AccommodationListing() {
  const [formData, setFormData] = useState({
    type: "private",
    washroom: "attached",
    rent: "",
    genderPreference: "any",
    laundryUnit: "indoor",
    community: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    description: "",
    images: [] as File[],
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImagesChange = (images: File[]) => {
    setFormData((prev) => ({ ...prev, images }));
  };

  const handleAddressSelect = (address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
  }) => {
    setFormData((prev) => ({
      ...prev,
      street: address.street,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/accommodation", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      toast.success("Listing posted successfully");
    } else {
      toast.error("Failed to post listing");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="w-full max-w-5xl mb-8 text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-2">
          Post a New Listing
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Follow the steps to create your listing. Ensure all details are
          accurate and complete.
        </p>
      </header>

      {/* Form Card */}
      <div className="w-full max-w-5xl bg-gray-800 rounded-xl shadow-lg p-5 sm:p-8 mb-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Image Upload Section */}
          <ImageUpload
            images={formData.images}
            onImagesChange={handleImagesChange}
            maxFiles={10}
            maxSize={10}
          />

          {/* Basic Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Type</label>
              <Select
                options={[
                  { value: "private", label: "Private" },
                  { value: "shared", label: "Shared" },
                ]}
                value={formData.type}
                onChange={(value) => handleChange("type", value)}
                placeholder="Select type"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Washroom
              </label>
              <Select
                options={[
                  { value: "attached", label: "Attached" },
                  { value: "shared", label: "Shared" },
                ]}
                value={formData.washroom}
                onChange={(value) => handleChange("washroom", value)}
                placeholder="Select washroom type"
              />
            </div>
          </div>

          {/* Rent & Gender */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Rent ($)
              </label>
              <Input
                placeholder="Enter monthly rent"
                value={formData.rent}
                onChange={(value) => handleChange("rent", value)}
                className="bg-gray-900 border-gray-700 text-gray-100 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Gender Preference
              </label>
              <Select
                options={[
                  { value: "any", label: "Any" },
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
                value={formData.genderPreference}
                onChange={(value) => handleChange("genderPreference", value)}
                placeholder="Select gender preference"
              />
            </div>
          </div>

          {/* Laundry & Community */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Laundry Unit
              </label>
              <Select
                options={[
                  { value: "indoor", label: "Indoor" },
                  { value: "outdoor", label: "Outdoor" },
                ]}
                value={formData.laundryUnit}
                onChange={(value) => handleChange("laundryUnit", value)}
                placeholder="Select laundry type"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Community
              </label>
              <Input
                placeholder="Enter community name"
                value={formData.community}
                onChange={(value) => handleChange("community", value)}
                className="bg-gray-900 border-gray-700 text-gray-100 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Address Autocomplete */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Address</label>
            <p className="text-xs text-gray-400 mt-1">
              Select from suggestions to auto-fill address fields
            </p>
          </div>

          {/* Address Details (Auto-filled) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Street</label>
              <Input
                placeholder="Street address"
                value={formData.street}
                onChange={(value) => handleChange("street", value)}
                className="bg-gray-900 border-gray-700 text-gray-100 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">City</label>
              <Input
                placeholder="City"
                value={formData.city}
                onChange={(value) => handleChange("city", value)}
                className="bg-gray-900 border-gray-700 text-gray-100 rounded-lg"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-300 mb-1">State</label>
              <Input
                placeholder="State"
                value={formData.state}
                onChange={(value) => handleChange("state", value)}
                className="bg-gray-900 border-gray-700 text-gray-100 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Zip Code
              </label>
              <Input
                placeholder="Zip code"
                value={formData.pincode}
                onChange={(value) => handleChange("pincode", value)}
                className="bg-gray-900 border-gray-700 text-gray-100 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Provide a detailed description of your accommodation"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 h-24 resize-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center sm:justify-end">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all w-full sm:w-auto"
            >
              Post Listing
            </button>
          </div>
        </form>
      </div>

      {/* Tips Section */}
      <div className="w-full max-w-5xl bg-gray-800 rounded-xl shadow-lg p-5 sm:p-6 mb-8">
        <h3 className="text-gray-200 font-semibold mb-3 text-center sm:text-left">
          Tips for a Great Listing
        </h3>
        <ul className="text-gray-400 text-sm space-y-1 text-center sm:text-left">
          <li>• Use clear and concise language.</li>
          <li>• Provide high-quality images.</li>
          <li>• Be honest about the condition and features.</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-5xl text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
        <div className="flex flex-col items-center space-y-2">
          <p className="flex items-center gap-2 text-xs sm:text-sm">
            <span>🛡️</span> Your security is our priority. All transactions are
            secured.
          </p>
          <div className="flex gap-4 text-gray-400 text-lg">
            <a href="#">🌐</a>
            <a href="#">🐦</a>
            <a href="#">💼</a>
          </div>
          <p className="text-xs text-gray-500">
            UrbanSaathi © 2025. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
