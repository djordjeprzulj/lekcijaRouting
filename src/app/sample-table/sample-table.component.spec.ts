
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTableComponent } from './sample-table.component';

describe('SampleTableComponent', () => {
  let component: SampleTableComponent;
  let fixture: ComponentFixture<SampleTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
