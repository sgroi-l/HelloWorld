const cdk = require('@aws-cdk/core');
   const s3 = require('@aws-cdk/aws-s3');
   const s3deploy = require('@aws-cdk/aws-s3-deployment');

   class MyStack extends cdk.Stack {
     constructor(scope, id, props) {
       super(scope, id, props);

       // Creates an S3 bucket to host your site
       const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
         websiteIndexDocument: 'index.html',
         versioned: true
       });

       // Deploys your site to the S3 bucket
       new s3deploy.BucketDeployment(this, 'DeployWebsite', {
         sources: [s3deploy.Source.asset('index')],
         destinationBucket: websiteBucket,
       });
     }
   }

   module.exports = { HelloWorldStack: MyStack };