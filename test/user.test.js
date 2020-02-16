//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// let mongoose = require('mongoose');
// let User = require('../models/user-model');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

//Our parent block
describe('Users', () => {
	/*
   * Test the /GET route
  */
	describe('/GET user', () => {
		it('it should GET hellow world!', done => {
			chai
				.request(server)
				.get('/')
				.end((err, res) => {
					res.should.status(200);
					expect(res.text).to.equal('hello, world!');
					done();
				});
		});
	});

	/*
   * Test the /POST route
   */
	describe('/POST user data', () => {
		let userDetail;
		beforeEach(() => {
			userDetail = {
				blb_user_id: Number('288'),
				blb_username: 'chatsuperstar0000',
				blb_password:
          '$2b$10$dYgwUfjx69dJZBZ5.ZGVUeKEUQqthKu8/QWtvD2s49hclBtPaEHoe', // Store hash in your password DB.
				blb_original_password:
          '$2b$10$dYgwUfjx69dJZBZ5.ZGVUeKEUQqthKu8/QWtvD2s49hclBtPaEHoe', // Store hash in your password DB.
				blb_email: 'chatsuperstar1011@gmail.com',
				blb_user_image: '😊',
				blb_user_thumb_image: '😊',
				blb_countries_id: '1',
				blb_device_token:
          'f342b520396a9af37caab4e2525389628c0d69869f80ba7688ebb4d2467f688e',
				blb_current_device_token:
          'eyJhbGciOiJSUzI1NiIsImtpZCI6IkpXVFNpZ25pbmdDZXJ0LVN0YWdlIn0.eyJzY29wZSI6WyJwcm9maWxlIiwib3BlbmlkIl0sImNsaWVudF9pZCI6Im9uZS1wb3J0YWwtZGV2IiwiaXNzIjoiaHR0cHM6Ly93ZWJzZWMtc3RnLmNhYmxlLmNvbWNhc3QuY29tIiwiQ09NQ0FTVF9MTkFNRSI6IlJhbWFuYXRoYW4iLCJDT01DQVNUX1VTRVJOQU1FIjoicHJhbWFuMzU3IiwiQ09NQ0FTVF9FTUFJTCI6IlByYXNhbnRoX1JhbWFuYXRoYW5AY29tY2FzdC5jb20iLCJDT01DQVNUX0ZOQU1FIjoiUHJhc2FudGgiLCJDT01DQVNUX09CSkdVSUQiOiJ7ZTdmMTI5MjEtZDY4Ny00OTAxLWIzYTEtOWFhYTNiNmM5NWU4fSIsIkFVVEhfTUVUSE9EIjoiU0ZBIiwiQ09NQ0FTVF9PQkpHVUlEX0JBU0U2NCI6IklTbng1NGZXQVVtem9acXFPMnlWNkE9PSIsIkNPTUNBU1RfR1VJRCI6IjliMTdlNGIzLTY4YTMtNDIyZC1iYWQxLWRlNzg2YzhlMmEyNiIsImV4cCI6MTU3MzE4MDAxMX0.Lv8Tc6PUeNcLEsYaQ1VHsfm2v_iag9ccvZ99ZfmvmNsBj7bGGrFsHnrSiI3x1z4uaqr4KdgCE7hoT4oh4WibR4SHhER8qx-6CZ43cTZ606Sizhjlo2KUQNz3H1k_2MeMLqcdwLqWLk5VutsYuANh_0CNyqsxbwrz_t9TlNvEL-yGf2lr06LzqMtVWbo0P8uUePMR1ouWmZBjM7MAuIDNcZolTNkg_NuU_icvnBuH7NxHiTzKbHCF3W7HxWjMEfKeImCj9TK5WiPB6mnF-r432OJ8qZv0AQ0Uq6PyrRu5IqUKMihRxv7qYTZdwMgvlDpuepEVa1L0VJuUPmnviWPHYA',
				islogin: '1',
				blb_created_date: '2020-02-13T07:28:57.308Z',
				blb_updated_date: '2020-02-13T07:28:57.308Z',
				blb_user_status: '1',
				blb_emoji_signature: '😊😊',
				blb_device_type: 'x86_64',
				blb_device_version: '9.3',
				blb_app_version: '1.0'
			};
		});

		it('should post a user details', (done) => {
			chai
				.request(server)
				.post('/userRegistration')
				.type('form')
				.send(userDetail)
				.end((err, res) => {
					res.should.status(201);
					// res.body.should.have.property('message').eql('User successfully added!');
					// res.body.user.should.have.property('_id');
					done();
				});
		});
	});
});

/*
  * Test the /POST route
  */

