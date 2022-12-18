const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema.Types;
// const validator = require("validator");

const inputInfo = mongoose.Schema(
  {
    inputvalue: {
      type: String,
      
    },

   selectSection: {
      type: String,
      
    },

    identity: {
      type: String,
     
    },

    date:{
        type: String
    }
  },

  {
    timestamps: true,
  }
);

const inputInfoExports = mongoose.model(
  "InputInfo",
  inputInfo
);
module.exports = inputInfoExports;