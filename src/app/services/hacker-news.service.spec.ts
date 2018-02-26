import { HackerNewsService } from './hacker-news.service';
import { Observable } from 'rxjs/Observable';

let service: HackerNewsService;
let angularFirebaseStub;

describe('HackerNewsService', () => {
  beforeEach(() => {
    angularFirebaseStub = {
      list: jasmine.createSpy().and.returnValue({ valueChanges: () => Observable.of([1, 2, 3]) })
    };
    service = new HackerNewsService(angularFirebaseStub);
  });

  fdescribe('getFeed', () => {
    beforeEach(() => {
    });
    it('should call fireBase with arguments', () => {
      service.getFeed('feed1');
      expect(angularFirebaseStub.list).toHaveBeenCalledWith('/v0/feed1');
    });
    it('should return firebase valueChanges', () => {
      service.getFeed('feed1').subscribe(result => expect(result).toEqual([1, 2, 3]));
    });
  });
});
