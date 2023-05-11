import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOnlyLibDinoComponent } from './header-only-lib-dino.component';

describe('HeaderOnlyLibDinoComponent', () => {
  let component: HeaderOnlyLibDinoComponent;
  let fixture: ComponentFixture<HeaderOnlyLibDinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderOnlyLibDinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOnlyLibDinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
