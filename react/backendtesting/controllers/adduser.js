const express = require('express')

const AddUser = (req,res) => {
    res.status(200).json("api working");
}

exports.AddUser = AddUser;