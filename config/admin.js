module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '507339755c428a234fde6221ee5ef413'),
  },
});
