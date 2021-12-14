module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6ef217ca45ee10489e01bc9bd2a9ef18'),
  },
});
