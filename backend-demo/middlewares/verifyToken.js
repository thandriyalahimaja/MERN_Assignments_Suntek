import jwt from 'jsonwebtoken';
export function verifyToken(req, res, next) {
    //token verification logic
    //1.get the token from req
    let signedToken=req.cookies.token;//{token:""}
    if(!signedToken){
        return res.status(401).json({message:"please login first"});
    }
    //npm i cookie-parser
    //2.verify the token(decode)
    let decodedToken=jwt.verify(signedToken,'secretkey48');
    console.log("decoded token",decodedToken);
    next();

}
