import { NgModule } from "@angular/core";

import { GraySectionComponent } from './gray-section/gray-section.component';
import { DealHotComponent } from './deal-hot/deal-hot.component';
import { HomePromotionsComponent } from './home-promotions/home-promotions.component';

@NgModule({
    declarations: [
        GraySectionComponent,
        DealHotComponent,
        HomePromotionsComponent,
        
    ],
    exports:[
        GraySectionComponent,
        DealHotComponent,
        HomePromotionsComponent
    ]
})
export class ComponentModule{}