import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule,
      ReactiveFormsModule
    ]
    }).compileComponents();

    
    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create form on init',()=>{
    component.ngOnInit();
    expect(component.form).not.toBeUndefined();
  })



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should direct to home/profile page',()=>{
    spyOn(router, 'navigate');

    component.loggedin();

    expect(router.navigate).toHaveBeenCalledWith(['home'])

  })

  it('should direct to register page',()=>{
    spyOn(router, 'navigate');

    component.register();

    expect(router.navigate).toHaveBeenCalledWith(['register'])

  })

});
