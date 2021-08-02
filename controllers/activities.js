const activitiesService = require('../services/activitiesService');
const statusCodes = require('../constants/statusCodes');
const statusMessages = require('../constants/statusMessages');
const { setResponseWithOk } = require('../util/common-response');

exports.getActivities = async (req, res, next) => {
  try {
    const activities = await activitiesService.getAllActivities();
    setResponseWithOk(res, statusCodes.OK, statusMessages.SUCCESS, 'ok', activities);
  } catch (error) {
    next(error);
  }
};

exports.createActivities = async (req, res, next) => {
  try {
    const activities = await activitiesService.postActivities(req.body);
    return setResponseWithOk(
      res,
      statusCodes.CREATED,
      statusMessages.SUCCESS_CREATE,
      'ok',
      activities
    );
  } catch (error) {
    next(error);
  }
};

exports.updateActivities = async (req, res, next) => {
  try {
    await activitiesService.updateA(req.body, req.params.id);
    const updateActivity = await activitiesService.getActivitiesById(req.params.id);
    return setResponseWithOk(
      res,
      statusCodes.OK,
      statusMessages.SUCCESS_UPDATE,
      'ok',
      updateActivity
    );
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const activityById = await activitiesService.getActivitiesById(req.params.id);
    setResponseWithOk(
      res,
      statusCodes.OK,
      statusMessages.SUCCESS,
      'ok',
      activityById
    );
  } catch (error) {
    next(error);
  }
};

exports.deleteActivity = async (req, res, next) => {
  try {
    await activitiesService.deleteA(req.params.id);
    setResponseWithOk(res, statusCodes.OK, statusMessages.SUCCESS_DELETE, 'ok');
  } catch (error) {
    next(error);
  }
};
