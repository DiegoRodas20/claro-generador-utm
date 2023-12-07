import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AnimateModule } from 'primeng/animate';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PaginatorModule } from 'primeng/paginator';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TreeTableModule } from 'primeng/treetable';

const COMPONENTS = [
    AnimateModule,
    AccordionModule,
    BadgeModule,
    ButtonModule,
    BreadcrumbModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    DialogModule,
    InputTextModule,
    InputMaskModule,
    InputNumberModule,
    MegaMenuModule,
    ListboxModule,
    DropdownModule,
    DynamicDialogModule,
    DividerModule,
    PasswordModule,
    TabViewModule,
    MenubarModule,
    TabMenuModule,
    InputTextareaModule,
    ToastModule,
    ConfirmDialogModule,
    PaginatorModule,
    RadioButtonModule,
    SkeletonModule,
    InputSwitchModule,
    TableModule,
    SidebarModule,
    FileUploadModule,
    SlideMenuModule,
    SelectButtonModule,
    SplitButtonModule,
    MenuModule,
    StepsModule,
    TreeTableModule,
    PanelMenuModule
];

@NgModule({
    imports: [COMPONENTS],
    exports: [COMPONENTS],
})

export class PrimeNGModule { }
