import * as jose from "jose";
const config = useRuntimeConfig();
// Ce fichier permet de décoder le token
export default async function decodeToken(token) {
  try {
    const key = config.publicKey;
    const algorithm = "RS256";
    const PublicKey = await jose.importSPKI(key, algorithm);
    const { payload, protectedHeader } = await jose.jwtVerify(token, PublicKey);
    return payload;
  } catch (e) {
    console.log(e);
  }
}
