// проверка на ввод имени
const validateFullName = (fullName) => {
    // проверка на наличие хотя бы двух слов кириллицей
    const regex = /^[А-Яа-яЁё]+\s[А-Яа-яЁё]+(\s[А-Яа-яЁё]+)?$/;
  
    return regex.test(fullName);
  };  
  
  const validatePhoneNumber = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    return /^(?:\+7|8)\d{10}$/.test(cleaned);
  };
    
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  const validateFutureDate = (date) => {
    const selectedDate = new Date(date);
    const currentDate = new Date();

    selectedDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
  
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
  
    return selectedDate >= nextDay;
  };

  const validateDateOfBirth = (date) => {
    const selectedDate = new Date(date);
    const currentDate = new Date();

    selectedDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
  
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);

    // Проверка, что выбранная дата не является будущей датой
    if (selectedDate >= nextDay) {
      return { isValid: false, errorMessage: 'Дата рождения не может быть в будущем' };
    }
  
    // Если дата прошла проверку, возвращаем объект с isValid: true
    return { isValid: true, errorMessage: '' };
  }
  
export {
    validateFullName,
    validatePhoneNumber,
    validateEmail,
    validateFutureDate,
    validateDateOfBirth
}