/* -------------------------------------------------------------------------- */
/*                                 never type                                 */
/* -------------------------------------------------------------------------- */

function genError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  //무한루프: while(true){}
}

genError("an error occurred!", 500);
