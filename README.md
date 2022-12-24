# S3-bucket-demo
API to upload files, delete files and fetch file from S3 bucket

## Step1: Create .env file and add environment variables

- SERVER_URI = localhost
- PORT = 3000
- AWS_DEFAULT_REGION = Your aws region name where s3 bucket is created
- S3_BUCKET_PRIVATE = Your bucket name
- AWS_APP_USER_ACCESS_KEY = aws access key
- AWS_APP_USER_SECRET_ACCESS_KEY = aws secret access key

## Step2: Run following commands

```
npm i
npm run dev
```

## Step3: Test API in postman

  - ### Upload files
    - POST: localhost:3000/v1/assets/upload-files
    - Now add files in body -> form with any names
    - Call API and you can see files uploaded in s3 bucket
  - ### Delete files
    - POST: localhost:3000/v1/assets/delete-files
    - In body you can pass files paths you want to delete
      - ```
        {
          "filePaths":[
              "demo-upload/A.jpg",
              "demo-upload/B.jpg"
          ]
        }
        ```
    - Call API and you can see files deleted from S3 bucket
  - ### Fetch file
    - GET: localhost:3000/v1/assets/fetch-file
    - In query params you can pass file path
      - ```
        localhost:3000/v1/assets/fetch-file?filePath=demo-upload/A.jpg
        ```
    - Call API and you will get signed url from s3 bucket

