const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const activitiesController = require('../../controllers/activities');

const { activities } = require('../../models/index');

describe('activitiesController methods', function () {
  beforeEach(() => {
    sinon.stub(activities, 'findAll').returns({
      name: 'activities',
      image:
        'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
    });
    sinon.stub(activities, 'findOne').returns({
      name: 'activities',
      image:
        'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
    });
    sinon.stub(activities, 'create').returns({
      name: 'activities',
      image:
        'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
    });
    sinon.stub(activities, 'update').returns({ activities: 'Updated' });
    sinon.stub(activities, 'destroy').returns({ activities: 'Deleted' });
  });
  afterEach(function () {
    activities.findAll.restore();
    activities.create.restore();
    activities.findOne.restore();
    activities.update.restore();
    activities.destroy.restore();
  });

  it('should test if the getActivities method uses the stubs and returns fake activitiess', async function () {
    req = {};
    res = {
      status: status => status,
      send: response => response,
    };
    next = err => console.log(err);

    await activitiesController.getActivities(req, res, next);
    expect(activities.findAll.calledOnce).to.be.true;
  });
  it('should test if the getActivityById method uses the stubs and returns a fake activities', async function () {
    req = { params: 1 };
    res = {
      status: status => status,
      send: response => response,
    };
    next = err => console.log(err);

    await activitiesController.getById(req, res, next);
    expect(activities.findOne.calledOnce).to.be.true;
  });
  it('should test if the updateActivities method uses the stubs and returns a fake activitiesUpdated', async function () {
    req = { params: 1 };
    res = {
      status: status => status,
      send: response => response,
    };
    next = err => console.log(err);

    await activitiesController.updateActivities(req, res, next);
    expect(activities.update.calledOnce).to.be.true;
  });
  it('should test if the deleteActivities method uses the stubs and returns a fake activityDeleted', async function () {
    req = { params: 1 };
    res = {
      status: status => status,
      send: response => response,
    };
    next = err => console.log(err);

    await activitiesController.deleteActivity(req, res, next);
    expect(activities.destroy.calledOnce).to.be.true;
  });
  it('should test if the createActivities method uses the stubs and returns a fake activityCreated', async function () {
    req = {
      body: { name: 'activitiesnumber 1', image: 'asd.png', content: 'testContent' },
    };
    res = {
      status: status => status,
      send: response => response,
    };
    next = err => console.log(err);

    await activitiesController.createActivities(req, res, next);
    expect(activities.create.calledOnce).to.be.true;
  });
});
