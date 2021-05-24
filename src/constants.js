module.exports = {
  mongoURI: `mongodb+srv://AdminUser:${process.env.DATABASE_PASSWORD}@cluster0.svwld.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
  secretOrKey: "secret",
};
