require('dotenv').config()

const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')

const bucket = process.env.S3_BUCKET
const region = process.env.AWS_BUCKET_REGION
const accessKey = process.env.AWS_SECRET_ACCESS_KEY
const accessId = process.env.AWS_ACCESS_KEY_ID

const s3 = new S3({
    region,
    accessId,
    accessKey
})

const uploadFile = file => {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucket,
        Body: fileStream,
        Key: file.filename
    }

    return s3.upload(uploadParams).promise()
}

exports.uploadFile = uploadFile

const getFileStream = fileKey => {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucket
    }

    return s3.getObject(downloadParams).createReadStream()
}

exports.getFileStream = getFileStream
