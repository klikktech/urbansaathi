import { NextRequest, NextResponse } from 'next/server';
import { CreateAccommodationRequest } from "@/entity/Accommodation";
import dbConnect from '@/lib/mongodb.js';
import AccommodationModel from '@/models/Accommodation';

const saveAccommodation = async (body: any) => {
  await dbConnect();
  
  const accommodationData = {
    type: body.type,
    washroom: body.washroom,
    rent: parseInt(body.rent),
    genderPreference: body.genderPreference,
    laundryUnit: body.laundryUnit,
    community: body.community,
    address: {
      street: body.street,
      city: body.city,
      state: body.state,
      pincode: body.pincode,
      landmark: body.landmark || ''
    },
    description: body.description,
    ownerId: 'temp-user-id', // TODO: Get from authentication
    availability: 'available' as const,
    amenities: body.amenities || [],
    images: body.images || [],
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  const accommodation = new AccommodationModel(accommodationData);
  await accommodation.save();
  return accommodation;
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateAccommodationRequest = await request.json();
    console.log('Received accommodation data:', body);
    
    const result = await saveAccommodation(body);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Accommodation created successfully',
      data: result 
    });
  } catch (error) {
    console.error('Error creating accommodation:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create accommodation' },
      { status: 500 }
    );
  }
}