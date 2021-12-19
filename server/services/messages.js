export default {
  validateMessage: (message) => {
    const data = {
      firstName: message.firstName.trim(),
      lastName: message.lastName.trim(),
      zipCode: message.zipCode.trim(),
      phone: message.phone.trim().replaceAll(" ", ""),
      email: message.email.trim().toLowerCase(),
      subject: message.subject.trim(),
      message: message.message.trim(),
    };
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const errors = [];
    if (!data.firstName) {
      errors.push("firstName");
    }
    if (!data.zipCode) {
      errors.push("zipCode");
    }
    if (!data.email || emailRegex.test(data.email)) {
      errors.push("email");
    }
    if (!data.subject) {
      errors.push("subject");
    }
    if (!data.message) {
      errors.push("message");
    }
    return errors;
  },
};
