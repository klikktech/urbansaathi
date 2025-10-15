import mongoose, {Schema } from 'mongoose';
import { Accommodation } from '@/entity/Accommodation';

const accommodationSchema = new Schema<Accommodation>({
  type: { type: String, enum: ['shared', 'private'], required: true },
  washroom: { type: String, enum: ['attached', 'shared'], required: true },
  rent: { type: Number, required: true },
  genderPreference: { type: String, enum: ['male', 'female', 'any'], required: true },
  laundryUnit: { type: String, enum: ['indoor', 'outdoor'], required: true },
  community: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    landmark: { type: String }
  },
  description: { type: String, required: true },
  amenities: [{ type: String }],
  images: [{ type: String }],
  ownerId: { type: String, required: true },
  availability: { type: String, enum: ['available', 'occupied', 'maintenance'], default: 'available' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Accommodation || mongoose.model<Accommodation>('Accommodation', accommodationSchema);
