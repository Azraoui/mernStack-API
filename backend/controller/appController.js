import * as Utils from '../utils/userInfoUtils.js'
import asyncHandler from 'express-async-handler'

let userInfo = {
    firstName: 'Abdellah',
    lastName: 'El Azraoui',
    phoneNumber: '+212762385994',
    email: 'elazraouiabdellah@gmail.com',
    address: 'Hay Salam Av Dcheira Nr 92 Code Postal 73000'
}

export const getUserInfo = asyncHandler(async (req, res) => {
    console.log(req.body)
    res.status(200)
        .json({
            status: true,
            data: userInfo
    })
})

export const setUserInfo = asyncHandler( async (req, res) => {
    try {
        userInfo = await Utils.saveUserInfo(req, userInfo)
    }
    catch (err){
    return res.status(400)
            .json({
                status: false,
                error: err
            })
    }
    return res.status(201)
        .json({
            status: true,
            data: userInfo
    })
})

export const updateUserInfo = asyncHandler( async (req, res) => {
    res.status(200)
        .json({
            status: true,
            data: userInfo
        })
})

export const deleteUserInfo = asyncHandler( async (req, res) => {
    console.log(`remove ${req.params.id}`)
    res.status(200)
        .json({
            status: true,
            data: userInfo
        })
})
