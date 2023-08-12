var config = require("./sqlConfig");
var sql = require("mssql");
const nodemailer = require("nodemailer");

const addContactUs = (req, res) => {
  sql.connect(config, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log(req.body);
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        res.status(400).json({ message: "Invalid Data" });
      } else {
        var requ = new sql.Request();
        requ.query(
          `INSERT INTO contactUs (name, email, message)
        VALUES ('${name}', '${email}', '${message}');`,
          function (er, result) {
            if (er) {
              console.log(er);
            } else {
              sendEmail(email, name, message);
              res.status(200).json({ message: "Successfully Added" });
            }
          }
        );
      }
    }
  });
};

const sendEmail = function (email, name, message) {
  try {
    // const {host,port,username,password}=data.dataValues
    let mailTransporter = nodemailer.createTransport({
      host: "smtp.ionos.com",
      // host: 'smtp.ionos.com',
      port: 587,
      // port: 587,
      secure: false,
      maxMessages: "infinity",
      pool: true,
      auth: {
        // user: "wajahat.commtel@gmail.com",
        user: "threat.intelligence@commtel.pk",
        // pass: "Waja123!@#",
        pass: "ASDm_p3alsk132k3mslmm312",
      },
    });
    //   var email = JSON.parse(req.body.emails)
    var emailFrom = "wajahat.ahmed@commtel.ae";

    //   var email = JSON.parse(req.body.emails)
    //   var emailFrom = 'threat.intelligence@commtel.pk'
    var toBcc = [
      "wajahatahmedwajahat@gmail.com",
      "infinixhot9luckyone@gmail.com",
      "mumtaz4203271@cloud.neduet.edu.pk",
      "ahmed4201750@cloud.netuet.edu.pk",
      "ahmed4202412@cloud.neduet.edu.pk",
      "tariq4200135@cloud.neduet.edu.pk",
    ];

    var subjects = "X-Secure Alert ";
    //   var reportingType = email.reportingType

    const mailoptions = {
      from: emailFrom,
      bcc: toBcc,
      subject: subjects,
      html: `<html><body>Dear X-Secure Management,<br/><br/>${name.toUpperCase()} contacted you with email ${email} <br/> Message is, <b><i>${message}</i></b> <br/><br/>Regards,<br/><b>X-Secure Portal</b><br/> <img src="cid:unique@kreata.ee" width="15%" style="margin-left:-23px !important;"/>`,
      attachments: [
        {
          filename: "xsecure.png",
          path: "assets/xsecure.png",
          cid: "unique@kreata.ee", //same cid value as in the html img src
        },
      ],
    };
    // <img src="../assets/images/commtel_signature.png" />
    mailTransporter.sendMail(mailoptions, function (err, info) {
      if (err) {
        console.log(err);
        // return next(err)
        // res.status(400).json({ message: "Email Could Not Sent", error: err})
      } else {
        let response = {
          message: "Successful",
        };
        console.log(response);
        //   res.status(200).json(response);
      }
    });
  } catch (error) {
    // return next(error)
    console.log(error);
    //   res.status(400).send("Could Not Sent");
  }
};

module.exports = { addContactUs };
