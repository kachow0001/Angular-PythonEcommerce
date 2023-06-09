import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PanelComponent } from './panel.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PanelComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PanelComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'old-ang'`, () => {
    const fixture = TestBed.createComponent(PanelComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('old-ang');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PanelComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('old-ang app is running!');
  });
});
