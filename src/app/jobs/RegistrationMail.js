import Mail from "..lib/Mail";

export default {
  key: "RegistrationMail",
  options: {
    delay: 5000,
    priority: 3
  },
  async handle({ data }) {
    const { user } = data;

    try {
      await Mail.sendMail({
        from: "DIO <contato@dio.com.br>",
        to: `${name} <${email}>`,
        subject: "Cadastro de usuário",
        html: `Olá, ${name}, bem-vindo a DIO.`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
