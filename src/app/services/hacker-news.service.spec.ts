import { HackerNewsService } from './hacker-news.service';
import { Observable } from 'rxjs/Observable';

let service: HackerNewsService;
let angularFirebaseStub;
let listReturnMock;
let objectReturnMock;

const helper = {
  createMocks() {
    listReturnMock = [1, 2, 3];
    objectReturnMock = { val: 1 };
  },
  createStub: () => ({
    list: jasmine.createSpy().and.returnValue({ valueChanges: () => Observable.of(listReturnMock) }),
    object: jasmine.createSpy().and.returnValue({ valueChanges: () => Observable.of(objectReturnMock) }),
  }),
}

fdescribe('HackerNewsService', () => {
  beforeEach(() => {
    helper.createMocks();
    angularFirebaseStub = helper.createStub();
    service = new HackerNewsService(angularFirebaseStub);
  });

  describe('getFeed', () => {
    let feedUrl;
    beforeEach(() => {
      feedUrl = 'feed1';
    });
    it('should call fireBase with arguments', () => {
      service.getFeed(feedUrl);
      expect(angularFirebaseStub.list).toHaveBeenCalledWith(`/v0/${feedUrl}`);
    });
    it('should return firebase valueChanges', () => {
      service.getFeed(feedUrl).subscribe(result => expect(result).toEqual(listReturnMock));
    });
  });

  describe('getItem', () => {
    let itemId;
    beforeEach(() => {
      itemId = '1234';
    });
    it('should call fireBase with arguments', () => {
      service.getItem(itemId);
      expect(angularFirebaseStub.object).toHaveBeenCalledWith(`/v0/item/${itemId}`);
    });
    it('should return firebase valueChanges', () => {
      service.getItem(itemId).subscribe(result => expect(result).toEqual(objectReturnMock));
    });
  });

  describe('getUser', () => {
    let userId;
    beforeEach(() => {
      userId = 'user1';
    });
    it('should call fireBase with arguments', () => {
      service.getUser(userId);
      expect(angularFirebaseStub.object).toHaveBeenCalledWith(`/v0/user/${userId}`);
    });
    it('should return firebase valueChanges', () => {
      service.getUser(userId).subscribe(result => expect(result).toEqual(objectReturnMock));
    });
  });
});
