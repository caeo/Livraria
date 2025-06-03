import mongoose from "mongoose";

async function connect() {
  const uri = "";

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("Erro ao conectar com mongoDB", error);
  }
}

export default { connect };
