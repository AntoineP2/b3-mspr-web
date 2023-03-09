import * as jose from "jose";
const config = useRuntimeConfig();

export default async function isAuth(token) {
  try {
    const key = config.publicKey;
    const algorithm = "RS256";
    const PublicKey = await jose.importSPKI(key, algorithm);
    await jose.jwtVerify(token, PublicKey);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
