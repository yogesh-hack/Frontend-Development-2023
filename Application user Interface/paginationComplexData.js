const express = require('express');
const router = express.Router();

const product = [
  {
    "southIndian": [
      { "_id": "632dfa7d1a1a42f7f2290c5e" },
      { "_id": "532dfa7d1a1a42f7f2290c5f" },
      { "_id": "432dfa7d1a1a42f7f2290c5g" },
      { "_id": "332dfa7d1a1a42f7f2290c5h" },
      { "_id": "232dfa7d1a1a42f7f2290c5i" },
      { "_id": "132dfa7d1a1a42f7f2290c5j" },
      { "_id": "032dfa7d1a1a42f7f2290c5k" },
      { "_id": "932dfa7d1a1a42f7f2290c5l" },
      { "_id": "832dfa7d1a1a42f7f2290c5m" },
      { "_id": "732dfa7d1a1a42f7f2290c5n" }
    ]
  },
  {
    "indianfood": [
      { "_id": "wjgftr87wr82rt2737r2t7r" },
      { "_id": "xjgftr87wr82rt2737r2t7s" },
      { "_id": "yjgftr87wr82rt2737r2t7t" },
      { "_id": "zjgftr87wr82rt2737r2t7u" },
      { "_id": "ajgftr87wr82rt2737r2t7v" },
      { "_id": "bjgftr87wr82rt2737r2t7w" },
      { "_id": "cjgftr87wr82rt2737r2t7x" },
      { "_id": "djgftr87wr82rt2737r2t7y" },
      { "_id": "ejgftr87wr82rt2737r2t7z" },
      { "_id": "fjgftr87wr82rt2737r2t7a" }
    ]
  }
];

router.get('/products', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  for (let i = 0; i < product.length; i++) {
    const category = Object.keys(product[i])[0];
    const items = product[i][category];

    const paginatedItems = items.slice(startIndex, endIndex);

    results[category] = paginatedItems;

    if (endIndex < items.length) {
      results.next = {
        page: page + 1,
        limit: limit
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      };
    }
  }

  res.json(results);
});
