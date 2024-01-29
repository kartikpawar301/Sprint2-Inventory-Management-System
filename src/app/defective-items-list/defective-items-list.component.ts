import { Component, OnInit } from '@angular/core';
import { DefectiveItems } from '../defective-items';
import { DefectiveItemsService } from '../defective-items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-defective-items-list',
  templateUrl: './defective-items-list.component.html',
  styleUrl: './defective-items-list.component.css'
})
export class DefectiveItemsListComponent implements OnInit
{
  defectiveItemss!:DefectiveItems[];

  constructor(private defectiveItemsService:DefectiveItemsService, private router: Router)
  {

  }

  ngOnInit(): void 
  {
    this.getDefectiveItemss();
  }

  private getDefectiveItemss()
  {
    this.defectiveItemsService.getAllDefectiveItemsList().subscribe(data=>
      {
        this.defectiveItemss=data;
      }
    );
  }

  defectiveItemsDetails(defectiveItemsId:number)
  {
    this.router.navigate(['defective-items-details', defectiveItemsId])
  }

  updateDefectiveItems(defectiveItemsId:number)
  {
    this.router.navigate(['update-defective-items', defectiveItemsId]);
  }

  deleteDefectiveItems(defectiveItemsId:number)
  {
    this.defectiveItemsService.deleteDefectiveItems(defectiveItemsId).subscribe(data=>
      {
        console.log(data);
        this.getDefectiveItemss();
      }
    );
  }

}
