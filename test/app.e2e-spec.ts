import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe())
    await app.init();
  });

  //afterEach(() => app.close())

  describe('Auth', () => {
    describe('Post /auth/register', () => {

      // it('should validate the request', () => {
      //   return request(app.getHttpServer())
      //       .post('/auth/register')
      //       .set('Accept', 'application/json')
      //       .send({
      //           email: 'hello@example.com',
      //           dateOfBirth: '2019-01-01'
      //       })
      //       .expect(400)
      //       .expect(res => {
      //           expect(res.body.message).toContain('password should not be empty')
      //           expect(
      //               res.body.message.find((m: string) => m.startsWith('maximal allowed date for dateOfBirth'))
      //           ).toBeDefined()
      //       })
      // })

      it('should return HTTP 200 successful on successful registration', ()=> {

        // let providerToken = `providerToken${Math.random()}`
        // let providerId = `providerId${Math.random()}`
        // let email = `${Math.random()}@gmail.com`

        return request(app.getHttpServer())
        .post('/auth/register')
        .set('Accept', 'application/json')
        .send({
          method: 'google',        
          providerToken: 'providerToken',
          providerId: 'providerId',
          name: 'james',
          email: 'email',
          dateOfBirth: '1990-01-01'
        })
        .expect(201)
        .expect(res => {
          expect(res.body).toBeDefined()
          expect(
            res.body.message.find((m: string) => m.startsWith('maximal allowed date for dateOfBirth'))
          ).toBeDefined()
        })
      })
      

    })
  })


});
