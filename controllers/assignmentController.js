const Assignment = require('../models/Assignment')

exports.createAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.create(req.body);
    res.status(201).json(assignment);
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
};

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.findAll({ where: req.query });
    res.json(assignments);
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
};

exports.updateAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const assignment = await Assignment.update(req.body, { where: { id } });
    res.json(assignment);
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
};

exports.deleteAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    await Assignment.destroy({ where: { id } })
    res.status(204).send()
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
};
