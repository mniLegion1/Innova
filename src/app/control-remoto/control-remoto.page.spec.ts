import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControlRemotoPage } from './control-remoto.page';

describe('ControlRemotoPage', () => {
  let component: ControlRemotoPage;
  let fixture: ComponentFixture<ControlRemotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlRemotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlRemotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
