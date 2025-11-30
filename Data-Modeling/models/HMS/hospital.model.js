import mongoose from "mongoose";
import { addressSchema } from "./patient.model";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      ref: true,
    },
    addressLine1: {
      type: addressSchema,
      required: true,
    },
    addressLine2: {
      type: addressSchema,
    },
    specializedIn: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
