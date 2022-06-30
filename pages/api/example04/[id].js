// Retornando um erro & Utilizando API middleware

const users = [
  { id: 1, name: "John Smith" },
  { id: 2, name: "Jane Doe" },
];

export default function error(req, res) {
  const {
    query: { id },
  } = req;

  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return res.status(404).json({
      status: 404,
      message: "Não encontrado",
    });
  }

  res.json({ ...user });
}
