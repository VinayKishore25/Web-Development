const express = require('express');
const vedaSchema = require('../models/VedaUsers');


const getUser = async (req, res) => {
    try {
        const result = await vedaSchema.aggregate([
            {
                $group : {
                    _id : "$userCollege",
                    Count : {
                        $sum : 1
                    }
                }
            }
        ])
        return res.status(200).json(result)
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.getUser = getUser;