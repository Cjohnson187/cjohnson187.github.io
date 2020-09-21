var formvalidator = new Validator("contactform");
formvalidator.addValidation("fname","req","Please provide your first name");
formvalidator.addValidation("lname","req","Please provide your last name");
formvalidator.addValidation("email","req","Please provide your", "email");
formvalidator.addValidation("email", "email", "please enter valid email");