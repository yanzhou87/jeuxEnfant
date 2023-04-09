import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJeuPourTypeFrancaisComponent } from './page-jeu-pour-type-francais.component';

describe('PageJeuPourTypeFrancaisComponent', () => {
  let component: PageJeuPourTypeFrancaisComponent;
  let fixture: ComponentFixture<PageJeuPourTypeFrancaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJeuPourTypeFrancaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageJeuPourTypeFrancaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
