const bcrypt = require("bcryptjs");
const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { secretOrKey } = require("../../constants");
const User = require("../../models/User");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

// const validateRegisterInput = ({ email, handle, password }) => {
//   const errors = [];

//   if (!email) {
//     errors.push("No email provided");
//   }

//   if (!handle) {
//     errors.push("No handle provided");
//   }

//   if (!password) {
//     errors.push("No password provided");
//   }

//   if (!/^\S+@\S+\.\S+$/.test(email)) {
//     errors.push("Not a valid email");
//   }

//   if (password.length < 8) {
//     errors.push("Password too short");
//   }

//   return {
//     errors,
//     isValid: errors.length === 0,
//   };
// };

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({
        email: "A user has already been registered with this address",
      });
    } else {
      const newUser = new User({
        handle: req.body.handle,
        email: req.body.email,
        password: req.body.password,
      });

      console.log(req);

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              const payload = { id: user.id, handle: user.handle };

              jwt.sign(
                payload,
                secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token,
                  });
                }
              );
            })
            .catch((err) => console.error(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        res.json({ msg: "Success" });
      } else {
        // And here:
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      handle: req.user.handle,
      email: req.user.email,
    });
  }
);

module.exports = router;
