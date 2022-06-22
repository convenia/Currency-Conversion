import app from '#test:modules/app'
import { expect } from 'chai'

describe('Not found route', () => {
  it('should return not found route response', async () => {
    const response = await app
      .get('/')

    expect(response.body).to.deep.equal({
      message: "Not Found",
      error:"Not Found",
      statusCode:404
    })
  })
})
