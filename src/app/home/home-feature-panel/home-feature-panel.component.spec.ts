import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturePanelComponent } from './home-feature-panel.component';

describe('HomeFeaturePanelComponent', () => {
  let component: HomeFeaturePanelComponent;
  let fixture: ComponentFixture<HomeFeaturePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFeaturePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFeaturePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
