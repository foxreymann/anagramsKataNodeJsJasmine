var anagrams = require('../a');

describe("anagrams", function() {
    it("recognises that 'Hz' has no anagrams", function() {
        expect(anagrams.anagrams('hz')).toEqual(['hz']);
    });

    it("finds the anagrams of 'ah'", function() {
        expect(anagrams.anagrams('ah')).toEqual(['ah', 'ha']);
    });

    it("finds the permutations of 'add'", function() {
        expect(anagrams.anagrams('add')).toEqual(['add', 'dad'].sort());
    });

    it("finds the permutations of 'enlist'", function() {
        expect(anagrams.anagrams('enlist')).toEqual(['enlist', 'listen', 'inlets', 'silent' ].sort());
    });

});
