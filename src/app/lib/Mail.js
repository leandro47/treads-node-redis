import nodemailer from 'nodemailer';
import mailConfig from '../../config/mail';


export default nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ef908eb213ff57",
      pass: "447c4fa38617e3"
    }
  });