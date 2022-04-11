class PasswordHash {
  async hash(password) {
    console.error(password);
    throw new Error('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = PasswordHash;
