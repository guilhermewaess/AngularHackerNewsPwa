import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { FeedComponent } from './feed.component';
import { HackerNewsService } from '../../services/hacker-news.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material/material.module';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;
  let activatedRouteMock;
  let hackerNewsServiceStub;
  let feeds: Subject<Array<Object>>;

  const helper = {
    createHackerNewsServiceStub() {
      hackerNewsServiceStub = {
        getFeed: jasmine.createSpy().and.returnValue(feeds),
      }
    },
    createActivatedRouteStub() {
      activatedRouteMock = {
        data: Observable.of({ feed: 'feedRoute' })
      }
    },
    createFeeds() {
      feeds = new BehaviorSubject(new Array(20));
    }
  };

  beforeEach(async(() => {
    helper.createFeeds();
    helper.createHackerNewsServiceStub();
    helper.createActivatedRouteStub();

    TestBed.configureTestingModule({
      declarations: [FeedComponent],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        { provide: HackerNewsService, useValue: hackerNewsServiceStub },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
  });

  describe('When constructed', () => {
    beforeEach(() => {
    });
    it('should have feedsShowed empty', () => {
      expect(component.feedsShowed).toEqual([]);
    });
    it('should have length null', () => {
      expect(component.feedsLength).toBeNull;
    });
    it('should have pageSizeOptions', () => {
      expect(component.pageSizeOptions).toEqual([5, 10, 25, 100]);
    });
    it('should start with pageSize 5', () => {
      expect(component.pageSize).toEqual(5);
    });
    it('should have startSlice 0', () => {
      expect(component.startSlice).toEqual(0);
    });
    it('should start finalSlice with pageSize', () => {
      expect(component.finalSlice).toEqual(component.pageSize);
    });
    it('should start on currentPage 0', () => {
      expect(component.currentPage).toEqual(0);
    });
  });

  describe('when initiated', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });
    it('should call getFeed from hackernews with feed gotten from route', () => {
      expect(hackerNewsServiceStub.getFeed).toHaveBeenCalledWith('feedRoute');
    });

    describe('When new feed result arrive', () => {
      beforeEach(() => {
        feeds.next([
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        ]);
      });
      it('should update feedsLength', () => {
        let feedsLength;
        feeds.subscribe(res => feedsLength = res.length);
        expect(component.feedsLength).toEqual(feedsLength);
      });
      it('should update feedsShowed with correct pagination', () => {
        let expected;
        feeds.subscribe(result => expected = result.slice(0, 5));
        expect(component.feedsShowed).toEqual(expected);
      });
    });
  });

  describe('When onPageEvent happen', () => {
    let event;
    beforeEach(() => {
      event = { pageSize: 5, pageIndex: 0 };
      hackerNewsServiceStub.getFeed.calls.reset();

      component.currentPage = 1;
      component.startSlice = 10;
      component.finalSlice = 15;
    });
    describe('and the event is going to next page', () => {
      beforeEach(() => {
        event.pageIndex = 2;

        component.onPageChange(event);
      });
      it('should update startSlice with current finalSlice', () => {
        expect(component.startSlice).toEqual(15);
      });
      it('should update finalSlice with currentFinalSlice plus pageSize', () => {
        expect(component.finalSlice).toEqual(15 + event.pageSize);
      });
      it('should update currentePage with event pageIndex', () => {
        expect(component.currentPage).toEqual(event.pageIndex);
      });
      it('should call getFeeds for update', () => {
        expect(hackerNewsServiceStub.getFeed).toHaveBeenCalledTimes(1);
      });
    });
    describe('and the event is going to previous page', () => {
      beforeEach(() => {
        event.pageIndex = 0;

        component.onPageChange(event);
      });
      it('should update finalSlice with startSlice', () => {
        expect(component.finalSlice).toEqual(10);
      });
      it('should update startSlice with current startSlice less pageSize', () => {
        expect(component.startSlice).toEqual(10 - event.pageSize);
      });
      it('should update currentePage with event pageIndex', () => {
        expect(component.currentPage).toEqual(event.pageIndex);
      });
      it('should call getFeeds for update', () => {
        expect(hackerNewsServiceStub.getFeed).toHaveBeenCalledTimes(1);
      });
    });

  });
});
