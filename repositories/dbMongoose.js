import mongoose from "mongoose";

async function connect() {
  const uri = "";

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default { connect };
