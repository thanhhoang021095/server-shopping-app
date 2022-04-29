const jwtHelper = require('../common/jwtHelper');


export const authenticateToken = async (
  req: any,
  res: any,
  next: any
) => {
  try {
    const authHeader = req.headers['authorization'];
    const tokenCode = authHeader && authHeader.split(' ')[1];
    
    if (tokenCode == null) return res.status(403).send('No token provided');
    
    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
    const decoded = await jwtHelper.verifyAccessToken(tokenCode, ACCESS_TOKEN_SECRET);
    
    req.jwtDecoded = decoded;
    next();
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
}

export const protectedRoute = (req: any, res: any, next: any) => {
  if (req.jwtDecoded) {
    next();
    return ;
  }
  res.status(401).send('Unauthorized');
  return;
}

export const checkRoleUser = (req: any, res: any, next: any) => {
  const dataJwt = req.jwtDecoded.data;
  if (dataJwt?.role === "admin") {
    next();
    return;
  }
  res.status(403).send(`You don't have permission`);
  return
}