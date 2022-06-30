// Manipulando vários verbos HTTP & Utilizando o Postman

export default function handling(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.json({ method: "GET", endpoint: "Users" });
      break;
    case "POST":
      res.json({ method: "POST", endpoint: "Users" });
      break;
    case "DELETE":
      res.json({ method: "DELETE", endpoint: "Users" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Método ${method} não permitido`);
      break;
  }
}
