import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/data", (req, res) => {
  const data = [
    {
      id: 1,
      name: "Aquila Systems",
      value: 42,
      active: true,
      tags: ["alpha", "test"],
    },
    {
      id: 2,
      name: "Nimbus Labs",
      value: 87,
      active: false,
      tags: ["beta"],
    },
    {
      id: 3,
      name: "Vertex Co.",
      value: 13,
      active: true,
      tags: [],
    },
    {
      id: 4,
      name: "Solara Tech",
      value: 59,
      active: true,
      tags: ["stable", "release"],
    },
    {
      id: 5,
      name: "Helix Corp",
      value: 24,
      active: false,
      tags: ["deprecated"],
    },
  ];
  res.send(data);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}/api/data`);
});
