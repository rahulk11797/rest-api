import { pool } from '../database.mjs';

class EmployeeController {
  constructor() {}

  async getAllEmployees(req, res) {
    try {
      const emp = await pool.query('SELECT * FROM employees');
      res.json(emp.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Database error: ' + err.message });
    }
  }

  async getEmployeeById(req, res) {
    const id = parseInt(req.params.id);
    try {
      const emp = await pool.query('SELECT * FROM employees WHERE emp_id = $1', [id]);
      if (!emp.rows[0]) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.json(emp.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Database error: ' + err.message });
    }
  }
}

export default  EmployeeController;
