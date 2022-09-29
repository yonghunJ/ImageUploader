import React from "react";
import AWS from "aws-sdk"

const ImageUpload = ({ setImageLink }) => {
  AWS.config.region = 'us-east-1'; // Region
  AWS.config.update({
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: process.env.REACT_APP_IdentityPoolId,
    })
  })

  const handleFileInput = e => {
    const file = e.target.files[0]

    const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: 'heyboss-component-library-images',
      Key:  file.name,
      Body: file,
      ContentType: file?.type,
    },
  })
  const promise = upload.promise()

  promise.then(
    function (data) {
      alert("이미지 업로드에 성공했습니다.");
      setImageLink(file.name)
      
    },
    function (err) {
      return alert("오류가 발생했습니다: ", err.message)
    }
  )
}

  return (
    <>
      <input type="file" id="upload" className="image-upload" onChange = {handleFileInput} />
      <label htmlFor="upload" className="image-upload-wrapper"></label>
    </>
  )
}

export default ImageUpload;
