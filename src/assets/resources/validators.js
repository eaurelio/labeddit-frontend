// Validador de senhas = Regex. utilise o passwordValidator(senha).test para obter true ou false
export const passwordValidator = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

// Validador de email
export const emailValidator = (email) => {
  let user = email.substring(0, email.indexOf("@"));
  let domain = email.substring(email.indexOf("@")+ 1, email.length);
  
  if ((user.length >=1) &&
      (domain.length >=3) &&
      (user.search("@") ==-1) &&
      (domain.search("@") ==-1) &&
      (user.search(" ") ==-1) &&
      (domain.search(" ") ==-1) &&
      (domain.search(".") !=-1) &&
      (domain.indexOf(".") >=1)&&
      (domain.lastIndexOf(".") < domain.length - 1)) {
        return true
    } else return false
}
