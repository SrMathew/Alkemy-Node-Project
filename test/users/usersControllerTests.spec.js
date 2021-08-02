const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const userController = require('../../controllers/users');

const { Users } = require('../../models/index');

describe("User Controller methods", function () {
  beforeEach(function () {
    sinon.stub(Users,"findAll").returns({name:"dario",age:19,estudiante:true});
    sinon.stub(Users,"findByPk").returns({name:"dario",age:19,estudiante:true});
    //sinon.stub(Users,"create").returns(user);
    sinon.stub(Users,"update").returns({user:"Updated"});
    sinon.stub(Users,"destroy").returns({user:"Deleted"});
  });
  afterEach(function () {
    Users.findAll.restore();
    Users.findByPk.restore();
    //Users.create.restore();
    Users.update.restore();
    Users.destroy.restore();
  });

  it("should test if the getAllUsers method uses the stubs and return fake users ", async function () {
    req = {};
    res = {
      status:(status)=>status,
      send:(respuesta)=>{return{respuesta}}
    };
    next = (err)=>{console.log(err);};

    await userController.getAllUsers(req, res ,next);

    expect(Users.findAll.calledOnce).to.be.true;

  });
  it("should test if the getUser method uses the stubs and return a fake user", async function () {
    req = {params: 1};
    res = {
      status:(status)=>status,
      send:(respuesta)=>{return{respuesta}}
    };
    next = (err)=>{console.log(err);};

    await userController.getUser(req, res ,next);

    expect(Users.findByPk.calledOnce).to.be.true;

  });
  it("should test if the createUser method uses the stubs and return a fake createdUser ", async function () {
    req = {body: {name:"Link",age:22,adventure:true,password:"1234"}};
    res = {
      status:(status)=>status,
      send:(respuesta)=>{return{respuesta}}
    };
    next = (err)=>{console.log(err);};

    sinon.stub(Users,"create").returns(req.body);

    await userController.createUser(req, res ,next);

    expect(Users.create.calledOnce).to.be.true;

    Users.create.restore();

  });
  it("should test if the updateUser method uses the stubs and return a fake userUpdated ", async function () {
    req = {
      params: 1,
      body: {name:"Link",age:22,adventure:true,password:"1234"}
    };
    res = {
      status:(status)=>status,
      send:(respuesta)=>{return{respuesta}}
    };
    next = (err)=>{console.log(err);};

    await userController.updateUser(req, res ,next);

    expect(Users.update.calledOnce).to.be.true;

  });
  it("should test if the deleteUser method uses the stubs and return a fake userDeleted ", async function () {
    req = {params: 1};
    res = {
      status:(status)=>status,
      send:(respuesta)=>{return{respuesta}}
    };
    next = (err)=>{console.log(err);};

    await userController.deleteUser(req, res ,next);

    expect(Users.destroy.calledOnce).to.be.true;

  });

});
