import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { UserDetailComponent } from './user-detail.component';
import { MaterialModule } from '../../material/material.module';
import { HackerNewsService } from '../../services/hacker-news.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let hackerNewsServiceStub;
  let matDialogData;
  let userMock;

  const helper = {
    createServiceStub() {
      return {
        getUser: jasmine.createSpy().and.returnValue(Observable.of(userMock)),
      }
    },
  }

  beforeEach(async(() => {
    hackerNewsServiceStub = helper.createServiceStub();
    matDialogData = { userId: 1 };
    userMock = { user: 'User' };

    TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      imports: [MaterialModule],
      providers: [
        { provide: HackerNewsService, useValue: hackerNewsServiceStub },
        { provide: MatDialogRef, useValue: jasmine.createSpy() },
        { provide: MAT_DIALOG_DATA, useValue: matDialogData },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
  }));

  describe('when construct', () => {
    beforeEach(() => {
      component.ngOnInit();
    });
    it('should calls hackerNewsService getUser with userId from dialogData', () => {
      expect(hackerNewsServiceStub.getUser).toHaveBeenCalledWith(matDialogData.userId);
    });
    it('should take user from hackerNewsService', () => {
      expect(component.user).toEqual(userMock);
    });
  });
});
