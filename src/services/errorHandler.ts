export interface IError {
  code: number;
  message: string;
}

export function errorHandler(err: String | void): IError {
  const response: IError = {
    code: 500,
    message:
      "There was an issue connecting to the server, please try again later",
  };

  switch (err) {
    case "incorrect_password":
      response.code = 401;
      response.message = "Invalid password";
      break;
    case "err_unauthorized":
      response.code = 401;
      response.message = "This credential is not yours";
    case "card_not_found":
      response.code = 404;
      response.message = "Invalid card ID";
      break;
    case "credential_not_found":
      response.code = 404;
      response.message = "Invalid credential ID";
      break;
    case "email_not_found":
      response.code = 404;
      response.message = "This email is not registered yet";
      break;
    case "network_not_found":
      response.code = 404;
      response.message = "Invalid network ID";
      break;
    case "notes_not_found":
      response.code = 404;
      response.message = "Invalid notes ID";
      break;
    case "email_in_use":
      response.code = 409;
      response.message = "This email is already in use";
      break;
    case "title_in_use":
      response.code = 409;
      response.message = "You have already used this title";
    default:
      return response;
  }
  return response;
}
