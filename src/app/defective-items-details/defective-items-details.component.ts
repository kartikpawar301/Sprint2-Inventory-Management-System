import { Component, OnInit } from '@angular/core';
import { DefectiveItems } from '../defective-items';
import { DefectiveItemsService } from '../defective-items.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-defective-items-details',
  templateUrl: './defective-items-details.component.html',
  styleUrl: './defective-items-details.component.css'
})
export class DefectiveItemsDetailsComponent implements OnInit 
{
  defectiveItemsId!:number;
  defectiveItems!:DefectiveItems;

  constructor(private defectiveItemsService: DefectiveItemsService, private route:ActivatedRoute, private router:Router)
  {

  }

  ngOnInit(): void 
  {
    this.defectiveItemsId=this.route.snapshot.params['defectiveItemsId'];

    this.defectiveItems=new DefectiveItems();  

    this.defectiveItemsService.getDefectiveItemsById(this.defectiveItemsId).subscribe(data=>
      {
        this.defectiveItems=data;
      }
    );
  }

  list()
  {
    this.router.navigate([`/defectiveItemss`]);
  }

}
