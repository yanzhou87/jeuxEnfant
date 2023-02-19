import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageApprendrePourTypeChiffresComponent } from './page-apprendre-pour-type-chiffres.component';

describe('PageApprendrePourTypeChiffresComponent', () => {
  let component: PageApprendrePourTypeChiffresComponent;
  let fixture: ComponentFixture<PageApprendrePourTypeChiffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageApprendrePourTypeChiffresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageApprendrePourTypeChiffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
