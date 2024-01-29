import { Component, OnInit } from '@angular/core';
import { DefectiveItems } from '../defective-items';
import { DefectiveItemsService } from '../defective-items.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-defective-items',
  templateUrl: './update-defective-items.component.html',
  styleUrl: './update-defective-items.component.css'
})
export class UpdateDefectiveItemsComponent implements OnInit
{
  defectiveItemsId!:number;
  defectiveItems:DefectiveItems=new DefectiveItems();

  constructor(private defectiveItemsService: DefectiveItemsService, private route: ActivatedRoute, private router: Router)
  {

  }

  ngOnInit(): void {
    
    this.defectiveItemsId=this.route.snapshot.params['defectiveItemsId'];

    this.defectiveItemsService.getDefectiveItemsById(this.defectiveItemsId).subscribe(data=>
      {
        this.defectiveItems=data;
      }, 
      error=>console.log(error));
  }

  onSubmit()
  {
    this.defectiveItemsService.updateDefectiveItems(this.defectiveItems, this.defectiveItemsId).subscribe(data=>
      {
        this.goToDefectiveItemsList();
      }, 
      error=>console.log(error));
  }

  goToDefectiveItemsList()
  {
    this.router.navigate(['defectiveItemss'])
  }

}
