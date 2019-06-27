import { async, TestBed } from '@angular/core/testing';
import { ConfiguradorComponent } from './configurador.component';
describe('ConfiguradorComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ConfiguradorComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ConfiguradorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=configurador.component.spec.js.map