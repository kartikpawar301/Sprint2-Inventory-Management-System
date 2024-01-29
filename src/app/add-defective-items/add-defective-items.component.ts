import { Component } from '@angular/core';
import { DefectiveItems } from '../defective-items';
import { DefectiveItemsService } from '../defective-items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-defective-items',
  templateUrl: './add-defective-items.component.html',
  styleUrl: './add-defective-items.component.css'
})
export class AddDefectiveItemsComponent 
{
  defectiveItems: DefectiveItems=new DefectiveItems();

  constructor(private defectiveItemsService:DefectiveItemsService, private router:Router){}

  saveDefectiveItems()
  {
    this.defectiveItemsService.createDefectiveItems(this.defectiveItems).subscribe(data=>
      {
        console.log(data);
        this.goToDefectiveItemsList();
      },
      error => console.log(error)
      );
  }

  goToDefectiveItemsList()
  {
    this.router.navigate([`/defectiveItemss`]);
  }

  onSubmit()
  {
    this.saveDefectiveItems();
  }
}
