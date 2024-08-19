const url = "http://localhost:3001/event-categories";

export default async function handler(req, res) {
  //let response, eventCategory, newEventCategory, transport;
  switch (req.method) {
    case "GET": {
      let response;
      const { page, perPage, textSearch } = req.query;
      let searchQuery = !textSearch
        ? { page: page, perPage: perPage }
        : { textSearch: textSearch, page: page, perPage: perPage };
      let middleLink = !textSearch ? "?": "/search?";
      let queryCombo = new URLSearchParams(searchQuery);

      response = await fetch(url + middleLink + queryCombo.toString());
      const data = await response.json();
      res.status(200).json(data);
      break;
    }
    case "POST": {
      const eventCategory = req.body;
      const newEventCategory = {
        categoryName: eventCategory.categoryName,
        status: eventCategory.status,
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newEventCategory),
      });
      const transport = await response.json();
      res.status(201).json(transport);
      break;
    }
    default: {
      console.log("Route not specified.");
      break;
    }
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
