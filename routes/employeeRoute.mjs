import express from 'express';
import path from 'path';
import EmployeeController from '../controllers/employeeController.mjs';

class EmployeeRouter {
  constructor() {
    this.router = express.Router();
    this.employeeController = new EmployeeController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.use(express.static('public'));

    this.router.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    this.router.get('/employees', this.employeeController.getAllEmployees);
    this.router.get('/employees/:id', this.employeeController.getEmployeeById);
  }
}

export default new EmployeeRouter().router;
