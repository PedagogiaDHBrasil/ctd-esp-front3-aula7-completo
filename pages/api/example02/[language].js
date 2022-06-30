// Rota dinâmica (pegando parâmetro passado pela URL)

export default function language(req, res) {
  const {
    query: { language },
  } = req;

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: `Sua linguagem favorita é ${language}` }));
}
