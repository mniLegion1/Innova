import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AyudaDosPage } from './ayuda-dos.page';

describe('AyudaDosPage', () => {
  let component: AyudaDosPage;
  let fixture: ComponentFixture<AyudaDosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudaDosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AyudaDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
