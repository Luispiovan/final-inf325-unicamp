// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

db.createCollection('Subscription', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "product", "type", "name", "description", "recurrence", "price", "status"],
      properties: {
        _id: {
          bsonType: "string",
          description: "must be a string for identifier"
        },
        product: {
          validator: {
            $jsonSchema: {
              bsonType: "object",
              required: ["item", "sku", "size", "product_id", "product_name", "description", "quantity"],
              properties: {
                item: {
                  bsonType: "string",
                  description: "must be a string for item"
                },
                sku: {
                  bsonType: "string",
                  description: "must be a string for sku"
                },
                size: {
                  bsonType: "int",
                  description: "must be an integer for size"
                },
                product_id: {
                  bsonType: "int",
                  description: "must be an integer for product id"
                },
                product_name: {
                  bsonType: "string",
                  description: "must be a string for product name"
                },
                description: {
                  bsonType: "string",
                  description: "must be a string for description"
                },
                quantity: {
                  bsonType: "int",
                  description: "must be an integer for quantity products"
                },
              }
            },
          }
        },
        type: {
          bsonType: "string",
          description: "must be a string for type"
        },
        name: {
          bsonType: "string",
          description: "must be a string for name"
        },
        description: {
          bsonType: "string",
          description: "must be a string for description"
        },
        recurrence: {
          bsonType: "string",
          description: "must be a string for recurrence"
        },
        price: {
          bsonType: ["double"],
          minimum: 0.0,
          maximum: 9999.99,
          description: "must be a string for identifier"
        },
        status: {
          bsonType: "string",
          description: "must be a string for status"
        },
      }
    }
  }
});

db.createCollection('Customer', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "name", "last_name", "user_name", "password", "email", "membership", "subscription", "address", "status", "payment"],
      properties: {
        _id: {
          bsonType: "string",
          description: "must be a string for identifier"
        },
        name: {
          bsonType: "string",
          description: "must be a string for name"
        },
        last_name: {
          bsonType: "string",
          description: "must be a string for last name"
        },
        user_name: {
          bsonType: "string",
          description: "must be a string for user name"
        },
        password: {
          bsonType: "string",
          description: "must be a string and is required for password"
        },
        email: {
          bsonType: "string",
          description: "must be a string and is required for e-mail"
        },
        membership: {
          bsonType: "string",
          description: "must be a string for membership"
        },
        subscription: {
          bsonType: "string",
          description: "must be a string for subscription"
        },
        address: {
          bsonType: "object",
          required: ["city", "country", "postal_code"],
          properties: {
            city: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            country: {
              bsonType: "string",
              description: "must be a string if the field exists"
            },
            postal_code: {
              bsonType: ["double"],
              description: "must be a string if the field exists"
            },
          }
        }
      },
      status: {
        bsonType: "string",
        description: "must be a string for status"
      },
      payment: {
        bsonType: "object",
        required: ["_id", "method", "subscription", "name", "total", "currency"],
        properties: {
          _id: {
            bsonType: "string",
            description: "must be a string for identifier"
          },
          method: {
            bsonType: "string",
            description: "must be a string for method"
          },
          subscription: {
            bsonType: "string",
            description: "must be a string for subscription"
          },
          name: {
            bsonType: "string",
            description: "must be a string for name"
          },
          total: {
            bsonType: ["double"],
            minimum: 0.0,
            maximum: 9999.99,
            description: "must be a number for total"
          },
          currency: {
            bsonType: "string",
            description: "must be a string for currency"
          },
        }
      }
    }
  }
});

db.createCollection('Membership', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "title", "name", "description", "benefits", "startDate", "endDate"],
      properties: {
        _id: {
          bsonType: "string",
          description: "must be a string for identifier"
        },
        title: {
          bsonType: "string",
          description: "must be a string for title"
        },
        name: {
          bsonType: "string",
          description: "must be a string for name"
        },
        description: {
          bsonType: "string",
          description: "must be a string for description"
        },
        benefits: {
          bsonType: "object",
          required: ["type_subscription", "freeshipping", "discount"],
          properties: {
            type_subscription: {
              bsonType: "string",
              description: "must be a string for type description"
            },
            freeshipping: {
              bsonType: "Boolean",
              description: "must be a true or false for free shipping available"
            },
            discount: {
              bsonType: "int",
              minimum: 0.0,
              maximum: 9999.99,
              description: "must be an integer in [ 2017, 3017 ] and is required"
            },
          }
        },
        startDate: {
          bsonType: "Date",
          description: "must be a initial date for signature"
        },
        endDate: {
          bsonType: "Date",
          description: "must be a final date for signature"
        },
      }
    }
  }
});

db.createCollection('Payment', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "method", "subscription", "name", "total", "currency"],
      properties: {
        _id: {
          bsonType: "string",
          description: "must be a string for identifier"
        },
        method: {
          bsonType: "string",
          description: "must be a string for method"
        },
        subscription: {
          bsonType: "string",
          description: "must be a string for subscription"
        },
        name: {
          bsonType: "string",
          description: "must be a string for name"
        },
        total: {
          bsonType: ["double"],
          minimum: 0.0,
          maximum: 9999.99,
          description: "must be a string for identifier"
        },
        currency: {
          bsonType: "string",
          description: "must be a string for currency"
        },
      }
    }
  }
});

db.sales.drop();

// Insert a few documents into the sales collection.
db.sales.insert([{
    '_id': 1,
    'item': 'abc',
    'price': 10,
    'quantity': 2,
    'date': new Date('2014-03-01T08:00:00Z')
  },
  {
    '_id': 2,
    'item': 'jkl',
    'price': 20,
    'quantity': 1,
    'date': new Date('2014-03-01T09:00:00Z')
  },
  {
    '_id': 3,
    'item': 'xyz',
    'price': 5,
    'quantity': 10,
    'date': new Date('2014-03-15T09:00:00Z')
  },
  {
    '_id': 4,
    'item': 'xyz',
    'price': 5,
    'quantity': 20,
    'date': new Date('2014-04-04T11:21:39.736Z')
  },
  {
    '_id': 5,
    'item': 'abc',
    'price': 10,
    'quantity': 10,
    'date': new Date('2014-04-04T21:23:13.331Z')
  },
  {
    '_id': 6,
    'item': 'def',
    'price': 7.5,
    'quantity': 5,
    'date': new Date('2015-06-04T05:08:13Z')
  },
  {
    '_id': 7,
    'item': 'def',
    'price': 7.5,
    'quantity': 10,
    'date': new Date('2015-09-10T08:43:00Z')
  },
  {
    '_id': 8,
    'item': 'abc',
    'price': 10,
    'quantity': 5,
    'date': new Date('2016-02-06T20:20:13Z')
  },
]);

// Run a find command to view items sold on April 4th, 2014.
db.sales.find({
  date: {
    $gte: new Date('2014-04-04'),
    $lt: new Date('2014-04-05')
  }
});

// Build an aggregation to view total sales for each product in 2014.
const aggregation = [{
    $match: {
      date: {
        $gte: new Date('2014-01-01'),
        $lt: new Date('2015-01-01')
      }
    }
  },
  {
    $group: {
      _id: '$item',
      totalSaleAmount: {
        $sum: {
          $multiply: ['$price', '$quantity']
        }
      }
    }
  }
];

// Run the aggregation and open a cursor to the results.
// Use toArray() to exhaust the cursor to return the whole result set.
// You can use hasNext()/next() to iterate through the cursor page by page.
db.sales.aggregate(aggregation);