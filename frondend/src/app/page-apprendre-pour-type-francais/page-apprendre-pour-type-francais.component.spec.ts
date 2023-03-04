import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageApprendrePourTypeFrancaisComponent } from './page-apprendre-pour-type-francais.component';

describe('PageApprendrePourTypeFrancaisComponent', () => {
  let component: PageApprendrePourTypeFrancaisComponent;
  let fixture: ComponentFixture<PageApprendrePourTypeFrancaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageApprendrePourTypeFrancaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageApprendrePourTypeFrancaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
