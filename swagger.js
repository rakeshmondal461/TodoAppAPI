const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Todo API documentation",
      version: "1.0.0",
      description:
        "This is a REST API application made with Express. It retrieves data from Todo API.",
    },
    servers: [
      {
        url: "http://localhost:3030",
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js", "./models/*.js"], // Specify the path to your API routes or JSDoc annotated files
};

// Initialize Swagger-jsdoc
const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = { swaggerUi, swaggerSpec };
