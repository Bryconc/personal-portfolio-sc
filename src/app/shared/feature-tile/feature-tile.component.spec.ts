import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTileComponent } from './feature-tile.component';

describe('FeatureTileComponent', () => {
  let component: FeatureTileComponent;
  let fixture: ComponentFixture<FeatureTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
