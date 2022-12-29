//* validate email
export const validateEmail = (value: string): null | string => {
  const validRegex: RegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (validRegex.test(value)) return null;
  else return 'Invalid email';
};

//* validate password
export const validatePassword = (value: string): null | string => {
  //* minimum 8 eight characters: digit, symbol, uppercase, lowercase
  const validRegex: RegExp =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

  if (validRegex.test(value)) return null;
  else
    return 'Password must include minimum 8 characters: digit, symbol, uppercase, lowercase';
};

//* validate is empty
export const validateIsEmpty = (value: string): null | string => {
  if (value.length === 0) return 'Required'
  else return null
}

//* validate email and is empty
export const validateEmailAndIsEmpty = (value: string): null | string => validateIsEmpty(value) || validateEmail(value)
