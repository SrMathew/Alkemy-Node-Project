const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const memberController = require('../../controllers/members');

const { members } = require('../../models/index');

describe('members Controller methods', function () {
  beforeEach(function () {
    sinon.stub(members, 'findAndCountAll').returns({
      name: 'Member',
      image: 'https://dsaa.org/files/_cache/0e1c74c10386ea8051f8fc4240e5eb81.png',
    });
    sinon.stub(members, 'findOne').returns({
      name: 'Member',
      image: 'https://dsaa.org/files/_cache/0e1c74c10386ea8051f8fc4240e5eb81.png ',
    });
    sinon.stub(members, 'create').returns({
      name: 'Member',
      image: 'https://dsaa.org/files/_cache/0e1c74c10386ea8051f8fc4240e5eb81.png',
    });
    sinon.stub(members, 'update').returns({ Member: 'Updated' });
    sinon.stub(members, 'destroy').returns({ Member: 'Deleted' });
  });
  afterEach(function () {
    members.findAndCountAll.restore();
    members.findOne.restore();
    members.create.restore();
    members.update.restore();
    members.destroy.restore();
  });

  it('should test if the getAllmembers method uses the stubs and return fake members ', async function () {
    req = {
      query: {
        page: 0,
      },
    };
    res = {
      status: status => status,
      send: respuesta => {
        return { respuesta };
      },
    };
    next = err => {
      console.log(err);
    };

    await memberController.getMembers(req, res, next);

    expect(members.findAndCountAll.calledOnce).to.be.true;
  });

  it('should test if the getMember method uses the stubs and return a fake member', async function () {
    req = { params: 1 };
    res = {
      status: status => status,
      send: respuesta => {
        return { respuesta };
      },
    };
    next = err => {
      console.log(err);
    };

    await memberController.getMembersById(req, res, next);

    expect(members.findOne.calledOnce).to.be.true;
  });

  it('should test if the createMember method uses the stubs and return a fake createdMember ', async function () {
    req = {
      body: {
        name: 'memberCreated',
        image: 'https://aram-sadad.com/wp-content/uploads/2019/05/members.jpg',
      },
    };
    res = {
      status: status => status,
      send: respuesta => {
        return { respuesta };
      },
    };
    next = err => {
      console.log(err);
    };

    await memberController.createMember(req, res, next);

    expect(members.create.calledOnce).to.be.true;
  });

  it('should test if the updateMember method uses the stubs and return a fake memberUpdated ', async function () {
    req = {
      params: 1,
      body: {
        name: 'MemberUpdated',
        image: 'https://aram-sadad.com/wp-content/uploads/2019/05/members.jpg',
      },
    };
    res = {
      status: status => status,
      send: respuesta => {
        return { respuesta };
      },
    };
    next = err => {
      console.log(err);
    };

    await memberController.updateMembers(req, res, next);

    expect(members.update.calledOnce).to.be.true;
  });

  it('should test if the deleteMember method uses the stubs and return a fake memberDeleted ', async function () {
    req = { params: 1 };
    res = {
      status: status => status,
      send: respuesta => {
        return { respuesta };
      },
    };
    next = err => {
      console.log(err);
    };

    await memberController.deleteMember(req, res, next);

    expect(members.destroy.calledOnce).to.be.true;
  });
});
