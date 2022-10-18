
export async function saveUserInfo(req, userInfo)
{
    return new Promise((resolve, reject) => {
        if (req.body.address != null && req.body.address != undefined)
        {
            userInfo.address = req.body.address
            return resolve(userInfo)
        }
        else {
            return reject("Empty paramters")
        }
    });
}