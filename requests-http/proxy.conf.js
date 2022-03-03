// no meu projeto angular conseguiu se conectar com o backend sem utilizar o cors,
// aula a título de aprendizado

const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "http://localhost:8000/",
    secure: false,
    logLevel: "debug",
    pathRewrite: { "^/api": "" },
  },
];

module.exports = PROXY_CONFIG;