describe('/POST user', () => {
	let user;
	beforeEach(() => {
		user = {
			blb_username: '',
			blb_password: '$2b$10$dYgwUfjx69dJZBZ5.ZGVUeKEUQqthKu8/QWtvD2s49hclBtPaEHoe', // Store hash in your password DB.
			blb_original_password: '$2b$10$dYgwUfjx69dJZBZ5.ZGVUeKEUQqthKu8/QWtvD2s49hclBtPaEHoe', // Store hash in your password DB.
			blb_email: 'chatsuperstar1011@gmail.com',
			blb_user_image: '😊',
			blb_user_thumb_image: '😊',
			blb_countries_id: '1',
			blb_device_token: 'f342b520396a9af37caab4e2525389628c0d69869f80ba7688ebb4d2467f688e',
			blb_current_device_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkpXVFNpZ25pbmdDZXJ0LVN0YWdlIn0.eyJzY29wZSI6WyJwcm9maWxlIiwib3BlbmlkIl0sImNsaWVudF9pZCI6Im9uZS1wb3J0YWwtZGV2IiwiaXNzIjoiaHR0cHM6Ly93ZWJzZWMtc3RnLmNhYmxlLmNvbWNhc3QuY29tIiwiQ09NQ0FTVF9MTkFNRSI6IlJhbWFuYXRoYW4iLCJDT01DQVNUX1VTRVJOQU1FIjoicHJhbWFuMzU3IiwiQ09NQ0FTVF9FTUFJTCI6IlByYXNhbnRoX1JhbWFuYXRoYW5AY29tY2FzdC5jb20iLCJDT01DQVNUX0ZOQU1FIjoiUHJhc2FudGgiLCJDT01DQVNUX09CSkdVSUQiOiJ7ZTdmMTI5MjEtZDY4Ny00OTAxLWIzYTEtOWFhYTNiNmM5NWU4fSIsIkFVVEhfTUVUSE9EIjoiU0ZBIiwiQ09NQ0FTVF9PQkpHVUlEX0JBU0U2NCI6IklTbng1NGZXQVVtem9acXFPMnlWNkE9PSIsIkNPTUNBU1RfR1VJRCI6IjliMTdlNGIzLTY4YTMtNDIyZC1iYWQxLWRlNzg2YzhlMmEyNiIsImV4cCI6MTU3MzE4MDAxMX0.Lv8Tc6PUeNcLEsYaQ1VHsfm2v_iag9ccvZ99ZfmvmNsBj7bGGrFsHnrSiI3x1z4uaqr4KdgCE7hoT4oh4WibR4SHhER8qx-6CZ43cTZ606Sizhjlo2KUQNz3H1k_2MeMLqcdwLqWLk5VutsYuANh_0CNyqsxbwrz_t9TlNvEL-yGf2lr06LzqMtVWbo0P8uUePMR1ouWmZBjM7MAuIDNcZolTNkg_NuU_icvnBuH7NxHiTzKbHCF3W7HxWjMEfKeImCj9TK5WiPB6mnF-r432OJ8qZv0AQ0Uq6PyrRu5IqUKMihRxv7qYTZdwMgvlDpuepEVa1L0VJuUPmnviWPHYA',
			islogin: '1',
			blb_created_date: '2020-02-13T07:28:57.308Z',
			blb_updated_date: '2020-02-13T07:28:57.308Z',
			blb_user_status: '1',
			blb_emoji_signature: '😊😊',
			blb_device_type: 'x86_64',
			blb_device_version: '9.3',
			blb_app_version: '1.0',
			blb_user_id: Number('286')
		};
	});

	it('should not POST a user without proper username', (done) => {
		chai.request(server).post('/userRegistration').type('form').send(user).end( (err, res) => {
			res.should.status(400);
			res.body.should.be.a('object');
			res.body.should.have.property('errors');
			res.body.errors.blb_username.should.have.property('kind').eql('required');
			done();
		});
	});
}); 

//Our parent block
describe('Users', () => {
/*
   * Test the /ForgerPassword route
  */
	describe('/ForgerPassword', () => {
		let forgetPW; 
		beforeEach(() => {
			forgetPW = {
				'blb_email' : 'e@4.com'
			};
		});

		it('should GET user details by providing valid email!', done => {
			chai
				.request(server)
				.post('/forgetPassword')
				.type('form')
				.send(forgetPW)
				.end((err, res) => {
					let txt = JSON.parse(res.text);
					res.should.status(200);
					expect(txt.message).to.equal('User found successfully!');
					done();
				});
		});
	});
    
	/*
   * Test the /ForgerPassword route
  */
	describe('/ForgerPassword', () => {
		let forgetPW; 
		beforeEach(() => {
			forgetPW = {
				'blb_email' : 'egff@4.com'
			};
		});

		it('should return the error message on providing invalid email!', done => {
			chai
				.request(server)
				.post('/forgetPassword')
				.type('form')
				.send(forgetPW)
				.end((err, res) => {
					let txt = JSON.parse(res.text);
					res.should.status(200);
					expect(txt.message).to.equal('No such user found!');
					done();
				});
		});
	});
    
});