export const validate = (input, value) => {
  let errors = { ...formErrors };
  switch (input) {
    case "name":
      if (!value.trim()) errors.name = "Name is required";
      else delete errors.name;
      break;
    case "email":
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value))
        errors.email = "Invalid email address";
      else delete errors.email;
      break;
    case "phone_number":
      if (!/^\+?\d{10,15}$/.test(value))
        errors.phone_number = "Invalid phone number";
      else delete errors.phone_number;
      break;
    default:
      break;
  }
  setFormErrors(errors);
};
