import * as CryptoJS from 'crypto-js';

const config = useRuntimeConfig();
// Ce fichier permet de crypter le mot de passe avant de l'envoyer au serveur
export default function encodePassword(password) {
  try {
    console.log(password)
    const key = config.publicKey;
    return CryptoJS.AES.encrypt(JSON.stringify(password), key).toString();
  } catch (e) {
    console.log(e);
  }
}