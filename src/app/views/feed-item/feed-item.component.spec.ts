import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { FeedItemComponent } from './feed-item.component';
import { HackerNewsService } from '../../services/hacker-news.service';
import { MatDialog } from '@angular/material';
import { MaterialModule } from '../../material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { UserDetailComponent } from '../user-detail/user-detail.component';

describe('FeedItemComponent', () => {

  let component: FeedItemComponent;
  let fixture: ComponentFixture<FeedItemComponent>;
  let hackerNewsServiceStub;
  let dialogStub;
  let itemMock;

  const helper = {
    createServiceStub: () => ({
      getItem: jasmine.createSpy().and.returnValue(Observable.of(itemMock)),
    }),
    createDialogStub: () => ({ open: jasmine.createSpy().and.returnValue({}) }),
    createItemMock: () => ({ itemId: 1 })
  }

  beforeEach(async(() => {
    itemMock = helper.createItemMock();
    hackerNewsServiceStub = helper.createServiceStub();
    dialogStub = helper.createDialogStub();

    TestBed.configureTestingModule({
      declarations: [
        FeedItemComponent
      ],
      providers: [
        { provide: HackerNewsService, useValue: hackerNewsServiceStub },
        { provide: MatDialog, useValue: dialogStub }
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        MaterialModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedItemComponent);
    component = fixture.componentInstance;
    component.itemId = 2;
    fixture.detectChanges();
  });

  describe('When the class initiate', () => {
    it('Should get items from HackerNewsService', () => {
      expect(hackerNewsServiceStub.getItem).toHaveBeenCalledWith(component.itemId);
    });

    it('Should assign getItem return at this.item', () => {
      component.item.subscribe(value => {
        expect(value).toEqual(itemMock);
      })
    });
  });

  describe('When user request to see details in item dialog', () => {
    let userId;

    beforeEach(() => {
      userId = 1;
      component.openUserDetailDialog(userId);
    });

    it('Should open the dialog', () => {
      expect(dialogStub.open).toHaveBeenCalledWith(UserDetailComponent, { data: { userId } });
    });
  });

});
