import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResultatComponent } from './page-resultat.component';

describe('PageResultatComponent', () => {
  let component: PageResultatComponent;
  let fixture: ComponentFixture<PageResultatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageResultatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
