const express = require('express');
const router = express.Router();
const { auth, isAdmin } = require('../middleware/auth');
const routeController = require('../controllers/routeController');

// Routes Management
router.post('/', auth, isAdmin, routeController.createRoute);
router.get('/', auth, isAdmin, routeController.getAllRoutes);
router.get('/:id', auth, isAdmin, routeController.getRouteDetails);
router.put('/:id', auth, isAdmin, routeController.updateRoute);
router.delete('/:id', auth, isAdmin, routeController.deleteRoute);

// Stop Management
router.post('/:id/stops', auth, isAdmin, routeController.addStop);
router.put('/:id/stops/:stopId', auth, isAdmin, routeController.updateStop);
router.delete('/:id/stops/:stopId', auth, isAdmin, routeController.removeStop);
router.get('/:id/stops', auth, isAdmin, routeController.getStops);

// Route Optimization
router.put('/:id/peak-hours', auth, isAdmin, routeController.updatePeakHours);
router.put('/:id/demand-level', auth, isAdmin, routeController.updateDemandLevel);
router.get('/analytics', auth, isAdmin, routeController.getRouteStatistics);

module.exports = router;