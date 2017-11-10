import { TestBed, inject } from '@angular/core/testing';

import { BookmarksService } from './bookmarks.service';
/*
describe('BookmarksService', () => {
  let bs: BookmarksService;

  beforeEach(() => {
    bs = new BookmarksService();
    TestBed.configureTestingModule({
      providers: [BookmarksService]
    });
  });

  describe('getAll()', () => {
    it('returns empty array by default', () => {
      expect(bs.getAll()).toEqual([]);
    });
  });

  describe('add()', () => {
    it('adds given object to the end of items array', () => {
      bs.add({id: 2});
      bs.add({id: 1000});

      expect(bs.getAll()[1]).toEqual({id: 1000});
    });
  });

  describe('remove()', () => {
    beforeEach(() => {
      bs.add({id: 2});
      bs.add({id: 1000});
    });

    it('removes object of given id from items', () => {
      bs.remove(2);
      expect(bs.getAll()).not.toContain({id: 2});
    });

    it('does not change items array if given id doesnt exist', () => {
      bs.remove(7);
      expect(bs.getAll()).toEqual([{id: 2}, {id: 1000}]);
    });
  });

  describe('has()', () => {
    beforeEach(() => {
      bs.add({id: 2});
      bs.add({id: 1000});
    });

    it('returns true if object of given id exists', () => {
      expect(bs.has(2)).toBe(true);
    });

    it('returns false if object of given id doesnt exists', () => {
      expect(bs.has(7)).toBe(false);
    });
  });

  it('should be created', inject([BookmarksService], (bserv: BookmarksService) => {
    bserv.add({id: 2});
    bserv.add({id: 1000});

    expect(bserv.getAll()[1]).toEqual({id: 1000});
  }));
});
*/
