import * as Utils from '../utils/userInfoUtils.js'

let userInfo = {
    firstName: 'Abdellah',
    lastName: 'El Azraoui',
    phoneNumber: '+212762385994',
    email: 'elazraouiabdellah@gmail.com',
    address: 'Hay Salam Av Dcheira Nr 92 Code Postal 73000'
}

export const getUserInfo = (req, res) => {
    console.log(req.body)
    res.status(200)
        .json({
            status: true,
            data: userInfo
        })
}

export const setUserInfo = async (req, res) => {
    try {
        userInfo = await Utils.saveUserInfo(req, userInfo)
    }
    catch (err){
        return res.status(200)
            .json({
                status: true,
                data: userInfo
        })
    }
    return res.status(201)
        .json({
            status: true,
            data: userInfo
    })
}

export const updateUserInfo = (req, res) => {
    res.status(200)
        .json({
            status: true,
            data: userInfo
        })
}

export const deleteUserInfo = (req, res) => {
    console.log(`remove ${req.params.id}`)
    res.status(200)
        .json({
            status: true,
            data: userInfo
        })
}
