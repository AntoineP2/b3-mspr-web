import * as CryptoJS from 'crypto-js';

const config = useRuntimeConfig();
// Ce fichier permet de décrypter le mot de passe
export default function decodePassword(passwordEncoded) {
  try {
    const key = config.publicKey;
    const decrypted = CryptoJS.AES.decrypt(passwordEncoded, key);
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  } catch (e) {
    console.log(e);
  }
}