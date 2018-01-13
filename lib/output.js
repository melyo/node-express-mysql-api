function success (data, msg, code){
  return {
    success: true,
    message: msg,
    data: data,
    code: code
  }
}

function error (err, msg, code){
  return {
    success: false,
    message: msg,
    error: err || null,
    code: code
  }
}

module.exports = {
  success: success,
  error: error
}
