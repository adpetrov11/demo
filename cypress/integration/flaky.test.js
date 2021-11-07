/// <reference types="cypress" />

let count = 0

context('attempt for failed test', () => {
  beforeEach(() => {
    count++
  })

  it('Tests passes only third time', () => {
    if (count < 3) {
      expect(false).to.be.true
    }
  })
})
