import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJeuPourTypeChiffresComponent } from './page-jeu-pour-type-chiffres.component';

describe('PageJeuPourTypeChiffresComponent', () => {
  let component: PageJeuPourTypeChiffresComponent;
  let fixture: ComponentFixture<PageJeuPourTypeChiffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJeuPourTypeChiffresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageJeuPourTypeChiffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
