const registerUser = (req, res) => {
  try {
    const { name, email, password, dob } = req.body;
    const newUser = {
      name,
      email,
      password,
      dob,
    };
    return res.status(201).json({
      message: "User is created",
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "User is not created",
      error: error.message,
    });
  }
};

const loggedInUser = (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === "arafat@gmail.com" && password === "12345678") {
      res.status(201).json({
        message: "Your are logged-in",
      });
    } else {
      res.status(401).json({
        message: "Email and password is wrong",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Creation is failed",
      error: error.message,
    });
  }
};

module.exports = { registerUser, loggedInUser };
