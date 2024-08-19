export default async function handler(req, res) {
  const { id } = req.query;
  const url = "http://localhost:3001/event-categories/" + id;
  switch (req.method) {
    case "GET": {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
      break;
    }
    case "PATCH": {
      const eventCategory = req.body;
      const newEventCategory = {
        id: eventCategory.id,
        categoryName: eventCategory.categoryName,
        status: eventCategory.status,
      };
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newEventCategory),
      });
      const transport = await response.json();
      res.status(201).json(transport);
      break;
    }
    case "DELETE": {
      const response = await fetch(url, { method: "DELETE" });
      const data = await response.json();
      res.status(200).json(data);
      break;
    }
    default:
      console.log("Route not specified.");
      break;
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
