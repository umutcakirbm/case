import {NavigationComponent} from "./navigation.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('Navigation Component', () => {
  let fixture: ComponentFixture<NavigationComponent>;
  let instance: NavigationComponent;
  let nativeElement: Element;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [NavigationComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(NavigationComponent);
    instance = fixture.debugElement.componentInstance;
    nativeElement = fixture.debugElement.nativeElement;
  });

  it('should show product count on box if count bigger then 0', () => {
    instance.differentProductCount = 1;
    fixture.detectChanges();
    expect((nativeElement.querySelector('#noProductCountBox') as HTMLDivElement).hidden).toEqual(true);
  });

  it('should show no product count on box if count equal to 0', () => {
    instance.differentProductCount = 0;
    fixture.detectChanges();
    expect((nativeElement.querySelector('#productCountBox') as HTMLDivElement).hidden).toEqual(true);
  });

  it('should emit an event if the navigate to button is clicked', () => {

    spyOn(instance.navigateToBoxEvent, 'emit');
    instance.navigateToBox('test');

    expect(instance.navigateToBoxEvent.emit).toHaveBeenCalledWith('test');
  });

});
