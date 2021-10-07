const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  /*mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'*/
  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb+srv://' + (process.env.IP || 'mern') + ':' + (process.env.MONGO_PORT || 'mern@cluster0.4wy3n.mongodb.net') + '/mernSetup?retryWrites=true&w=majority',
  stripe_connect_test_client_id: 'YOUR_stripe_connect_test_client',
  stripe_test_secret_key: 'YOUR_stripe_test_secret_key',
  stripe_test_api_key: 'YOUR_stripe_test_api_key' 
}

export default config
