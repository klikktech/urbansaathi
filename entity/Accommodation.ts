export interface Accommodation {
  _id?: string;
  
  // 1. Type - shared/private
  type: 'shared' | 'private';
  
  // 2. Washroom - attached/shared
  washroom: 'attached' | 'shared';
  
  // 3. Rent - amount in dollars
  rent: number;
  
  // 4. Gender preference - male/female/any
  genderPreference: 'male' | 'female' | 'any';
  
  // 5. Laundry unit - indoor/outdoor
  laundryUnit: 'indoor' | 'outdoor';
  
  // 6. Community - community name/type
  community: string;
  
  // 7. Address - full address details
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    landmark?: string;
  };
  
  // 8. Description - detailed description
  description: string;
  
  // 9. Additional fields for complete accommodation data
  amenities: string[];
  images: string[];
  ownerId: string;
  availability: 'available' | 'occupied' | 'maintenance';
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateAccommodationRequest {
  type: 'shared' | 'private';
  washroom: 'attached' | 'shared';
  rent: number;
  genderPreference: 'male' | 'female' | 'any';
  laundryUnit: 'indoor' | 'outdoor';
  community: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    landmark?: string;
  };
  description: string;
  amenities: string[];
  images: string[];
}