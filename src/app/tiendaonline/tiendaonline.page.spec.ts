import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiendaonlinePage } from './tiendaonline.page';

describe('TiendaonlinePage', () => {
  let component: TiendaonlinePage;
  let fixture: ComponentFixture<TiendaonlinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaonlinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiendaonlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
