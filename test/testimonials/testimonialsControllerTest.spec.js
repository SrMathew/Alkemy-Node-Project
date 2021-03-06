const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const testimonialController = require('../../controllers/testimonials');

const { Testimonial } = require('../../models/index');

describe("Testimonial Controller methods", function () {    
   beforeEach(function () {
    sinon.stub(Testimonial,"findAndCountAll")
        .returns({name: "Testimonial", 
            image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
            content: "Testimonial about an Organization"
        });
    sinon.stub(Testimonial,"create")
        .returns({name: "Testimonial", 
            image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
            content: "Testimonial about an Organization"
        });
    sinon.stub(Testimonial,"update").returns({Testimonial: "Updated"});
    sinon.stub(Testimonial,"destroy").returns({Testimonial: "Deleted"});
  });
 afterEach(function () {
    Testimonial.findAndCountAll.restore();
    Testimonial.create.restore();
    Testimonial.update.restore();
    Testimonial.destroy.restore();
  });
it("should test if the paginationTestimonials method uses the stubs and returns fake Testimonial", async function () {
    req = {query: {page: 2}};
    res = {
      status: status => status,
      send: response => response 
    };
    next = err => console.log(err);

    await testimonialController.paginationTestimonials(req, res, next)
    expect(Testimonial.findAndCountAll.calledOnce).to.be.true
    
  })
it("should test if the createTestimonial method uses the stubs and returns fake createdTestimonial", async function () {
    req = {};
    res = {
      status: status => status,
      send: response => response 
    };
    next = err => console.log(err);

    await testimonialController.createTestimonial(req, res, next)
    expect(Testimonial.create.calledOnce).to.be.true
    
  })
it("should test if the updateTestimonial method uses the stubs and returns fake updatedTestimonial", async function () {
    req = {params: 1};
    res = {
      status: status => status,
      send: response => response 
    };
    next = err => console.log(err);

    await testimonialController.updateTestimonial(req, res, next)
    expect(Testimonial.update.calledOnce).to.be.true
    
  })
it("should test if the deleteTestimonial method uses the stubs and returns fake deletedTestimonial", async function () {
    req = {params: 1};
    res = {
      status: status => status,
      send: response => response 
    };
    next = err => console.log(err);

    await testimonialController.deleteTestimonial(req, res, next)
    expect(Testimonial.destroy.calledOnce).to.be.true
    
  })
  



});