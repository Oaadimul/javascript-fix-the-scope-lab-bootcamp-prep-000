/*global describe, it */

describe('Fix the Scope', function() {
  describe('myAnimal()', function() {
    it('returns my animal', () => {
      expect(window.myAnimal()).toEqual('dog')
    })
  })

  describe('yourAnimal()', function() {
    it('returns your animal', function(){
      expect(window.yourAnimal()).toEqual('dog')
    })

    it('does not hard-code the answer', function() {
      expect(window.yourAnimal.toString()).toNotContain("return 'cat'")
    })
  })
  
  describe('add2(n)', function() {
    it('adds two to n', function() {
            const n = Math.floor(Math.random() * 1000)
      expect(window.add2(n)).toEqual(n + 2)
    })
  })
  
   describe('funkyFunction()', function() {
    it('FUNKY!', function() {
      expect(typeof window.funkyFunction()).toEqual('FUNKY!')
    })
  })

  describe('theFunk', function () {
    it('is "FUNKY!"', function () {
      var theFunk = "funkyFunction";
      expect(window.theFunk).toEqual('FUNKY!')
  
  console.log('theFunk is FUNKY!')
    })
    
  })

})
