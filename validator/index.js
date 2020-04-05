exports.userSignupValidator = (req, res, next) => {
  req.check('name', 'Name is required').notEmpty();
  req.check('email', 'Email must be between 3 and 32 characters')
  .isEmail().withMessage('Please provide a valid email')
  .isLength({
    min: 4,
    max: 32
  });
  req.check('password', 'Password is Required').notEmpty()
  .isLength({ min: 6 })
  .withMessage('Password must contain at least 6 characters')
  .matches(/\d/)
  .withMessage('Password must contain a number')

  const errors = req.validationErrors()
  if(errors) {
    const firstError = errors.map( error => error.msg)[0]
    return res.status(400).json({ error: firstError });
  }
  next();
}