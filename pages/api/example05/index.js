// Criar uma rota de API usando o pacote next-connect & Utilizando o Postman

import nc from "next-connect";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Algo quebrou!");
  },
  onNoMatch: (req, res) => res.status(404).json({ message: "Não encontrado" }),
})
  .get((req, res) => res.status(200).json({ message: "GET" }))
  .post((req, res) => res.status(200).json({ message: "POST" }))
  .patch((req, res) => res.status(200).json({ message: "PATCH" }))
  .put((req, res) => res.status(200).json({ message: "PUT" }))
  .delete((req, res) => res.status(200).json({ message: "DELETE" }));

export default handler;
