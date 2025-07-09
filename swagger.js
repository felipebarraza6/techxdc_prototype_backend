import swaggerAutogen from 'swagger-autogen';
const outputFile = './swagger.json';
const endPointsFiles = ['./src/app.ts'];
const doc = {
  info: {
    title: 'SmartHidro 2025',
    description: 'API'
  },
  host: 'localhost:3000',
  schemes: ['http'],
};


const routes = ['./path/userRoutes.js', './path/bookRoutes.js'];

swaggerAutogen()(outputFile, endPointsFiles, doc);