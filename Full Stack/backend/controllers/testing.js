const express = require('express')
const userSchema = require('../models/loginUser');
const upload = require('../utils/multer')
const Image = require('../models/image')
// const testing = async (req,res) => {
//     try{
//         console.log(req.body);
//         await userSchema.create(req.body);
//         return res.status(200).json({"msg":"data printed"});
//     }
//     catch(err){
//         console.error(err);
//     }
// } 

// const getting = async(req,res) => {
//     const fun = req.params;
//     console.log(req.params);
//     try{
//         const result = await userSchema.find({});
//         if(result){
//             return res.status(200).json(result);
//         }
//         else{
//             return res.status(400).json({"msg":"data not there"});
//         }
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

const uploading = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const fileName = req.file.filename;
        console.log(fileName)

        try {
            console.log(req.file);
            const path = req.file.path;
            const newImage = new Image({ imageName: "/images/multerPractice/" + fileName });
            await newImage.save();

            console.log("Saved file name:", fileName);
            return res.status(200).json({ message: "Image uploaded", fileName });
        } catch (dbError) {
            return res.status(500).json({ message: "Database error", error: dbError.message });
        }
    });
};
// exports.testing = testing;
// exports.getting = getting;
exports.uploading = uploading;