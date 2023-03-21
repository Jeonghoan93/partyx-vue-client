const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    isHost: {
      type: Boolean,
      required: false,
    },
    location: {
      type: String,
      required: true,
    },
    phoneNumber: String,
    bio: String,
    social_accounts: {
      facebook: String,
      twitter: String,
      instagram: String,
      linkedin: String,
    },
    preferences: {
      currency: String,
      language: String,
    },
    googleEmail: String,
    profileImage: String,
    isVerifiedPhone: {
      type: Boolean,
      default: false,
    },
    isVerifiedEmail: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    cardType: String,
    cardNumber: String,
    preferredCurrency: String,
    bankDetails: {
      accountHolderName: String,
      accountNumber: String,
      bankName: String,
      routingNumber: String,
    },
    otherPaymentMethods: {
      paypal: String,
      venmo: String,
      cashApp: String,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.getSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
