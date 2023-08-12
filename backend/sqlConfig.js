var config = {
  server: "DESKTOP-BFJANJ0",
  port: 1433, //update me
  trustServerCertificate: true,
  authentication: {
    type: "default",
    options: {
      userName: "sa", //update me SOC_PC6\Halleys
      password: "Commtel@0133",
    },
  },

  options: {
    // If you are on Microsoft Azure, you need encryption:
    encrypt: true,
    database: "ti_client_side",
    integratedSecurity: true,
    trustedConnection: true, //update me
  },
};

module.exports = config;
